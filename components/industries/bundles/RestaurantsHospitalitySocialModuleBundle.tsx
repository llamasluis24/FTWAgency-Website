import { restaurantsHospitalitySocialModules } from "@/content/industries/modules/restaurants-hospitality-social-modules";
import { RestaurantsHospitalitySocialShowcase } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalitySocialShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { RestaurantsHospitalitySocialPlatformSpread } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalitySocialPlatformSpread";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RestaurantsHospitalitySocialModuleBundle() {
  const modules = restaurantsHospitalitySocialModules;
  return (
    <>
      <RestaurantsHospitalitySocialShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <RestaurantsHospitalitySocialPlatformSpread content={modules.platformSpread} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
