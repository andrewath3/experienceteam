import Eyebrow from "@/components/Eyebrow";
import ImageScatter from "@/components/ImageScatter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { getWhoWeAre } from "@/lib/content/about";

export default function WhoWeAre() {
  const whoWeAre = getWhoWeAre();
  return (
    <section id="who-we-are" className="px-6 md:px-10 pt-28 md:pt-36 pb-16 max-w-5xl mx-auto">
      <Reveal>
        <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
      </Reveal>

      <RevealGroup className="mt-6" stagger={0.12}>
        {whoWeAre.headlineLines.map((line, i) => (
          <RevealItem key={i}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              {line}
            </h1>
          </RevealItem>
        ))}
        <RevealItem>
          <p className="mt-2 text-xl sm:text-2xl italic text-accent">{whoWeAre.accentLine}</p>
        </RevealItem>
      </RevealGroup>

      <Reveal delay={0.15} className="mt-8 space-y-5 max-w-3xl">
        {whoWeAre.bodyParagraphs.map((paragraph, i) => (
          <p key={i} className="text-lg text-text-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <ImageScatter slugs={whoWeAre.scatterSlugs} />
    </section>
  );
}
