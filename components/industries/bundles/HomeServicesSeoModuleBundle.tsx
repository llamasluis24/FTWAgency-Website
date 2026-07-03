import { homeServicesSeoModules } from "@/content/industries/modules/home-services-seo-modules";
import { HomeServicesSeoShowcase } from "@/components/industries/home-services/HomeServicesSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { HomeServicesSeoGrowthChart } from "@/components/industries/home-services/HomeServicesSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HomeServicesSeoModuleBundle() {
  const modules = homeServicesSeoModules;
  return (
    <>
      <HomeServicesSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <HomeServicesSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="home-services" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
