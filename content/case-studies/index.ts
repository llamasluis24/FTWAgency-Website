import { CaseStudySchema, type CaseStudy } from "@/lib/schemas";
import { mobilehomecrmCalStar } from "./mobilehomecrm-cal-star";
import { farmhouseCollective } from "./farmhouse-collective";
import { visitRiverside } from "./visit-riverside";
import { rigoDemolition } from "./rigo-demolition";
import { vertexServices } from "./vertex-services";

export const caseStudies: CaseStudy[] = [
  mobilehomecrmCalStar,
  rigoDemolition,
  farmhouseCollective,
  visitRiverside,
  vertexServices,
].map((c) => CaseStudySchema.parse(c));
