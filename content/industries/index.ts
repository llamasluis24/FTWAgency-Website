import { IndustrySchema, type Industry } from "@/lib/schemas";
import { homeServices } from "./home-services";
import { construction } from "./construction";
import { healthcare } from "./healthcare";
import { restaurantsHospitality } from "./restaurants-hospitality";
import { professionalServices } from "./professional-services";
import { transportationLogistics } from "./transportation-logistics";
import { retailEcommerce } from "./retail-ecommerce";
import { manufacturing } from "./manufacturing";
import { technology } from "./technology";
import { startups } from "./startups";

export const industries: Industry[] = [
  homeServices,
  construction,
  healthcare,
  restaurantsHospitality,
  professionalServices,
  transportationLogistics,
  retailEcommerce,
  manufacturing,
  technology,
  startups,
].map((i) => IndustrySchema.parse(i));
