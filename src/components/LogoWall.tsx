import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { logos } from "@/data/logos";
import { withBasePath } from "@/lib/base-path";

/**
 * Logo artwork in `public/logos` is white-on-transparent (built for dark
 * mode), so it's inverted to black in light mode via `[data-theme="light"]`.
 * Clients without an asset yet fall back to a styled wordmark tile.
 */
export default function LogoWall() {
  return (
    <div>
      <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-x-12 sm:gap-y-16">
        {logos.map((logo) => {
          const tile = (
            <div className="flex h-32 items-center justify-center px-4 text-center">
              {logo.src ? (
                <div className="relative h-[4.8rem] w-full max-w-[11.2rem]">
                  <img
                    src={withBasePath(logo.src)}
                    alt={logo.name}
                    className="logo-mark h-full w-full object-contain opacity-60"
                  />
                </div>
              ) : (
                <span className="text-2xl font-semibold tracking-wide text-text-secondary/60 grayscale">
                  {logo.name}
                </span>
              )}
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
      <div className="mt-12 flex justify-center">
        <Link
          href="/work"
          className="rounded-full border border-accent/40 px-6 py-3 text-sm font-bold text-accent hover:border-accent transition-colors"
        >
          See our work
        </Link>
      </div>
    </div>
  );
}
