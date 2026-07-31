import { ReactNode } from "react";

export default function Card({
  title,
  label,
  body,
  number,
  highlight = false,
  children,
}: {
  title: string;
  label?: string;
  body?: string;
  number?: string;
  highlight?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl bg-surface border overflow-hidden ${
        highlight ? "border-accent/40" : "border-border-subtle"
      }`}
    >
      <div
        className={`px-6 pt-6 pb-4 bg-surface-header flex items-start justify-between gap-4 ${
          highlight ? "border-b border-accent/30" : "border-b border-border-subtle"
        }`}
      >
        <div>
          <h3
            className={`text-lg md:text-xl font-extrabold tracking-tight ${
              highlight ? "text-accent" : "text-accent-muted"
            }`}
          >
            {title}
          </h3>
          {label && (
            <p className="mt-1 text-sm italic text-text-secondary">{label}</p>
          )}
        </div>
        {number && (
          <span className="text-3xl md:text-4xl font-extrabold text-accent/70 leading-none shrink-0">
            {number}
          </span>
        )}
      </div>
      <div className="px-6 py-6">
        {body && <p className="text-text-secondary leading-relaxed">{body}</p>}
        {children}
      </div>
    </div>
  );
}
