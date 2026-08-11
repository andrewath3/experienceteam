"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterGroup from "@/components/FilterGroup";
import { withBasePath } from "@/lib/base-path";
import type { Project, ProjectType, WorkPageContent } from "@/lib/content/types";

type TypeFilter = "All" | ProjectType;
type BudgetFilter = WorkPageContent["budgetFilterLabels"][number];

const GRID_THRESHOLD = 5;
/** Approximate base panel width (px) used to estimate scroll position — matches the sm+ base width below. */
const PANEL_WIDTH = 240;

export default function WorkGallery({
  projects,
  projectTypes,
  workPage,
}: {
  projects: Project[];
  projectTypes: readonly ProjectType[];
  workPage: WorkPageContent;
}) {
  const [activeType, setActiveType] = useState<TypeFilter>("All");
  const [activeBudget, setActiveBudget] = useState<BudgetFilter>("Any");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [range, setRange] = useState({ start: 1, end: 1 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const filtered = projects.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType;
    const budgetMatch = activeBudget === "Any" || p.budget === activeBudget;
    return typeMatch && budgetMatch;
  });

  const useGrid = filtered.length > 0 && filtered.length <= GRID_THRESHOLD;
  const total = filtered.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || useGrid) return;

    const update = () => {
      const start = Math.round(el.scrollLeft / PANEL_WIDTH) + 1;
      const visibleCount = Math.max(1, Math.round(el.clientWidth / PANEL_WIDTH));
      const end = Math.min(total, start + visibleCount - 1);
      setRange({ start: Math.min(start, total), end });
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [total, useGrid, activeType, activeBudget]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const clearFilters = () => {
    setActiveType("All");
    setActiveBudget("Any");
  };

  return (
    <div>
      {/* Filters */}
      <div className="px-6 md:px-10 max-w-6xl mx-auto flex flex-wrap items-start gap-x-10 gap-y-4">
        <FilterGroup
          label="Project Type"
          options={["All", ...projectTypes] as TypeFilter[]}
          active={activeType}
          onChange={setActiveType}
          formatOption={(type) => (type === "All" ? `All (${projects.length})` : type)}
          className="flex-[2] min-w-[260px]"
        />
        <FilterGroup
          label="Budget"
          options={workPage.budgetFilterLabels}
          active={activeBudget}
          onChange={setActiveBudget}
          className="flex-1 min-w-[200px]"
        />
      </div>

      {/* Zero results */}
      {total === 0 && (
        <div className="px-6 md:px-10 max-w-6xl mx-auto mt-12 py-16 text-center">
          <p className="text-text-secondary">{workPage.zeroResults.line}</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-accent font-semibold hover:text-accent-muted transition-colors cursor-pointer"
          >
            {workPage.zeroResults.clearLabel}
          </button>
        </div>
      )}

      {/* Grid fallback for small result sets */}
      {useGrid && (
        <div className="px-6 md:px-10 max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border-subtle bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={withBasePath(project.image)}
                  alt={`${project.client} — ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-bold text-foreground">{project.client}</p>
                <p className="text-accent">{project.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Horizontal scroll gallery */}
      {!useGrid && total > 0 && (
        <div className="mt-10">
          <div className="px-6 md:px-10 max-w-6xl mx-auto flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-text-secondary tabular-nums">
              {String(range.start).padStart(2, "0")} — {String(range.end).padStart(2, "0")} OF {String(total).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByPage(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-foreground transition-opacity disabled:opacity-30 hover:border-accent/40 cursor-pointer disabled:cursor-default"
              >
                &larr;
              </button>
              <button
                onClick={() => scrollByPage(1)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-foreground transition-opacity disabled:opacity-30 hover:border-accent/40 cursor-pointer disabled:cursor-default"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide gap-[2px] bg-accent/30">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative flex-none w-[220px] sm:w-[240px] hover:w-[420px] sm:hover:w-[460px] transition-[width] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:z-10"
              >
                <div className="relative h-[420px] sm:h-[520px] md:h-[620px] overflow-hidden bg-surface">
                  <Image
                    src={withBasePath(project.image)}
                    alt={`${project.client} — ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-surface-header px-4 py-4">
                  <p className="text-sm md:text-base font-bold text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.client}
                  </p>
                  <p className="text-xs md:text-sm text-accent whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </p>
                  {project.budgetRange && (
                    <p className="mt-1 text-xs text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                      {project.budgetRange}
                    </p>
                  )}
                  <p className="mt-1 min-h-[1rem] text-xs text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.awards.length > 0 ? project.awards.join(" · ") : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
