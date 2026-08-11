import Eyebrow from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { getWhenToBringUsIn } from "@/lib/content/about";

export default function WhenToBringUsIn() {
  const whenToBringUsIn = getWhenToBringUsIn();
  return (
    <section id="when-to-bring-us-in" className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
      <Reveal className="max-w-2xl">
        <Eyebrow>{whenToBringUsIn.eyebrow}</Eyebrow>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          {whenToBringUsIn.headline}
        </h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-border-subtle" aria-hidden="true" />
        <RevealGroup className="grid gap-8 md:grid-cols-4">
          {whenToBringUsIn.stages.map((stage) => (
            <RevealItem key={stage.label} className="relative">
              <div className="hidden md:block relative z-10 mb-4 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-accent-muted">{stage.label}</p>
              <p className="mt-2 min-h-[3.5rem] text-lg sm:text-xl font-bold leading-snug">{stage.question}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal delay={0.15} className="mt-12 max-w-2xl space-y-4">
        <p className="text-lg text-text-secondary leading-relaxed">{whenToBringUsIn.closing}</p>
        <p className="text-text-secondary leading-relaxed">{whenToBringUsIn.budgetLine}</p>
      </Reveal>
    </section>
  );
}
