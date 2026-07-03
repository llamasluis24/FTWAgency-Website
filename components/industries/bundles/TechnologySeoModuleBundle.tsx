import { technologySeoModules } from "@/content/industries/technology-seo-modules";
import { TechnologySeoShowcase } from "@/components/industries/technology/TechnologySeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TechnologySeoGrowthChart } from "@/components/industries/technology/TechnologySeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { TechnologySeoBeforeAfter } from "@/components/industries/technology/TechnologySeoBeforeAfter";

export function TechnologySeoModuleBundle() {
  const modules = technologySeoModules;
  return (
    <>
      <TechnologySeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TechnologySeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="technology" />
      <TechnologySeoBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
