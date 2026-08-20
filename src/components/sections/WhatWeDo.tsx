import Eyebrow from "@/components/Eyebrow";
import Card from "@/components/Card";
import ImageScatter from "@/components/ImageScatter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whatWeDo } from "@/data/about";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="scroll-mt-36 px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <Reveal>
        <Eyebrow>{whatWeDo.eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
          {whatWeDo.headline}
        </h1>
        <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-tight leading-[1.1] italic text-accent">
          {whatWeDo.accentLine}
        </p>
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">{whatWeDo.intro}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
        {whatWeDo.capabilities.map((cap) => (
          <RevealItem key={cap.category}>
            <Card title={cap.category} label={cap.purpose} body={cap.body} />
          </RevealItem>
        ))}
      </RevealGroup>

      <ImageScatter slugs={whatWeDo.scatterSlugs} />
    </section>
  );
}
