import { startupsAutomationModules } from "@/content/industries/modules/startups-automation-modules";
import { StartupsAutomationShowcase } from "@/components/industries/startups/StartupsAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { StartupsAutomationTimeline } from "@/components/industries/startups/StartupsAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function StartupsAutomationModuleBundle() {
  const modules = startupsAutomationModules;
  return (
    <>
      <StartupsAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <StartupsAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
