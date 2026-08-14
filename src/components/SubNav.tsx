"use client";

import { useEffect, useState } from "react";

export default function SubNav({ links }: { links: { label: string; hash: string }[] }) {
  const [activeHash, setActiveHash] = useState(links[0]?.hash);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.hash))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveHash(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="sticky top-16 z-40 border-b border-border-subtle bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary">
        {links.map((link) => {
          const isActive = link.hash === activeHash;
          return (
            <a
              key={link.hash}
              href={`#${link.hash}`}
              aria-current={isActive ? "true" : undefined}
              className={`transition-colors hover:text-accent ${
                isActive ? "text-accent font-semibold underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
