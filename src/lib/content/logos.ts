import { readContentFile } from "./fs";
import type { Logo } from "./types";

export function getLogos(): Logo[] {
  const { data } = readContentFile("logos.md");
  return data.logos as Logo[];
}
