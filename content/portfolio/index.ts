import { ProjectSchema, type Project } from "@/lib/schemas";
import { allAroundMobileHomeService } from "./all-around-mobile-home-service";
import { allExclusiveGlassHouse } from "./all-exclusive-glass-house";
import { blueSocial } from "./blue-social";
import { calStarMobilehomecrm } from "./cal-star-mobilehomecrm";
import { calStarMobile } from "./cal-star-mobile";
import { clearCartelCoors } from "./clear-cartel-coors";
import { farmhouseCollective } from "./farmhouse-collective";
import { ghosttrade } from "./ghosttrade";
import { mobilehomecrm } from "./mobilehomecrm";
import { rigoDemolitionBrentwood } from "./rigo-demolition-brentwood";
import { rigoDemolitionPasadena } from "./rigo-demolition-pasadena";
import { vertexServices } from "./vertex-services";
import { visitRiverside } from "./visit-riverside";
import { mendozerXEarthworks } from "./mendozer-x-earthworks";
import { fdcFire } from "./fdc-fire";
import { wpconvertAi } from "./wpconvert-ai";
import { voteChristen } from "./vote-christen";

/** All shipped websites, social reels & software featured across the site. */
export const projects: Project[] = [
  mobilehomecrm,
  blueSocial,
  visitRiverside,
  rigoDemolitionBrentwood,
  allExclusiveGlassHouse,
  clearCartelCoors,
  rigoDemolitionPasadena,
  allAroundMobileHomeService,
  wpconvertAi,
  farmhouseCollective,
  calStarMobilehomecrm,
  ghosttrade,
  vertexServices,
  mendozerXEarthworks,
  fdcFire,
  calStarMobile,
  voteChristen,
].map((p) => ProjectSchema.parse(p));
