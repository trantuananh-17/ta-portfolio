"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      aria-label="Chuyển chế độ sáng tối"
      onClick={toggleTheme}
      className={[
        "fixed right-6 bottom-20 z-50",
        "flex h-11 w-11 items-center justify-center rounded-full",
        "bg-foreground text-background shadow-lg",
        "transition-transform hover:scale-110 active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-ring focus-visible:ring-offset-2",
      ].join(" ")}
    >
      <Moon aria-hidden="true" className="h-5 w-5 dark:hidden" />

      <Sun aria-hidden="true" className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
