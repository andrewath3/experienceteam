import Eyebrow from "@/components/Eyebrow";
import ImageScatter from "@/components/ImageScatter";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whoWeAre } from "@/data/about";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-36 px-6 md:px-10 pt-28 md:pt-36 pb-16 max-w-6xl mx-auto lg:flex lg:items-center lg:gap-12">
      <div className="lg:w-[60%] lg:min-w-0">
        <Reveal>
          <Eyebrow>{whoWeAre.eyebrow}</Eyebrow>
        </Reveal>

        <RevealGroup className="mt-6" stagger={0.12}>
          {whoWeAre.headlineLines.map((line, i) => (
            <RevealItem key={i}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
                {line}
              </h1>
            </RevealItem>
          ))}
          <RevealItem>
            <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold tracking-tight leading-[1.1] italic text-accent">
              {whoWeAre.accentLine}
            </p>
          </RevealItem>
        </RevealGroup>

        <Reveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-lg text-text-secondary leading-relaxed">{whoWeAre.body}</p>
        </Reveal>
      </div>

      <div className="lg:hidden">
        <ImageScatter slugs={whoWeAre.scatterSlugs} />
      </div>
      <div className="hidden lg:block lg:w-[40%] lg:min-w-0">
        <ImageScatter slugs={whoWeAre.scatterSlugs} compact />
      </div>
    </section>
  );
}
