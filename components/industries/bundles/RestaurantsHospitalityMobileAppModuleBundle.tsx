import { restaurantsHospitalityMobileAppModules } from "@/content/industries/modules/restaurants-hospitality-mobile-app-modules";
import { RestaurantsHospitalityLoyaltyAppShowcase } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalityLoyaltyAppShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RestaurantsHospitalityMobileAppModuleBundle() {
  const modules = restaurantsHospitalityMobileAppModules;
  return (
    <>
      <RestaurantsHospitalityLoyaltyAppShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
