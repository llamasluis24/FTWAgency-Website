import { transportationLogisticsCustomSoftwareModules } from "@/content/industries/modules/transportation-logistics-custom-software-modules";
import { TransportationCustomSoftwareShowcase } from "@/components/industries/transportation-logistics/TransportationCustomSoftwareShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function TransportationLogisticsCustomSoftwareModuleBundle() {
  const modules = transportationLogisticsCustomSoftwareModules;
  return (
    <>
      <TransportationCustomSoftwareShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
