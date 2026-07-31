"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Who We Are", hash: "who-we-are" },
  { label: "What We Do", hash: "what-we-do" },
  { label: "Work", hash: "work" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-sm md:text-base">
          Experience Team
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={`#${link.hash}`}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#work-with-us"
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#0d1620] hover:bg-accent-muted transition-colors"
          >
            Let&rsquo;s Chat
          </a>
        </nav>

        <button
          className="lg:hidden text-foreground"
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
        <div className="lg:hidden border-t border-border-subtle bg-background px-6 py-4 flex flex-col gap-4 text-sm text-text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={`#${link.hash}`}
              onClick={() => setOpen(false)}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#work-with-us"
            onClick={() => setOpen(false)}
            className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-[#0d1620] text-center hover:bg-accent-muted transition-colors"
          >
            Let&rsquo;s Chat
          </a>
        </div>
      )}
    </header>
  );
}
