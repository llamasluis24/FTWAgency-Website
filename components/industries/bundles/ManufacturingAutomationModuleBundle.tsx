import { manufacturingAutomationModules } from "@/content/industries/modules/manufacturing-automation-modules";
import { ManufacturingAutomationShowcase } from "@/components/industries/manufacturing/ManufacturingAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ManufacturingAutomationTimeline } from "@/components/industries/manufacturing/ManufacturingAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ManufacturingAutomationModuleBundle() {
  const modules = manufacturingAutomationModules;
  return (
    <>
      <ManufacturingAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ManufacturingAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
