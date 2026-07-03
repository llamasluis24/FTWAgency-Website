import { constructionReputationModules } from "@/content/industries/modules/construction-reputation-modules";
import { ConstructionReputationShowcase } from "@/components/industries/construction/ConstructionReputationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ConstructionReputationModuleBundle() {
  const modules = constructionReputationModules;
  return (
    <>
      <ConstructionReputationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
