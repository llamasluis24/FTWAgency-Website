import { retailEcommerceSeoModules } from "@/content/industries/modules/retail-ecommerce-seo-modules";
import { RetailEcommerceSeoShowcase } from "@/components/industries/retail-ecommerce/RetailEcommerceSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { RetailEcommerceSeoGrowthChart } from "@/components/industries/retail-ecommerce/RetailEcommerceSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RetailEcommerceSeoModuleBundle() {
  const modules = retailEcommerceSeoModules;
  return (
    <>
      <RetailEcommerceSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <RetailEcommerceSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="retail-ecommerce" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
