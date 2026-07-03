import { restaurantsHospitalityAutomationModules } from "@/content/industries/modules/restaurants-hospitality-automation-modules";
import { RestaurantsHospitalityAutomationShowcase } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalityAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { RestaurantsHospitalityAutomationTimeline } from "@/components/industries/restaurants-hospitality/RestaurantsHospitalityAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RestaurantsHospitalityAutomationModuleBundle() {
  const modules = restaurantsHospitalityAutomationModules;
  return (
    <>
      <RestaurantsHospitalityAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <RestaurantsHospitalityAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
