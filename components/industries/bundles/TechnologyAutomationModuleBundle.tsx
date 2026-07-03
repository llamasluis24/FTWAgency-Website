import { technologyAutomationModules } from "@/content/industries/technology-automation-modules";
import { TechnologyAutomationShowcase } from "@/components/industries/technology/TechnologyAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TechnologyAutomationDashboard } from "@/components/industries/technology/TechnologyAutomationDashboard";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { TechnologyAutomationBeforeAfter } from "@/components/industries/technology/TechnologyAutomationBeforeAfter";

export function TechnologyAutomationModuleBundle() {
  const modules = technologyAutomationModules;
  return (
    <>
      <TechnologyAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TechnologyAutomationDashboard content={modules.performance} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <TechnologyAutomationBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
