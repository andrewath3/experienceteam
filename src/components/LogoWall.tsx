import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { logos } from "@/data/logos";

/**
 * No logo image assets exist yet (only project photography) — rendered as
 * muted wordmark tiles. Swap in `/public/images/logos/<slug>.svg` and an
 * <Image> here once real logos are supplied.
 */
export default function LogoWall() {
  return (
    <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border-subtle">
      {logos.map((logo) => {
        const tile = (
          <div className="flex h-24 items-center justify-center bg-background px-4 text-center transition-colors hover:bg-surface/60">
            <span className="text-sm font-semibold tracking-wide text-text-secondary/70 grayscale">
              {logo.name}
            </span>
          </div>
        );
        return (
          <RevealItem key={logo.name}>
            {logo.projectSlug ? (
              <Link
                href={`/work/${logo.projectSlug}`}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {tile}
              </Link>
            ) : (
              tile
            )}
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
