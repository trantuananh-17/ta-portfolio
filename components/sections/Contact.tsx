"use client";

import { useActionState, type ReactNode } from "react";
import { motion } from "motion/react";
import { AlertCircle, ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { RiFacebookFill } from "react-icons/ri";
import { SiZalo } from "react-icons/si";

import { sendContactMessage } from "@/app/actions/contact";
import { initialContactFormState } from "@/lib/contact";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { sectionContainer } from "../ui/container";
import Loading from "../ui/loading";

type ContactItem = {
  id: number;
  label: string;
  value: string;
  href?: string;
  icon: ReactNode;
};

const contactItems: ContactItem[] = [
  {
    id: 1,
    label: "Email",
    value: "trantuananh.anhtt17@gmail.com",
    href: "mailto:trantuananh.anhtt17@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    id: 2,
    label: "Zalo",
    value: "Tuấn Anh",
    href: "https://zalo.me/0918590630",
    icon: <SiZalo className="h-5 w-5" />,
  },
  {
    id: 3,
    label: "Facebook",
    value: "Tuấn Anh",
    href: "https://facebook.com/tanhkyo",
    icon: <RiFacebookFill className="h-5 w-5" />,
  },
  {
    id: 4,
    label: "Location",
    value: "Mễ Trì, Hà Nội",
    icon: <MapPin className="h-5 w-5" />,
  },
];

const sectionVariants = stagger(0.1);

const headerVariants = fadeUp;

const leftPanelVariants = fadeUp;

const formVariants = fadeUp;

const contactListVariants = stagger(0.05, 0.1);

const contactItemVariants = fadeUp;

const inputClassName =
  "border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 h-12 w-full rounded-xl border px-4 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive aria-invalid:focus:ring-destructive/20";

const FieldError = ({ id, message }: { id: string; message?: string }) => {
  if (!message) return null;

  return (
    <p id={id} className="text-destructive text-xs">
      {message}
    </p>
  );
};

const Contact = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  const fieldErrors = state.fieldErrors;

  return (
    <section
      id="contact"
      className="relative  overflow-hidden px-4 py-16 lg:py-24"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={cn("relative", sectionContainer)}
      >
        <motion.div
          variants={headerVariants}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact <span className="text-primary">Me!</span>
          </h2>

          <p className="text-muted-foreground mt-4 text-sm leading-6 sm:text-base">
            Have a project, opportunity, or idea in mind? Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border  lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={leftPanelVariants}
            className="relative overflow-hidden bg-primary p-6 text-primary-foreground sm:p-8 lg:p-10"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-primary-foreground/10" />
            <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full border border-primary-foreground/10" />

            <div className="relative">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground/70 uppercase">
                Contact information
              </p>

              <motion.div
                variants={contactListVariants}
                className="mt-10 space-y-4"
              >
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-primary-foreground">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-primary-foreground/60">
                          {item.label}
                        </p>

                        <p className="mt-1 truncate text-sm font-medium text-primary-foreground">
                          {item.value}
                        </p>
                      </div>

                      {item.href && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-primary-foreground/50" />
                      )}
                    </>
                  );

                  return (
                    <motion.div key={item.id} variants={contactItemVariants}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 transition-colors hover:bg-primary-foreground/10"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-4">
                          {content}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="mt-10 flex items-center gap-3 border-t border-primary-foreground/10 pt-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-40" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-foreground" />
                </span>

                <p className="text-xs text-primary-foreground/70">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={formVariants}
            className="bg-card p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <p className="text-primary text-sm font-semibold">
                Send a message
              </p>

              <h3 className="mt-2 text-2xl font-bold text-foreground">
                Tell me about your idea
              </h3>

              <p className="text-muted-foreground mt-2 text-sm">
                Fill in the form below and I&apos;ll respond shortly.
              </p>
            </div>

            <form action={formAction} className="space-y-5">
              {/* Honeypot: người thật không nhìn thấy, bot điền vào thì bị loại. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    disabled={isPending}
                    defaultValue={state.values?.name}
                    aria-invalid={Boolean(fieldErrors?.name)}
                    aria-describedby={
                      fieldErrors?.name ? "name-error" : undefined
                    }
                    placeholder="Tuấn Anh"
                    className={inputClassName}
                  />

                  <FieldError id="name-error" message={fieldErrors?.name} />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    disabled={isPending}
                    defaultValue={state.values?.email}
                    aria-invalid={Boolean(fieldErrors?.email)}
                    aria-describedby={
                      fieldErrors?.email ? "email-error" : undefined
                    }
                    placeholder="you@example.com"
                    className={inputClassName}
                  />

                  <FieldError id="email-error" message={fieldErrors?.email} />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  disabled={isPending}
                  defaultValue={state.values?.subject}
                  aria-invalid={Boolean(fieldErrors?.subject)}
                  aria-describedby={
                    fieldErrors?.subject ? "subject-error" : undefined
                  }
                  placeholder="Project collaboration"
                  className={inputClassName}
                />

                <FieldError id="subject-error" message={fieldErrors?.subject} />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  disabled={isPending}
                  defaultValue={state.values?.message}
                  aria-invalid={Boolean(fieldErrors?.message)}
                  aria-describedby={
                    fieldErrors?.message ? "message-error" : undefined
                  }
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="border-input bg-background placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/20 aria-invalid:border-destructive aria-invalid:focus:ring-destructive/20 w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <FieldError id="message-error" message={fieldErrors?.message} />
              </div>

              <div aria-live="polite">
                {state.status === "success" && (
                  <div className="border-primary/20 bg-primary/10 text-primary rounded-xl border px-4 py-3 text-sm">
                    {state.message}
                  </div>
                )}

                {state.status === "error" && (
                  <div className="border-destructive/20 bg-destructive/10 text-destructive flex items-start gap-2 rounded-xl border px-4 py-3 text-sm">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{state.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? (
                  <Loading />
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-muted-foreground text-center text-xs">
                Your information will only be used to reply to your message.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
