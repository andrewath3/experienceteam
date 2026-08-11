import { readContentFile } from "./fs";
import type { GlobalContent } from "./types";

export function getGlobalContent(): GlobalContent {
  const { data } = readContentFile("global/site.md");
  return {
    wordmark: data.wordmark as string,
    primaryNav: data.primaryNav as GlobalContent["primaryNav"],
    contactBanner: data.contactBanner as GlobalContent["contactBanner"],
    teamsUrl: data.teamsUrl as string,
  };
}
