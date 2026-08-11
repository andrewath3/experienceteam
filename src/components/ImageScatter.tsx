import ScatterNode from "@/components/ScatterNode";
import { getProjectBySlug } from "@/lib/content/projects";

type Node = { x: number; y: number; size: number };

/** Percentage-based positions so nodes and connector lines scale together. */
const PRESET_4: Node[] = [
  { x: 16, y: 72, size: 190 },
  { x: 46, y: 24, size: 150 },
  { x: 72, y: 68, size: 210 },
  { x: 90, y: 20, size: 140 },
];

function layoutFor(count: number): Node[] {
  if (count === 4) return PRESET_4;
  // Generic fallback for other counts: gentle wave, evenly spaced.
  return Array.from({ length: count }, (_, i) => ({
    x: (100 / (count + 1)) * (i + 1),
    y: 45 + (i % 2 === 0 ? 25 : -25),
    size: 160,
  }));
}

export default function ImageScatter({ slugs }: { slugs: string[] }) {
  const items = slugs.map((slug) => getProjectBySlug(slug)).filter((p): p is NonNullable<typeof p> => !!p);
  const nodes = layoutFor(items.length);

  return (
    <div className="relative h-[420px] sm:h-[560px] md:h-[640px] w-full py-6">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {nodes.slice(1).map((node, i) => {
          const prev = nodes[i];
          return (
            <line
              key={i}
              x1={prev.x}
              y1={prev.y}
              x2={node.x}
              y2={node.y}
              stroke="var(--accent)"
              strokeWidth="0.3"
            />
          );
        })}
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
