"use client";

import { motion, useTransform } from "framer-motion";
import ScatterNode from "@/components/ScatterNode";
import { getProjectBySlug } from "@/data/projects";
import { useFloatOffset } from "@/lib/use-float";

type Node = { x: number; y: number; size: number };

/** Percentage-based positions so nodes and connector lines scale together. */
const PRESET_4: Node[] = [
  { x: 16, y: 72, size: 238 },
  { x: 46, y: 24, size: 188 },
  { x: 72, y: 68, size: 263 },
  { x: 90, y: 20, size: 175 },
];

/** Smaller variant for narrower containers (e.g. side-by-side with a text column). */
const PRESET_4_COMPACT: Node[] = [
  { x: 14, y: 72, size: 145 },
  { x: 44, y: 22, size: 115 },
  { x: 70, y: 68, size: 160 },
  { x: 95, y: 18, size: 105 },
];

function layoutFor(count: number, compact: boolean): Node[] {
  if (count === 4) return compact ? PRESET_4_COMPACT : PRESET_4;
  // Generic fallback for other counts: gentle wave, evenly spaced.
  const size = compact ? 130 : 200;
  return Array.from({ length: count }, (_, i) => ({
    x: (100 / (count + 1)) * (i + 1),
    y: 45 + (i % 2 === 0 ? 25 : -25),
    size,
  }));
}

/**
 * A connector line whose endpoints drift with the same per-index float
 * used on the nodes, so lines and bubbles read as part of one floating
 * cluster rather than a static connector between moving dots.
 */
function FloatingLine({ prev, prevIndex, node, index }: { prev: Node; prevIndex: number; node: Node; index: number }) {
  const a = useFloatOffset(prevIndex, 1.1, 1.4);
  const b = useFloatOffset(index, 1.1, 1.4);

  return (
    <motion.line
      x1={useTransform(a.dx, (v) => prev.x + v)}
      y1={useTransform(a.dy, (v) => prev.y + v)}
      x2={useTransform(b.dx, (v) => node.x + v)}
      y2={useTransform(b.dy, (v) => node.y + v)}
      stroke="var(--accent)"
      strokeWidth="0.3"
    />
  );
}

export default function ImageScatter({ slugs, compact = false }: { slugs: string[]; compact?: boolean }) {
  const items = slugs.map((slug) => getProjectBySlug(slug)).filter((p): p is NonNullable<typeof p> => !!p);
  const nodes = layoutFor(items.length, compact);

  return (
    <div
      className={
        compact
          ? "relative h-[380px] w-full py-6"
          : "relative h-[420px] sm:h-[560px] md:h-[640px] w-full py-6"
      }
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {nodes.slice(1).map((node, i) => (
          <FloatingLine key={i} prev={nodes[i]} prevIndex={i} node={node} index={i + 1} />
        ))}
      </svg>

      {items.map((project, i) => {
        const node = nodes[i];
        return (
          <ScatterNode
            key={project.slug}
            project={project}
            x={node.x}
            y={node.y}
            size={node.size}
            index={i}
          />
        );
      })}
    </div>
  );
}
