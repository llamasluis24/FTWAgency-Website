import { manufacturingCustomSoftwareModules } from "@/content/industries/modules/manufacturing-custom-software-modules";
import { ManufacturingCustomSoftwareShowcase } from "@/components/industries/manufacturing/ManufacturingCustomSoftwareShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ManufacturingCustomSoftwareModuleBundle() {
  const modules = manufacturingCustomSoftwareModules;
  return (
    <>
      <ManufacturingCustomSoftwareShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
