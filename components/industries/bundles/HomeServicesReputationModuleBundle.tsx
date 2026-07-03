import { homeServicesReputationModules } from "@/content/industries/modules/home-services-reputation-modules";
import { HomeServicesReputationShowcase } from "@/components/industries/home-services/HomeServicesReputationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HomeServicesReputationModuleBundle() {
  const modules = homeServicesReputationModules;
  return (
    <>
      <HomeServicesReputationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
