"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { wordmark, primaryNav } from "@/data/global";
import ThemeToggle from "@/components/ThemeToggle";
import BgToggle from "@/components/BgToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-foreground">
          {wordmark}
        </Link>

        <nav className="hidden sm:flex h-full items-stretch gap-8 text-xs font-semibold tracking-[0.1em] uppercase text-text-secondary">
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center px-3 transition-colors hover:text-accent ${
                  isActive ? "bg-foreground/5 text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <BgToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <BgToggle />
          <ThemeToggle />
          <button
            className="text-foreground"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-border-subtle bg-background px-6 py-4 flex flex-col gap-4 text-xs font-semibold tracking-[0.1em] uppercase text-text-secondary">
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`px-3 py-1.5 transition-colors hover:text-accent ${
                  isActive ? "bg-foreground/5 text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
