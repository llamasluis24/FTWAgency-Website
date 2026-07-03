import { manufacturingSeoModules } from "@/content/industries/modules/manufacturing-seo-modules";
import { ManufacturingSeoShowcase } from "@/components/industries/manufacturing/ManufacturingSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { ManufacturingSeoGrowthChart } from "@/components/industries/manufacturing/ManufacturingSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ManufacturingSeoModuleBundle() {
  const modules = manufacturingSeoModules;
  return (
    <>
      <ManufacturingSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <ManufacturingSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="manufacturing" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
