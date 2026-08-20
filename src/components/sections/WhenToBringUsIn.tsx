import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whenToBringUsIn } from "@/data/about";

export default function WhenToBringUsIn() {
  return (
    <section id="when-to-bring-us-in" className="scroll-mt-36 px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <Reveal>
        <Eyebrow>{whenToBringUsIn.eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
          {whenToBringUsIn.headline}
        </h1>
      </Reveal>

      <div className="relative mt-16">
        <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-border-subtle" aria-hidden="true" />
        <RevealGroup className="grid gap-8 md:grid-cols-4">
          {whenToBringUsIn.stages.map((stage) => (
            <RevealItem key={stage.label} className="relative">
              <div className="hidden md:block relative z-10 mb-4 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
              <p className="font-mono text-xs tracking-[0.1em] uppercase text-foreground">{stage.label}</p>
              <p className="mt-2 min-h-[3.5rem] text-xl font-bold leading-snug">{stage.question}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.15} className="mt-12 max-w-2xl space-y-4">
        {whenToBringUsIn.closingParagraphs.map((paragraph, i) => (
          <p key={i} className="text-lg text-text-secondary leading-relaxed">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.2} className="mt-12">
        <Link
          href="/work"
          className="inline-block rounded-full border border-accent/40 px-6 py-3 text-sm font-bold text-accent hover:border-accent transition-colors"
        >
          See our work
        </Link>
      </Reveal>
    </section>
  );
}
