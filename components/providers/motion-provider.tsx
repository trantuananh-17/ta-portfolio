"use client";

import { MotionConfig } from "motion/react";

/**
 * reducedMotion="user" tắt mọi animation transform/layout khi hệ điều hành
 * bật "reduce motion", chỉ giữ lại fade — áp dụng cho toàn bộ motion component.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
