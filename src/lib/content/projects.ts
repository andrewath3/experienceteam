import { readContentDir } from "./fs";
import { budgetBands, projectTypes, type BudgetBand, type Project, type ProjectType } from "./types";

export { projectTypes, budgetBands } from "./types";
export type { ProjectType, BudgetBand } from "./types";

function validateType(value: unknown, slug: string): ProjectType | null {
  if (value === null || value === undefined) return null;
  if ((projectTypes as readonly string[]).includes(value as string)) return value as ProjectType;
  throw new Error(
    `content/projects/${slug}.md: "type" is "${value}", which isn't one of ${projectTypes.join(", ")}.`
  );
}

function validateBudget(value: unknown, slug: string): BudgetBand | null {
  if (value === null || value === undefined) return null;
  if ((budgetBands as readonly string[]).includes(value as string)) return value as BudgetBand;
  throw new Error(
    `content/projects/${slug}.md: "budget" is "${value}", which isn't one of ${budgetBands.join(", ")}.`
  );
}

export function getAllProjects(): Project[] {
  // No caching — content/*.md files aren't part of the JS module graph, so a
  // module-level cache would never invalidate when a file is edited.
  return readContentDir("projects")
    .sort((a, b) => (a.data.order as number) - (b.data.order as number))
    .map(({ slug, data, body }): Project => ({
      slug,
      client: data.client as string,
      title: data.title as string,
      descriptor: (data.descriptor as string | null) ?? null,
      type: validateType(data.type, slug),
      budget: validateBudget(data.budget, slug),
      budgetRange: (data.budgetRange as string | null) ?? null,
      description: body.length > 0 ? body : null,
      credits: (data.credits as Project["credits"]) ?? null,
      image: data.image as string,
      awards: (data.awards as string[]) ?? [],
    }));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}
