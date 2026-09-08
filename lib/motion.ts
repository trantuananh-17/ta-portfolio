import type { Variants } from "motion/react";

/**
 * Hệ chuyển động dùng chung cho toàn site.
 *
 * Trước đây mỗi section tự đặt easing, duration và ngưỡng viewport riêng nên
 * animation bật ở những thời điểm khác nhau và cảm giác giật cục. Gom về một
 * bộ token duy nhất để mọi thứ chuyển động cùng một "nhịp".
 */

/** Ease-out mềm, không nảy. */
export const EASE: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

export const DURATION = {
  fast: 0.22,
  base: 0.45,
  slow: 0.7,
};

/**
 * Ngưỡng scroll dùng chung. Margin âm cho animation chạy khi section
 * gần vào khung nhìn, thay vì đợi đúng lúc nhìn thấy mới giật lên.
 */
export const VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -10% 0px",
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base,
      ease: EASE,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.base,
      ease: EASE,
    },
  },
};

/** Container cho các nhóm phần tử xuất hiện lần lượt. */
export const stagger = (children = 0.07, delay = 0.05): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: children,
    },
  },
});

/** Nhấc nhẹ khi hover — dùng chung cho mọi card, không scale để tránh rung chữ. */
export const HOVER_LIFT = {
  y: -4,
};

export const HOVER_TRANSITION = {
  duration: DURATION.fast,
  ease: EASE,
};
