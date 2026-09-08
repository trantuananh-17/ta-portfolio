/**
 * Kiểu và giá trị khởi tạo cho contact form.
 *
 * Tách khỏi `app/actions/contact.ts` vì file `"use server"` chỉ được phép
 * export async function — export thêm một object ở đó làm Next ném
 * `invalid-use-server-value` ngay lúc nạp module, và lỗi chỉ lộ ra khi form
 * được submit chứ không phải lúc build.
 */

export type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof ContactFields, string>>;
  /** React 19 tự reset form sau khi action chạy xong, nên phải trả lại giá trị cũ khi lỗi. */
  values?: ContactFields;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};
