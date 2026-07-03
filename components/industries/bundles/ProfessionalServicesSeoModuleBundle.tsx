import { professionalServicesSeoModules } from "@/content/industries/modules/professional-services-seo-modules";
import { ProfessionalServicesSeoShowcase } from "@/components/industries/professional-services/ProfessionalServicesSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ProfessionalServicesSeoGrowthChart } from "@/components/industries/professional-services/ProfessionalServicesSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ProfessionalServicesSeoModuleBundle() {
  const modules = professionalServicesSeoModules;
  return (
    <>
      <ProfessionalServicesSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ProfessionalServicesSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="professional-services" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
