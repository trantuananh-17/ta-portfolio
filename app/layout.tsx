import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemePresetSwitcher } from "@/components/ui/theme-preset-switcher";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trần Tuấn Anh - Portfolio",
  description: "Portfolio của Trần Tuấn Anh",
};

const themePresets = [
  "global",
  "light-green",
  "amethyst-haze",
  "bold-tech",
  "caffeine",
  "supabase",
  "vercel",
] as const;

type ThemePreset = (typeof themePresets)[number];

function isThemePreset(value: string | undefined): value is ThemePreset {
  return themePresets.some((theme) => theme === value);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("theme-preset")?.value;

  const theme: ThemePreset = isThemePreset(savedTheme) ? savedTheme : "global";

  return (
    <html
      lang="vi"
      data-theme-preset={theme}
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}

          <Footer />

          <ThemePresetSwitcher initialTheme={theme} />
          <ModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
