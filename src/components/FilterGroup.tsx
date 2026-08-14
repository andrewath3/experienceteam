"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders pill buttons in a row, but collapses to a <select> dropdown once
 * the pills would wrap to a second line — measured live via ResizeObserver,
 * not a fixed breakpoint, so it adapts to any viewport or option-count change.
 */
export default function FilterGroup<T extends string>({
  label,
  options,
  active,
  onChange,
  formatOption,
  className,
}: {
  label: string;
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  formatOption?: (option: T) => string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fits, setFits] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const check = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (children.length === 0) return;
      const firstTop = children[0].offsetTop;
      setFits(!children.some((c) => c.offsetTop !== firstTop));
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [options]);

  const display = (opt: T) => (formatOption ? formatOption(opt) : opt);

  return (
    <div className={`relative ${className ?? ""}`}>
      <p className="mb-2 text-xs font-bold tracking-[0.15em] uppercase text-foreground">{label}</p>

      {/* Always rendered (for measurement); hidden out of flow once it wraps. */}
      <div
        ref={containerRef}
        className={
          fits
            ? "flex flex-wrap gap-2"
            : "invisible absolute left-0 right-0 flex flex-wrap gap-2 pointer-events-none"
        }
        aria-hidden={!fits}
      >
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            tabIndex={fits ? 0 : -1}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              active === opt
                ? "border-accent bg-accent text-[#0d1620]"
                : "border-border-subtle bg-black text-text-secondary hover:border-accent hover:text-accent"
            }`}
          >
            {display(opt)}
          </button>
        ))}
      </div>

      {!fits && (
        <div className="relative inline-block">
          <select
            value={active}
            onChange={(e) => onChange(e.target.value as T)}
            className="appearance-none rounded-full border border-border-subtle bg-surface pl-4 pr-9 py-2 text-sm font-semibold text-foreground focus:border-accent focus:outline-none cursor-pointer"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {display(opt)}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
