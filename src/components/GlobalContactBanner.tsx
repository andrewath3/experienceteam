import Link from "next/link";
import { getGlobalContent } from "@/lib/content/global";

export default function GlobalContactBanner() {
  const { contactBanner, teamsUrl } = getGlobalContent();
  return (
    <div className="border-t border-border-subtle bg-surface-header">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-foreground">{contactBanner.line}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={teamsUrl}
            className="rounded-full border border-accent/40 px-5 py-2 text-sm font-bold text-foreground hover:border-accent transition-colors"
          >
            {contactBanner.teamsLabel}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-[#0d1620] hover:bg-accent-muted transition-colors"
          >
            {contactBanner.noteLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
