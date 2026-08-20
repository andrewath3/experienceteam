import Link from "next/link";
import { logos } from "@/data/logos";
import { withBasePath } from "@/lib/base-path";

/**
 * Logo artwork in `public/logos` is white-on-transparent (built for dark
 * mode), so it's inverted to black in light mode via `[data-theme="light"]`.
 * Clients without an asset yet fall back to a styled wordmark tile.
 */
export default function LogoWall() {
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="logo-marquee-track flex w-max items-center">
        {track.map((logo, i) => {
          const tile = (
            <div className="flex h-32 w-48 shrink-0 items-center justify-center px-4 text-center">
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
          return logo.projectSlug ? (
            <Link
              key={`${logo.name}-${i}`}
              href={`/work/${logo.projectSlug}`}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              tabIndex={i < logos.length ? 0 : -1}
            >
              {tile}
            </Link>
          ) : (
            <div key={`${logo.name}-${i}`}>{tile}</div>
          );
        })}
      </div>
    </div>
  );
}
