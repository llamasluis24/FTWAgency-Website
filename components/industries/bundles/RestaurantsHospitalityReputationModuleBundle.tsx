import { restaurantsHospitalityReputationModules } from "@/content/industries/modules/restaurants-hospitality-reputation-modules";
import { RestaurantsHospitalityReputationShowcase } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalityReputationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RestaurantsHospitalityReputationModuleBundle() {
  const modules = restaurantsHospitalityReputationModules;
  return (
    <>
      <RestaurantsHospitalityReputationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
