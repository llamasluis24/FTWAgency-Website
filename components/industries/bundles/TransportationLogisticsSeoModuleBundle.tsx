import { transportationLogisticsSeoModules } from "@/content/industries/modules/transportation-logistics-seo-modules";
import { TransportationSeoShowcase } from "@/components/industries/transportation-logistics/TransportationSeoShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TransportationSeoGrowthChart } from "@/components/industries/transportation-logistics/TransportationSeoGrowthChart";
import { IndustrySeoEducation } from "@/components/industries/shared/IndustrySeoEducation";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function TransportationLogisticsSeoModuleBundle() {
  const modules = transportationLogisticsSeoModules;
  return (
    <>
      <TransportationSeoShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TransportationSeoGrowthChart content={modules.growth} />
      <IndustrySeoEducation content={modules.seoEducation} industrySlug="transportation-logistics" />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
