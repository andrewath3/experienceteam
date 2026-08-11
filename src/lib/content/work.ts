import { readContentFile } from "./fs";
import type { WorkPageContent } from "./types";

export function getWorkPageContent(): WorkPageContent {
  const { data } = readContentFile("work/page.md");
  return {
    headline: data.headline as string,
    budgetFilterLabels: data.budgetFilterLabels as WorkPageContent["budgetFilterLabels"],
    zeroResults: data.zeroResults as WorkPageContent["zeroResults"],
  };
}
