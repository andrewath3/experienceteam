export default function SubNav({ links }: { links: { label: string; hash: string }[] }) {
  return (
    <nav className="border-b border-border-subtle bg-background">
      <div className="mx-auto max-w-5xl px-6 md:px-10 py-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-secondary">
        {links.map((link) => (
          <a key={link.hash} href={`#${link.hash}`} className="hover:text-foreground transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
