import { homeServicesAutomationModules } from "@/content/industries/modules/home-services-automation-modules";
import { HomeServicesAutomationShowcase } from "@/components/industries/home-services/HomeServicesAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { HomeServicesAutomationTimeline } from "@/components/industries/home-services/HomeServicesAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HomeServicesAutomationModuleBundle() {
  const modules = homeServicesAutomationModules;
  return (
    <>
      <HomeServicesAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <HomeServicesAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
