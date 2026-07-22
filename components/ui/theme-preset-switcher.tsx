"use client";

import { Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const THEME_STORAGE_KEY = "theme-preset";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const themes = [
  {
    value: "global",
    label: "Global",
    color: "#6366f1",
  },
  {
    value: "light-green",
    label: "Light Green",
    color: "#22c55e",
  },
  {
    value: "amethyst-haze",
    label: "Amethyst Haze",
    color: "#8b5cf6",
  },
  {
    value: "bold-tech",
    label: "Bold Tech",
    color: "#06b6d4",
  },
  {
    value: "caffeine",
    label: "Caffeine",
    color: "#92400e",
  },
  {
    value: "supabase",
    label: "Supabase",
    color: "#3ecf8e",
  },
  {
    value: "vercel",
    label: "Vercel",
    color: "#000000",
  },
] as const;

export type ThemePreset = (typeof themes)[number]["value"];

type ThemePresetSwitcherProps = {
  initialTheme: ThemePreset;
};

/**
 * Đặt bên ngoài React component để React Compiler
 * không phân tích đây là mutation trong component.
 */
function persistTheme(theme: ThemePreset): void {
  document.documentElement.setAttribute("data-theme-preset", theme);

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);

  const cookieValue = [
    `${THEME_STORAGE_KEY}=${encodeURIComponent(theme)}`,
    "Path=/",
    `Max-Age=${COOKIE_MAX_AGE}`,
    "SameSite=Lax",
  ].join("; ");

  document.cookie = cookieValue;
}

export function ThemePresetSwitcher({
  initialTheme,
}: ThemePresetSwitcherProps) {
  const [theme, setTheme] = useState<ThemePreset>(initialTheme);

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);

      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleThemeChange(newTheme: ThemePreset) {
    persistTheme(newTheme);

    setTheme(newTheme);
    setIsOpen(false);
  }

  const currentTheme = themes.find((item) => item.value === theme) ?? themes[0];

  return (
    <div ref={containerRef} className="fixed right-6 bottom-6 z-50">
      {isOpen && (
        <div
          id="theme-preset-menu"
          role="menu"
          aria-label="Danh sách theme"
          className="absolute right-0 bottom-14 w-52 rounded-2xl bg-background/95 p-2 shadow-xl backdrop-blur"
        >
          <div className="space-y-1">
            {themes.map((item) => {
              const isActive = item.value === theme;

              return (
                <button
                  key={item.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => handleThemeChange(item.value)}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2",
                    "text-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 rounded-full shadow-sm"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span className="flex-1 text-left">{item.label}</span>

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="text-sm font-semibold text-primary"
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Đóng danh sách theme" : "Mở danh sách theme"}
        aria-expanded={isOpen}
        aria-controls="theme-preset-menu"
        onClick={() => setIsOpen((previous) => !previous)}
        className={[
          "relative flex h-11 w-11 items-center justify-center rounded-full",
          "shadow-lg transition-transform",
          "hover:scale-110 active:scale-95",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring focus-visible:ring-offset-2",
        ].join(" ")}
        style={{
          backgroundColor: currentTheme.color,
        }}
      >
        <Palette
          aria-hidden="true"
          className="h-5 w-5 text-white drop-shadow-sm"
        />
      </button>
    </div>
  );
}
