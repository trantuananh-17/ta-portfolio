import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemePresetSwitcher } from "@/components/ui/theme-preset-switcher";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
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

const siteUrl = process.env.SITE_URL ?? "https://portfolio.ragenta.cloud";

const siteTitle = "Tran Tuan Anh — Software Engineer";
const siteDescription =
  "Portfolio of Tran Tuan Anh, a software engineer building full-stack products with TypeScript, Node.js, React and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Tran Tuan Anh",
  },
  description: siteDescription,
  keywords: [
    "Tran Tuan Anh",
    "Software Engineer",
    "Fullstack Developer",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Tran Tuan Anh", url: siteUrl }],
  creator: "Tran Tuan Anh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Tran Tuan Anh — Portfolio",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
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
      lang="en"
      data-theme-preset={theme}
      suppressHydrationWarning
      className={cn(
        // scroll-pt-20 để anchor không bị header fixed (h-16) che mất tiêu đề section
        "h-full scroll-pt-20 scroll-smooth antialiased",
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
          <MotionProvider>
            <Header />

            {children}

            <Footer />

            <ThemePresetSwitcher initialTheme={theme} />
            <ModeToggle />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
