"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import type { ContactFields, ContactFormState } from "@/lib/contact";

// Chỉ được export async function từ file này — kiểu và state khởi tạo nằm ở
// `@/lib/contact`. Xem ghi chú ở đó.

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  subject: 150,
  message: 5000,
} as const;

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_SUBMISSIONS = 5;

/**
 * In-memory limiter: đủ cho portfolio chạy single instance.
 * Nếu scale nhiều replica thì phải chuyển sang Redis/Upstash.
 */
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_SUBMISSIONS) {
    submissionsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionsByIp.set(ip, recent);

  return false;
}

function readField(formData: FormData, name: string): string {
  const value = formData.get(name);

  return typeof value === "string" ? value.trim() : "";
}

function validate(fields: ContactFields): ContactFormState["fieldErrors"] {
  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!fields.name) {
    fieldErrors.name = "Please enter your name.";
  } else if (fields.name.length > MAX_LENGTHS.name) {
    fieldErrors.name = `Name must be under ${MAX_LENGTHS.name} characters.`;
  }

  if (!fields.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    fieldErrors.email = "That email address doesn't look valid.";
  } else if (fields.email.length > MAX_LENGTHS.email) {
    fieldErrors.email = `Email must be under ${MAX_LENGTHS.email} characters.`;
  }

  if (!fields.subject) {
    fieldErrors.subject = "Please enter a subject.";
  } else if (fields.subject.length > MAX_LENGTHS.subject) {
    fieldErrors.subject = `Subject must be under ${MAX_LENGTHS.subject} characters.`;
  }

  if (!fields.message) {
    fieldErrors.message = "Please enter a message.";
  } else if (fields.message.length > MAX_LENGTHS.message) {
    fieldErrors.message = `Message must be under ${MAX_LENGTHS.message} characters.`;
  }

  return Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Bot nào điền vào field ẩn thì bỏ qua, nhưng vẫn trả về success để không lộ bẫy.
  if (readField(formData, "company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const fields = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    subject: readField(formData, "subject"),
    message: readField(formData, "message"),
  };

  const fieldErrors = validate(fields);

  if (fieldErrors) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
      values: fields,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error(
      "Contact form is not configured: RESEND_API_KEY or CONTACT_TO_EMAIL is missing.",
    );

    return {
      status: "error",
      message:
        "The contact form isn't available right now. Please email me directly.",
      values: fields,
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages sent. Please try again later.",
      values: fields,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: fields.email,
      subject: `[Portfolio] ${fields.subject}`,
      text: [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Subject: ${fields.subject}`,
        "",
        fields.message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(fields.message)}</p>
      `,
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);

      return {
        status: "error",
        message: "Could not send your message. Please try again in a moment.",
        values: fields,
      };
    }

    return {
      status: "success",
      message: "Thanks! Your message has been sent — I'll reply soon.",
    };
  } catch (error) {
    console.error("Unexpected error while sending the contact email:", error);

    return {
      status: "error",
      message: "Could not send your message. Please try again in a moment.",
    };
  }
}
