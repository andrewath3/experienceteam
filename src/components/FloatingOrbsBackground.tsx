"use client";

import { useEffect, useRef } from "react";
import { createOrbField } from "@/lib/orb-field";

/**
 * Fixed ambient background of slow-drifting blurred light balls. Always
 * mounted; visibility is toggled purely in CSS via [data-bg] so switching
 * backgrounds never remounts (and restarts) the physics.
 */
export default function FloatingOrbsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return createOrbField(containerRef.current);
  }, []);

  return <div ref={containerRef} className="bg-orbs" aria-hidden="true" />;
}
