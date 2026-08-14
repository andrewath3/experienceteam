export type Logo = {
  name: string;
  /** Linked project slug, if this client has a featured project. Null = logo-only. */
  projectSlug: string | null;
  /**
   * Path to the logo mark under `public/logos`. Artwork is white-on-transparent
   * (built for dark mode) — `LogoWall` inverts it in light mode. Undefined = no
   * asset yet, falls back to a styled wordmark tile.
   */
  src?: string;
  /** Scale factor applied to the mark where the asset renders larger than peers at the same box size (default 1). */
  scale?: number;
};

/**
 * Client logo wall. Some clients still lack logo image assets — those render
 * as styled wordmark tiles, see `src/components/LogoWall.tsx`.
 */
export const logos: Logo[] = [
  { name: "State Street", projectSlug: "state-street-fearless-girl", src: "/logos/state-street.png", scale: 0.75 },
  { name: "Verizon", projectSlug: "verizon-unbreakable-controller", src: "/logos/verizon.png", scale: 0.75 },
  { name: "Mastercard", projectSlug: "mastercard-tap-go-play", src: "/logos/mastercard.png" },
  { name: "Lockheed Martin", projectSlug: "lockheed-martin-robot-recruiter", src: "/logos/lockheed-martin.png" },
  { name: "Prudential", projectSlug: "prudential-flash-forward", src: "/logos/prudential.png" },
  { name: "SAS", projectSlug: "sas-batting-lab", src: "/logos/sas.png" },
  { name: "Lysol", projectSlug: "lysol-mini-labs", src: "/logos/lysol.png" },
  { name: "Chick-fil-A", projectSlug: "chick-fil-a-break-room", src: "/logos/chick-fil-a.png" },
  { name: "Mucinex", projectSlug: "mucinex-monsters-in-waiting", src: "/logos/mucinex.png", scale: 0.75 },
  { name: "MGM", projectSlug: "mgm-shoey-bar", src: "/logos/mgm.png" },
  { name: "Instax", projectSlug: "instax-website", src: "/logos/instax.png" },
  { name: "NY Lottery", projectSlug: "ny-lottery-must-love-dogs", src: "/logos/ny-lottery.png" },
  { name: "Annovera", projectSlug: "annovera-website-companion-app", src: "/logos/annovera.png" },
  { name: "US Bank", projectSlug: null, src: "/logos/us-bank.png" },
  { name: "Fujifilm", projectSlug: null, src: "/logos/fujifilm.png" },
];

/** Looks up a client's logo mark by name (e.g. a project's `client` field). */
export function getLogoByClientName(name: string): Logo | undefined {
  return logos.find((logo) => logo.name === name);
}
