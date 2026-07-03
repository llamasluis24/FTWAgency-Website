import { homeServicesGbpModules } from "@/content/industries/modules/home-services-gbp-modules";
import { HomeServicesGbpShowcase } from "@/components/industries/home-services/HomeServicesGbpShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HomeServicesGbpModuleBundle() {
  const modules = homeServicesGbpModules;
  return (
    <>
      <HomeServicesGbpShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
