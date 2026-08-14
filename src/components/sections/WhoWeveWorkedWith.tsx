import Eyebrow from "@/components/Eyebrow";
import LogoWall from "@/components/LogoWall";
import { Reveal } from "@/components/Reveal";
import { whoWeveWorkedWith } from "@/data/about";

export default function WhoWeveWorkedWith() {
  return (
    <section id="who-weve-worked-with" className="scroll-mt-36 px-6 md:px-10 py-16 max-w-6xl mx-auto">
      <Reveal>
        <Eyebrow>{whoWeveWorkedWith.eyebrow}</Eyebrow>
      </Reveal>
      <div className="mt-8">
        <LogoWall />
      </div>
    </section>
  );
}
