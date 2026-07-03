import dynamic from "next/dynamic";
import { transportationLogisticsPaidAdsModules } from "@/content/industries/modules/transportation-logistics-paid-ads-modules";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

const PlatformShowcase = dynamic(
  () =>
    import("@/components/platform-showcase/PlatformShowcase").then(
      (m) => m.PlatformShowcase,
    ),
  { loading: () => <div className="min-h-[320px] bg-surface" aria-hidden /> },
);

export function TransportationLogisticsPaidAdsModuleBundle() {
  const modules = transportationLogisticsPaidAdsModules;
  return (
    <>
      <PlatformShowcase config={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
