import { transportationLogisticsMobileAppModules } from "@/content/industries/modules/transportation-logistics-mobile-app-modules";
import { TransportationDriverAppShowcase } from "@/components/industries/transportation-logistics/TransportationDriverAppShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function TransportationLogisticsMobileAppModuleBundle() {
  const modules = transportationLogisticsMobileAppModules;
  return (
    <>
      <TransportationDriverAppShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
