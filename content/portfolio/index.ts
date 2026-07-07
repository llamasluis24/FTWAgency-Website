import { ProjectSchema, type Project } from "@/lib/schemas";
import { allAroundMobileHomeService } from "./all-around-mobile-home-service";
import { allExclusiveGlassHouse } from "./all-exclusive-glass-house";
import { blueSocial } from "./blue-social";
import { calStarMobilehomecrm } from "./cal-star-mobilehomecrm";
import { clearCartelCoors } from "./clear-cartel-coors";
import { farmhouseCollective } from "./farmhouse-collective";
import { ghosttrade } from "./ghosttrade";
import { mobilehomecrm } from "./mobilehomecrm";
import { rigoDemolitionBrentwood } from "./rigo-demolition-brentwood";
import { rigoDemolitionPasadena } from "./rigo-demolition-pasadena";
import { vertexServices } from "./vertex-services";
import { visitRiverside } from "./visit-riverside";
import { wpconvertAi } from "./wpconvert-ai";

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
].map((p) => ProjectSchema.parse(p));
