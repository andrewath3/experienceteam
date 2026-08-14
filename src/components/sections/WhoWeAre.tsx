import Eyebrow from "@/components/Eyebrow";
import ImageScatter from "@/components/ImageScatter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whoWeAre } from "@/data/about";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-36 px-6 md:px-10 pt-28 md:pt-36 pb-16 max-w-6xl mx-auto">
      <Reveal>
        <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
      </Reveal>

      <RevealGroup className="mt-6" stagger={0.12}>
        {whoWeAre.headlineLines.map((line, i) => (
          <RevealItem key={i}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {line}
            </h1>
          </RevealItem>
        ))}
        <RevealItem>
          <p className="mt-2 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] italic text-accent">
            {whoWeAre.accentLine}
          </p>
        </RevealItem>
      </RevealGroup>

      <Reveal delay={0.15} className="mt-8 max-w-3xl">
        <p className="text-lg text-text-secondary leading-relaxed">{whoWeAre.body}</p>
      </Reveal>

      <ImageScatter slugs={whoWeAre.scatterSlugs} />
    </section>
  );
}
