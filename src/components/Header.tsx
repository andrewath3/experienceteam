"use client";

import Link from "next/link";
import { useState } from "react";
import { wordmark, primaryNav } from "@/data/global";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="text-xs font-bold tracking-[0.15em] uppercase text-accent">
          {wordmark}
        </Link>

        <nav className="hidden sm:flex items-center gap-8 text-xs font-semibold tracking-[0.1em] uppercase text-text-secondary">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="sm:hidden text-foreground"
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

      {open && (
        <div className="sm:hidden border-t border-border-subtle bg-background px-6 py-4 flex flex-col gap-4 text-xs font-semibold tracking-[0.1em] uppercase text-text-secondary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
