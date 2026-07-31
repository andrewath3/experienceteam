export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-extrabold tracking-tight">Experience Team</p>
          <p className="mt-1 text-sm text-text-secondary">Producers, designers, strategists, and creative technologists — OP and Studio.</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
          <a href="#work" className="hover:text-foreground transition-colors">
            See work
          </a>
          <a href="#work-with-us" className="hover:text-foreground transition-colors">
            Let&rsquo;s chat
          </a>
        </div>
      </div>
    </footer>
  );
}
