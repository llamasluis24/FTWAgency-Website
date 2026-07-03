import { healthcareReputationModules } from "@/content/industries/modules/healthcare-reputation-modules";
import { HealthcareReputationShowcase } from "@/components/industries/healthcare/HealthcareReputationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HealthcareReputationModuleBundle() {
  const modules = healthcareReputationModules;
  return (
    <>
      <HealthcareReputationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
