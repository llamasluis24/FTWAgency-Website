import { healthcareSeoModules } from "@/content/industries/modules/healthcare-seo-modules";
import { HealthcareSeoShowcase } from "@/components/industries/healthcare/HealthcareSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { HealthcareSeoGrowthChart } from "@/components/industries/healthcare/HealthcareSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HealthcareSeoModuleBundle() {
  const modules = healthcareSeoModules;
  return (
    <>
      <HealthcareSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <HealthcareSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="healthcare" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
