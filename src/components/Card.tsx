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
      className={`rounded-xl border bg-surface/40 backdrop-blur-sm px-6 py-6 ${
        highlight ? "border-accent/40" : "border-border-subtle"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3
            className={`text-[1.35rem] md:text-2xl font-semibold tracking-tight ${
              highlight ? "text-accent" : "text-accent-muted"
            }`}
          >
            {title}
          </h3>
          {label && <p className="mt-1 text-sm italic text-text-secondary">{label}</p>}
        </div>
        {number && (
          <span className="text-2xl md:text-3xl font-extrabold text-accent/60 leading-none shrink-0">
            {number}
          </span>
        )}
      </div>
      {(body || children) && (
        <div className="mt-4">
          {body && <p className="text-text-secondary leading-relaxed">{body}</p>}
          {children}
        </div>
      )}
    </div>
  );
}
