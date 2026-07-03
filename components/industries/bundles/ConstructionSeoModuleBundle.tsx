import { constructionSeoModules } from "@/content/industries/modules/construction-seo-modules";
import { ConstructionSeoShowcase } from "@/components/industries/construction/ConstructionSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ConstructionSeoGrowthChart } from "@/components/industries/construction/ConstructionSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ConstructionSeoModuleBundle() {
  const modules = constructionSeoModules;
  return (
    <>
      <ConstructionSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ConstructionSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="construction" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
