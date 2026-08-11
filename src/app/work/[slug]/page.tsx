import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { withBasePath } from "@/lib/base-path";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.client} — ${project.title} — Experience Team` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const showBudget = true; // toggle per open decision — default: show budget band on detail page

  return (
    <div className="px-6 md:px-10 max-w-4xl mx-auto pt-12 pb-24">
      <Link href="/work" className="text-sm text-text-secondary hover:text-foreground transition-colors">
        &larr; Back to Work
      </Link>

      <div className="mt-6">
        <p className="text-sm font-bold text-accent">{project.client}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.type ? (
            <span className="rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-xs font-semibold text-foreground">
              {project.type}
            </span>
          ) : (
            <span className="rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs italic text-text-secondary">
              Type not yet assigned
            </span>
          )}
          {showBudget &&
            (project.budget ? (
              <span className="rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-xs font-semibold text-foreground">
                {project.budget} budget{project.budgetRange ? ` · ${project.budgetRange}` : ""}
              </span>
            ) : (
              <span className="rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs italic text-text-secondary">
                Budget not yet assigned
              </span>
            ))}
        </div>
      </div>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-xl bg-surface">
        <Image
          src={withBasePath(project.image)}
          alt={`${project.client} — ${project.title}`}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10 max-w-2xl">
        {project.description ? (
          <p className="text-lg text-text-secondary leading-relaxed">{project.description}</p>
        ) : (
          <p className="text-lg italic text-text-secondary/70 leading-relaxed">
            Project description coming soon.
          </p>
        )}
      </div>

      {(project.credits?.partner || project.credits?.role || project.credits?.year) && (
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-secondary">
          {project.credits?.partner && (
            <p>
              <span className="text-accent-muted font-semibold">Production partner</span> — {project.credits.partner}
            </p>
          )}
          {project.credits?.role && (
            <p>
              <span className="text-accent-muted font-semibold">What we did</span> — {project.credits.role}
            </p>
          )}
          {project.credits?.year && (
            <p>
              <span className="text-accent-muted font-semibold">Year</span> — {project.credits.year}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
