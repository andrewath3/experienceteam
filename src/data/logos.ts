export type Logo = {
  name: string;
  /** Linked project slug, if this client has a featured project. Null = logo-only. */
  projectSlug: string | null;
};

/**
 * Client logo wall. No logo image assets exist yet (only project photography) —
 * rendered as styled wordmark tiles until real SVGs are supplied, see
 * `src/components/LogoWall.tsx`.
 */
export const logos: Logo[] = [
  { name: "State Street", projectSlug: "state-street-fearless-girl" },
  { name: "Verizon", projectSlug: "verizon-unbreakable-controller" },
  { name: "Mastercard", projectSlug: "mastercard-tap-go-play" },
  { name: "Lockheed Martin", projectSlug: "lockheed-martin-robot-recruiter" },
  { name: "Prudential", projectSlug: "prudential-flash-forward" },
  { name: "SAS", projectSlug: "sas-batting-lab" },
  { name: "Lysol", projectSlug: "lysol-mini-labs" },
  { name: "Chick-fil-A", projectSlug: "chick-fil-a-break-room" },
  { name: "Mucinex", projectSlug: "mucinex-monsters-in-waiting" },
  { name: "MGM", projectSlug: "mgm-shoey-bar" },
  { name: "Instax", projectSlug: "instax-website" },
  { name: "NY Lottery", projectSlug: "ny-lottery-must-love-dogs" },
  { name: "Annovera", projectSlug: "annovera-website-companion-app" },
  { name: "US Bank", projectSlug: null },
  { name: "Fujifilm", projectSlug: null },
];
