import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { work } from "@/data/work";

export default function Work() {
  return (
    <section id="work" className="pt-24 md:pt-28 pb-24">
      <Reveal className="px-6 md:px-10 max-w-6xl mx-auto">
        <Eyebrow>Work</Eyebrow>
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Work already happening across OP and Studio.
        </h2>
      </Reveal>

      <div className="mt-12 flex overflow-x-auto scrollbar-hide gap-[2px] bg-accent/30">
        {work.map((item) => (
          <Reveal
            key={`${item.client}-${item.title}`}
            className="group relative flex-none w-[220px] sm:w-[240px] hover:w-[420px] sm:hover:w-[460px] transition-[width] duration-500 ease-out"
          >
            <div className="relative h-[420px] sm:h-[520px] md:h-[620px] overflow-hidden bg-surface">
              <Image
                src={item.image}
                alt={`${item.client} — ${item.title}`}
                fill
                sizes="(min-width: 1024px) 25vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-surface-header px-4 py-4">
              <p className="text-sm md:text-base font-bold text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                {item.client}
              </p>
              <p className="text-xs md:text-sm text-accent whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </p>
              {(item.budget || item.timeline) && (
                <p className="mt-1 text-xs text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                  {[item.budget, item.timeline].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mt-1 min-h-[1rem] text-xs text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">
                {item.awards && item.awards.length > 0 ? item.awards.join(" · ") : ""}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
