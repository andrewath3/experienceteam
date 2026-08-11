import type { Metadata } from "next";
import SubNav from "@/components/SubNav";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhenToBringUsIn from "@/components/sections/WhenToBringUsIn";
import WhoWeveWorkedWith from "@/components/sections/WhoWeveWorkedWith";
import { getAboutMeta } from "@/lib/content/about";

export function generateMetadata(): Metadata {
  const { metaDescription } = getAboutMeta();
  return {
    title: "Experience Team",
    description: metaDescription,
  };
}

export default function Home() {
  const { subNav } = getAboutMeta();
  return (
    <>
      <SubNav links={subNav} />
      <WhoWeAre />
      <WhatWeDo />
      <WhenToBringUsIn />
      <WhoWeveWorkedWith />
    </>
  );
}
