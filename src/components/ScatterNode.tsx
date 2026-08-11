"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import { withBasePath } from "@/lib/base-path";

export default function ScatterNode({
  project,
  x,
  y,
  size,
  index,
}: {
  project: Project;
  x: number;
  y: number;
  size: number;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Vary drift per node so the cluster doesn't move in lockstep.
  const amplitude = 8 + (index % 3) * 5;
  const direction = index % 2 === 0 ? 1 : -1;
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-amplitude * direction, amplitude * direction]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        width: size,
        height: size,
      }}
    >
      {/* Ring stays put — the photo floats above it. */}
      <div className="absolute inset-0 rounded-full border border-accent/40" />

      <motion.div
        style={{ y: parallaxY }}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="group relative h-full w-full"
      >
        <Link
          href={`/work/${project.slug}`}
          className="block h-full w-full rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <div className="relative h-full w-full overflow-hidden rounded-full border border-border-subtle bg-background">
            <Image
              src={withBasePath(project.image)}
              alt={`${project.client} — ${project.title}`}
              fill
              sizes="260px"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/60 group-hover:opacity-100">
              <span className="text-xs font-bold uppercase tracking-wide text-accent">View Work</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
