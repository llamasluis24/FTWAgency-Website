import { constructionMobileAppModules } from "@/content/industries/modules/construction-mobile-app-modules";
import { ConstructionFieldAppShowcase } from "@/components/industries/construction/ConstructionFieldAppShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ConstructionMobileAppModuleBundle() {
  const modules = constructionMobileAppModules;
  return (
    <>
      <ConstructionFieldAppShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
