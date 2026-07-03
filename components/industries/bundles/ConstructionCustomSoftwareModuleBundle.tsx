import { constructionCustomSoftwareModules } from "@/content/industries/modules/construction-custom-software-modules";
import { ConstructionCustomSoftwareShowcase } from "@/components/industries/construction/ConstructionCustomSoftwareShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ConstructionCustomSoftwareModuleBundle() {
  const modules = constructionCustomSoftwareModules;
  return (
    <>
      <ConstructionCustomSoftwareShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
