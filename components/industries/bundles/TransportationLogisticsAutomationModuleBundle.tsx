import { transportationLogisticsAutomationModules } from "@/content/industries/modules/transportation-logistics-automation-modules";
import { TransportationAutomationShowcase } from "@/components/industries/transportation-logistics/TransportationAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TransportationAutomationTimeline } from "@/components/industries/transportation-logistics/TransportationAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function TransportationLogisticsAutomationModuleBundle() {
  const modules = transportationLogisticsAutomationModules;
  return (
    <>
      <TransportationAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TransportationAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
