import type { Project } from "./types";
import { stateStreetFearlessGirl } from "./state-street-fearless-girl";
import { verizonUnbreakableController } from "./verizon-unbreakable-controller";
import { annoveraWebsiteCompanionApp } from "./annovera-website-companion-app";
import { lockheedMartinRobotRecruiter } from "./lockheed-martin-robot-recruiter";
import { mastercardTapGoPlay } from "./mastercard-tap-go-play";
import { lockheedMartinFieldTripToMars } from "./lockheed-martin-field-trip-to-mars";
import { nyLotteryMustLoveDogs } from "./ny-lottery-must-love-dogs";
import { prudentialFlashForward } from "./prudential-flash-forward";
import { instaxWebsite } from "./instax-website";
import { stateStreetLoudestBell } from "./state-street-loudest-bell";
import { mgmShoeyBar } from "./mgm-shoey-bar";
import { sasBattingLab } from "./sas-batting-lab";
import { lysolMiniLabs } from "./lysol-mini-labs";
import { chickFilABreakRoom } from "./chick-fil-a-break-room";
import { mucinexMonstersInWaiting } from "./mucinex-monsters-in-waiting";

export * from "./types";

export const projects: Project[] = [
  stateStreetFearlessGirl,
  verizonUnbreakableController,
  annoveraWebsiteCompanionApp,
  lockheedMartinRobotRecruiter,
  mastercardTapGoPlay,
  lockheedMartinFieldTripToMars,
  nyLotteryMustLoveDogs,
  prudentialFlashForward,
  instaxWebsite,
  stateStreetLoudestBell,
  mgmShoeyBar,
  sasBattingLab,
  lysolMiniLabs,
  chickFilABreakRoom,
  mucinexMonstersInWaiting,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
