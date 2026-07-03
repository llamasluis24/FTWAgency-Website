import { professionalServicesAioModules } from "@/content/industries/modules/professional-services-aio-modules";
import { ProfessionalServicesAioShowcase } from "@/components/industries/professional-services/ProfessionalServicesAioShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ProfessionalServicesAioVisibilityChart } from "@/components/industries/professional-services/ProfessionalServicesAioVisibilityChart";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ProfessionalServicesAioModuleBundle() {
  const modules = professionalServicesAioModules;
  return (
    <>
      <ProfessionalServicesAioShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ProfessionalServicesAioVisibilityChart content={modules.visibility} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
