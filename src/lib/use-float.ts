"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, animate } from "framer-motion";

/**
 * Slow, continuous sine-wave drift so an element (or a connecting line
 * endpoint) appears to float in place. Deterministic per `index` so
 * elements sharing an index (e.g. a node and its line endpoint) drift
 * in sync without being wired together directly.
 */
export function useFloatOffset(index: number, ampX: number, ampY: number) {
  const t = useMotionValue(0);

  useEffect(() => {
    const controls = animate(t, Math.PI * 2, {
      duration: 8 + (index % 4) * 2,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [index, t]);

  const phase = index * 1.7;
  const dx = useTransform(t, (v) => Math.sin(v + phase) * ampX);
  const dy = useTransform(t, (v) => Math.cos(v * 0.85 + phase) * ampY);

  return { dx, dy };
}
