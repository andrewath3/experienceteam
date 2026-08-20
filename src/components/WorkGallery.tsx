"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FilterGroup from "@/components/FilterGroup";
import { projects, projectTypes, type ProjectType, type BudgetBand } from "@/data/projects";
import { workPage } from "@/data/work-page";
import { getLogoByClientName } from "@/data/logos";
import { withBasePath } from "@/lib/base-path";

type TypeFilter = "All" | ProjectType;
type BudgetFilter = "Any" | BudgetBand;

/** Approximate base panel width (px) used to estimate scroll position — matches the sm+ base width below. */
const PANEL_WIDTH = 240;

const BUDGET_LABELS: Record<BudgetBand, string> = {
  Low: "Low budget",
  Medium: "Med budget",
  High: "High budget",
};

export default function WorkGallery() {
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

  const total = filtered.length;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

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
  }, [total, activeType, activeBudget]);

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
    <div className="flex h-full flex-col">
      {/* Filters */}
      <div className="px-6 md:px-10 max-w-6xl mx-auto w-full flex flex-wrap items-start gap-x-9 gap-y-4 shrink-0">
        <FilterGroup
          label="Project Type"
          options={["All", ...projectTypes] as TypeFilter[]}
          active={activeType}
          onChange={setActiveType}
          formatOption={(type) => (type === "All" ? `All (${projects.length})` : type)}
          className="min-w-[260px]"
        />
        <FilterGroup
          label="Budget"
          options={workPage.budgetFilterLabels}
          active={activeBudget}
          onChange={setActiveBudget}
          className="min-w-[200px]"
        />
      </div>

      {/* Zero results */}
      {total === 0 && (
        <div className="px-6 md:px-10 max-w-6xl mx-auto mt-12 py-16 text-center shrink-0">
          <p className="text-text-secondary">{workPage.zeroResults.line}</p>
          <button
            onClick={clearFilters}
            className="mt-3 text-accent font-semibold hover:text-accent-muted transition-colors cursor-pointer"
          >
            {workPage.zeroResults.clearLabel}
          </button>
        </div>
      )}

      {/* Horizontal scroll gallery */}
      {total > 0 && (
        <div className="mt-10 flex min-h-0 flex-1 flex-col">
          <div className="px-6 md:px-10 max-w-6xl mx-auto w-full flex items-center justify-between mb-3 shrink-0">
            <p className="text-sm font-semibold text-text-secondary tabular-nums">
              {String(range.start).padStart(2, "0")} — {String(range.end).padStart(2, "0")} OF {String(total).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByPage(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-surface text-text-secondary transition-colors disabled:opacity-30 hover:border-accent hover:text-accent cursor-pointer disabled:cursor-default"
              >
                &larr;
              </button>
              <button
                onClick={() => scrollByPage(1)}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle bg-surface text-text-secondary transition-colors disabled:opacity-30 hover:border-accent hover:text-accent cursor-pointer disabled:cursor-default"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="work-gallery-row flex min-h-0 flex-1 overflow-x-auto scrollbar-hide bg-background">
            {filtered.map((project) => {
              const logo = getLogoByClientName(project.client);
              return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative flex-none w-[220px] sm:w-[240px] hover:w-[420px] sm:hover:w-[460px] transition-[width] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:z-10"
              >
                <div className="work-thumb absolute inset-0 overflow-hidden bg-surface transition-[filter] duration-150 ease-out">
                  <Image
                    src={withBasePath(project.image)}
                    alt={`${project.client} — ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 z-10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-background/75 backdrop-blur-sm px-4 pt-4 pb-2">
                  {logo?.src && (
                    <div
                      className="relative h-10 w-36 origin-left"
                      style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                    >
                      <Image
                        src={withBasePath(logo.src)}
                        alt={project.client}
                        fill
                        sizes="180px"
                        className="logo-mark object-contain object-left"
                      />
                    </div>
                  )}
                  <p className="mt-4 text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.title}
                  </p>
                  <p className="text-sm md:text-base text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.client}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.type && (
                      <span className="rounded-full border border-accent/30 bg-surface px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap text-foreground">
                        {project.type}
                      </span>
                    )}
                    {project.budget && (
                      <span className="rounded-full border border-accent/30 bg-surface px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap text-foreground">
                        {BUDGET_LABELS[project.budget]}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 min-h-[1rem] text-xs text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                    {project.awards.length > 0 ? project.awards.join(" · ") : ""}
                  </p>
                </div>
                <div className="absolute inset-y-0 left-0 z-20 w-1 bg-accent" />
              </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
