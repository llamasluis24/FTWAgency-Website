import { professionalServicesWebsiteModules } from "@/content/industries/modules/professional-services-website-modules";
import { ProfessionalServicesWebsiteShowcase } from "@/components/industries/professional-services/ProfessionalServicesWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ProfessionalServicesWebsiteModuleBundle() {
  const modules = professionalServicesWebsiteModules;
  return (
    <>
      <ProfessionalServicesWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
