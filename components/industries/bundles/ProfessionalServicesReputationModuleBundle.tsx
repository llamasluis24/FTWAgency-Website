import { professionalServicesReputationModules } from "@/content/industries/modules/professional-services-reputation-modules";
import { ProfessionalServicesReputationShowcase } from "@/components/industries/professional-services/ProfessionalServicesReputationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ProfessionalServicesReputationModuleBundle() {
  const modules = professionalServicesReputationModules;
  return (
    <>
      <ProfessionalServicesReputationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
