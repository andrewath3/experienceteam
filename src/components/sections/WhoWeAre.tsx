import Eyebrow from "@/components/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { framingStatement } from "@/data/content";
import { disciplines } from "@/data/disciplines";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="px-6 md:px-10 pt-28 md:pt-36 pb-24 max-w-5xl mx-auto">
      <Reveal>
        <Eyebrow>Who We Are</Eyebrow>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          We&rsquo;re the Experience Team.
        </h1>
        <div className="mt-8 space-y-5 max-w-3xl">
          {framingStatement.map((paragraph, i) => (
            <p key={i} className="text-lg text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2">
        {disciplines.map((discipline, i) => (
          <RevealItem key={discipline}>
            <div className="h-full rounded-2xl border border-border-subtle bg-surface px-8 py-10 md:px-10 md:py-12">
              <p className="text-sm font-bold text-accent/70">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05]">
                {discipline}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
