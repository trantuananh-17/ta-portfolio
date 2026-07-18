import Link from "next/link";

import { navigationItems } from "@/data/navigation";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/#home" className="text-xl font-bold">
          <span className="text-primary">TADEV</span> <span>Portfolio</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
