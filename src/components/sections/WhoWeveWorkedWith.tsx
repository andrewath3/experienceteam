import Eyebrow from "@/components/Eyebrow";
import LogoWall from "@/components/LogoWall";
import { Reveal } from "@/components/Reveal";
import { getWhoWeveWorkedWith } from "@/lib/content/about";

export default function WhoWeveWorkedWith() {
  const whoWeveWorkedWith = getWhoWeveWorkedWith();
  return (
    <section className="px-6 md:px-10 py-16 max-w-5xl mx-auto">
      <Reveal>
        <Eyebrow>{whoWeveWorkedWith.eyebrow}</Eyebrow>
      </Reveal>
      <div className="mt-8">
        <LogoWall />
      </div>
    </section>
  );
}
