import { restaurantsHospitalityGbpModules } from "@/content/industries/modules/restaurants-hospitality-gbp-modules";
import { RestaurantsHospitalityGbpShowcase } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalityGbpShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RestaurantsHospitalityGbpModuleBundle() {
  const modules = restaurantsHospitalityGbpModules;
  return (
    <>
      <RestaurantsHospitalityGbpShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
