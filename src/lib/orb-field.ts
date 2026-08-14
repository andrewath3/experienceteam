"use client";

/**
 * Slow-drifting blurred "light ball" background. Orbs move at a near-still
 * pace and bounce elastically off each other and the container edges, so
 * they never overlap — like they're floating in water rather than a
 * particle system.
 *
 * Kept dependency-free so the exact same logic can be pasted into the
 * StatiCrypt login template, which has no build step.
 */

export type OrbFieldOptions = {
  count?: number;
  minRadius?: number;
  maxRadius?: number;
  speed?: number;
};

const DEFAULTS: Required<OrbFieldOptions> = {
  count: 4,
  minRadius: 88,
  maxRadius: 188,
  speed: 26, // px/sec at full speed
};

export function createOrbField(container: HTMLElement, options: OrbFieldOptions = {}) {
  const opts = { ...DEFAULTS, ...options };
  const orbs: {
    el: HTMLDivElement;
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
  }[] = [];

  let width = container.clientWidth;
  let height = container.clientHeight;

  for (let i = 0; i < opts.count; i++) {
    const r = opts.minRadius + Math.random() * (opts.maxRadius - opts.minRadius);
    const el = document.createElement("div");
    el.className = "orb-field-ball";
    el.style.width = `${r * 2}px`;
    el.style.height = `${r * 2}px`;
    const hue = 0.6 + Math.random() * 0.4;
    el.style.opacity = `${hue.toFixed(2)}`;
    container.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    orbs.push({
      el,
      x: Math.random() * Math.max(width - r * 2, 1) + r,
      y: Math.random() * Math.max(height - r * 2, 1) + r,
      vx: Math.cos(angle) * opts.speed * (0.4 + Math.random() * 0.6),
      vy: Math.sin(angle) * opts.speed * (0.4 + Math.random() * 0.6),
      r,
    });
  }

  function resolveWallCollisions() {
    for (const o of orbs) {
      if (o.x - o.r < 0) {
        o.x = o.r;
        o.vx = Math.abs(o.vx);
      } else if (o.x + o.r > width) {
        o.x = width - o.r;
        o.vx = -Math.abs(o.vx);
      }
      if (o.y - o.r < 0) {
        o.y = o.r;
        o.vy = Math.abs(o.vy);
      } else if (o.y + o.r > height) {
        o.y = height - o.r;
        o.vy = -Math.abs(o.vy);
      }
    }
  }

  function resolveOrbCollisions() {
    for (let i = 0; i < orbs.length; i++) {
      for (let j = i + 1; j < orbs.length; j++) {
        const a = orbs[i];
        const b = orbs[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        const minDist = a.r + b.r;
        if (dist >= minDist) continue;

        // Separate so they touch but don't overlap.
        const overlap = minDist - dist;
        const nx = dx / dist;
        const ny = dy / dist;
        a.x -= (nx * overlap) / 2;
        a.y -= (ny * overlap) / 2;
        b.x += (nx * overlap) / 2;
        b.y += (ny * overlap) / 2;

        // Elastic collision, equal mass: swap velocity along the normal.
        const avn = a.vx * nx + a.vy * ny;
        const bvn = b.vx * nx + b.vy * ny;
        a.vx += (bvn - avn) * nx;
        a.vy += (bvn - avn) * ny;
        b.vx += (avn - bvn) * nx;
        b.vy += (avn - bvn) * ny;
      }
    }
  }

  let raf = 0;
  let last = performance.now();

  function tick(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    for (const o of orbs) {
      o.x += o.vx * dt;
      o.y += o.vy * dt;
    }

    resolveWallCollisions();
    resolveOrbCollisions();

    for (const o of orbs) {
      o.el.style.transform = `translate3d(${o.x - o.r}px, ${o.y - o.r}px, 0)`;
    }

    raf = requestAnimationFrame(tick);
  }

  raf = requestAnimationFrame(tick);

  function handleResize() {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    for (const o of orbs) {
      o.x = Math.min(o.x, Math.max(newWidth - o.r, o.r));
      o.y = Math.min(o.y, Math.max(newHeight - o.r, o.r));
    }
    width = newWidth;
    height = newHeight;
  }

  window.addEventListener("resize", handleResize);

  return function dispose() {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", handleResize);
    for (const o of orbs) o.el.remove();
  };
}
