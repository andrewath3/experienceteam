import { readContentFile, readContentDir, splitParagraphs } from "./fs";
import type {
  AboutMeta,
  Capability,
  WhatWeDoContent,
  WhenToBringUsInContent,
  WhoWeAreContent,
  WhoWeveWorkedWithContent,
} from "./types";

export function getAboutMeta(): AboutMeta {
  const { data, body } = readContentFile("about/meta.md");
  return {
    subNav: data.subNav as AboutMeta["subNav"],
    metaDescription: body,
  };
}

export function getWhoWeAre(): WhoWeAreContent {
  const { data, body } = readContentFile("about/who-we-are.md");
  return {
    eyebrow: data.eyebrow as string,
    headlineLines: data.headlineLines as string[],
    accentLine: data.accentLine as string,
    bodyParagraphs: splitParagraphs(body),
    scatterSlugs: data.scatterSlugs as string[],
  };
}

function getCapabilities(): Capability[] {
  return readContentDir("about/capabilities")
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map(({ data, body }) => ({
      number: data.number as string,
      verb: data.verb as string,
      category: data.category as string,
      body,
    }));
}

export function getWhatWeDo(): WhatWeDoContent {
  const { data, body } = readContentFile("about/what-we-do.md");
  return {
    eyebrow: data.eyebrow as string,
    headline: data.headline as string,
    intro: body,
    capabilities: getCapabilities(),
    workPointer: data.workPointer as string,
    scatterSlugs: data.scatterSlugs as string[],
  };
}

export function getWhenToBringUsIn(): WhenToBringUsInContent {
  const { data, body } = readContentFile("about/when-to-bring-us-in.md");
  const [closing, budgetLine] = splitParagraphs(body);
  return {
    eyebrow: data.eyebrow as string,
    headline: data.headline as string,
    stages: data.stages as WhenToBringUsInContent["stages"],
    closing,
    budgetLine,
  };
}

export function getWhoWeveWorkedWith(): WhoWeveWorkedWithContent {
  const { data } = readContentFile("about/who-weve-worked-with.md");
  return { eyebrow: data.eyebrow as string };
}
