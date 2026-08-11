export const projectTypes = [
  "Digital Campaign Extensions",
  "Activations & Installations",
  "Interactive Experiences",
  "Platforms & Products",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const budgetBands = ["Low", "Medium", "High"] as const;

export type BudgetBand = (typeof budgetBands)[number];

export type Project = {
  slug: string;
  client: string;
  title: string;
  /** One-line summary shown on the Work panel. Not yet written for most projects. */
  descriptor: string | null;
  type: ProjectType | null;
  budget: BudgetBand | null;
  /** Raw budget range, if known (e.g. "$200–300k") — shown alongside the band. */
  budgetRange: string | null;
  /** Longer paragraph shown on the project detail page. Not yet written. */
  description: string | null;
  credits: {
    partner?: string;
    role?: string;
    year?: string;
  } | null;
  image: string;
  awards: string[];
};
