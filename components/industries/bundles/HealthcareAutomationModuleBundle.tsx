import { healthcareAutomationModules } from "@/content/industries/modules/healthcare-automation-modules";
import { HealthcareAutomationShowcase } from "@/components/industries/healthcare/HealthcareAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { HealthcareAutomationTimeline } from "@/components/industries/healthcare/HealthcareAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HealthcareAutomationModuleBundle() {
  const modules = healthcareAutomationModules;
  return (
    <>
      <HealthcareAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <HealthcareAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
