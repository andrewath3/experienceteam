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

export type NavLink = { label: string; href: string };

export type GlobalContent = {
  wordmark: string;
  primaryNav: NavLink[];
  contactBanner: { line: string; teamsLabel: string; noteLabel: string };
  teamsUrl: string;
};

export type SubNavLink = { label: string; hash: string };

export type AboutMeta = {
  subNav: SubNavLink[];
  metaDescription: string;
};

export type WhoWeAreContent = {
  eyebrow: string;
  headlineLines: string[];
  accentLine: string;
  bodyParagraphs: string[];
  scatterSlugs: string[];
};

export type Capability = {
  number: string;
  verb: string;
  category: string;
  body: string;
};

export type WhatWeDoContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  capabilities: Capability[];
  workPointer: string;
  scatterSlugs: string[];
};

export type Stage = { label: string; question: string };

export type WhenToBringUsInContent = {
  eyebrow: string;
  headline: string;
  stages: Stage[];
  closing: string;
  budgetLine: string;
};

export type WhoWeveWorkedWithContent = { eyebrow: string };

export type BudgetFilterLabel = "Any" | BudgetBand;

export type WorkPageContent = {
  headline: string;
  budgetFilterLabels: readonly BudgetFilterLabel[];
  zeroResults: { line: string; clearLabel: string };
};

export type ContactPageContent = {
  eyebrow: string;
  headline: string;
  body: string;
  teamsPrompt: string;
  teamsLabel: string;
  submitLabel: string;
  confirmation: string;
  error: string;
};

export type ContactFormField = { label: string; placeholder?: string; optional?: boolean };

export type ContactFormFields = {
  name: ContactFormField;
  email: ContactFormField;
  agency: ContactFormField;
  brand: ContactFormField;
  details: ContactFormField;
  timing: ContactFormField;
};

export type Logo = {
  name: string;
  /** Linked project slug, if this client has a featured project. Null = logo-only. */
  projectSlug: string | null;
};
