import { ProjectSchema, type Project } from "@/lib/schemas";
import { allAroundMobileHomeService } from "./all-around-mobile-home-service";
import { blueSocial } from "./blue-social";
import { calStarMobilehomecrm } from "./cal-star-mobilehomecrm";
import { farmhouseCollective } from "./farmhouse-collective";
import { ghosttrade } from "./ghosttrade";
import { mobilehomecrm } from "./mobilehomecrm";
import { vertexServices } from "./vertex-services";
import { visitRiverside } from "./visit-riverside";
import { wpconvertAi } from "./wpconvert-ai";

/** All shipped websites & software featured across the site (carousel + case studies). */
export const projects: Project[] = [
  mobilehomecrm,
  blueSocial,
  visitRiverside,
  allAroundMobileHomeService,
  wpconvertAi,
  farmhouseCollective,
  calStarMobilehomecrm,
  ghosttrade,
  vertexServices,
].map((p) => ProjectSchema.parse(p));
