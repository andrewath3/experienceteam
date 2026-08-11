import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import Card from "@/components/Card";
import ImageScatter from "@/components/ImageScatter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whatWeDo } from "@/data/about";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
      <Reveal className="max-w-2xl">
        <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {whatWeDo.headline}
        </h2>
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">{whatWeDo.intro}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
        {whatWeDo.capabilities.map((cap) => (
          <RevealItem key={cap.number}>
            <Card title={cap.verb} label={cap.category} body={cap.body} number={cap.number} />
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal delay={0.1} className="mt-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-muted transition-colors"
        >
          {whatWeDo.workPointer}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </Reveal>

      <ImageScatter slugs={whatWeDo.scatterSlugs} />
    </section>
  );
}
