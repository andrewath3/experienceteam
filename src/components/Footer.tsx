import Link from "next/link";
import { getGlobalContent } from "@/lib/content/global";

export default function Footer() {
  const { wordmark, primaryNav } = getGlobalContent();
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="font-extrabold tracking-tight">{wordmark}</p>
        <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
