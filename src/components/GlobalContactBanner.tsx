import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { contactBanner, teamsUrl } from "@/data/global";

export default function GlobalContactBanner() {
  return (
    <div className="border-t border-border-subtle bg-black">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <Eyebrow>{contactBanner.eyebrow}</Eyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          {contactBanner.heading}
        </h2>
        <p className="mt-4 text-lg text-text-secondary">{contactBanner.line}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-[#0d1620] hover:bg-accent-muted transition-colors"
          >
            {contactBanner.noteLabel}
          </Link>
          <a
            href={teamsUrl}
            className="rounded-full border border-accent/40 px-6 py-3 text-sm font-bold text-accent hover:border-accent transition-colors"
          >
            {contactBanner.teamsLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
