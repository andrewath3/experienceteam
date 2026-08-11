import type { Metadata } from "next";
import SubNav from "@/components/SubNav";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import WhenToBringUsIn from "@/components/sections/WhenToBringUsIn";
import WhoWeveWorkedWith from "@/components/sections/WhoWeveWorkedWith";
import { subNav, metaDescription } from "@/data/about";

export const metadata: Metadata = {
  title: "Experience Team",
  description: metaDescription,
};

export default function Home() {
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
