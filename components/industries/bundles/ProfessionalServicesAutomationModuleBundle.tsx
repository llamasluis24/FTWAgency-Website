import { professionalServicesAutomationModules } from "@/content/industries/modules/professional-services-automation-modules";
import { ProfessionalServicesAutomationShowcase } from "@/components/industries/professional-services/ProfessionalServicesAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ProfessionalServicesAutomationTimeline } from "@/components/industries/professional-services/ProfessionalServicesAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ProfessionalServicesAutomationModuleBundle() {
  const modules = professionalServicesAutomationModules;
  return (
    <>
      <ProfessionalServicesAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ProfessionalServicesAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
