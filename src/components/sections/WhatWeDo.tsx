import Eyebrow from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import WorkWithUs from "@/components/WorkWithUs";
import { capabilityTags } from "@/data/content";
import { touchpoints } from "@/data/process";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
      <Reveal className="max-w-2xl">
        <Eyebrow>What We Do</Eyebrow>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Experiential, interactive, and product work — end to end.
        </h2>
      </Reveal>

      <RevealGroup className="mt-10 flex flex-wrap gap-3">
        {capabilityTags.map((tag) => (
          <RevealItem key={tag}>
            <span className="inline-block rounded-full border border-accent/30 bg-surface px-5 py-2.5 text-sm md:text-base font-semibold text-foreground">
              {tag}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-16">
        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-accent-muted">
          Where we plug in
        </h3>
        <p className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
          We can help define, deliver, and enable brand experiences.
        </p>
      </Reveal>

      <RevealGroup className="mt-6 grid gap-4 md:grid-cols-4">
        {touchpoints.map((tp) => (
          <RevealItem key={tp.number}>
            <div className="h-full rounded-xl border border-border-subtle bg-surface p-5">
              <p className="text-2xl font-extrabold text-accent/70">{tp.number}</p>
              <p className="mt-2 font-extrabold tracking-tight">{tp.name}</p>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{tp.blurb}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.15} className="mt-16">
        <WorkWithUs />
      </Reveal>
    </section>
  );
}
