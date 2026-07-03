import { startupsSeoModules } from "@/content/industries/modules/startups-seo-modules";
import { StartupsSeoShowcase } from "@/components/industries/startups/StartupsSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { StartupsSeoGrowthChart } from "@/components/industries/startups/StartupsSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function StartupsSeoModuleBundle() {
  const modules = startupsSeoModules;
  return (
    <>
      <StartupsSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <StartupsSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="startups" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
