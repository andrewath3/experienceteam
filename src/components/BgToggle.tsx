"use client";

import { useEffect, useState } from "react";

type Bg = "orbs" | "lines";

export default function BgToggle({ className = "" }: { className?: string }) {
  const [bg, setBg] = useState<Bg | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-bg");
    setBg(current === "lines" ? "lines" : "orbs");
  }, []);

  const toggle = () => {
    const next: Bg = bg === "lines" ? "orbs" : "lines";
    document.documentElement.setAttribute("data-bg", next);
    localStorage.setItem("bg", next);
    setBg(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${bg === "lines" ? "floating light" : "graphic lines"} background`}
      title={`Switch to ${bg === "lines" ? "floating light" : "graphic lines"} background`}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground hover:text-accent transition-colors ${className}`}
    >
      {bg === null ? null : bg === "lines" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 8c3-2 5 2 8 0s5 2 8 0M4 14c3-2 5 2 8 0s5 2 8 0M4 20c3-2 5 2 8 0s5 2 8 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
