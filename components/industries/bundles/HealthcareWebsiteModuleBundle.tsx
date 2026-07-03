import { healthcareWebsiteModules } from "@/content/industries/modules/healthcare-website-modules";
import { HealthcareWebsiteShowcase } from "@/components/industries/healthcare/HealthcareWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HealthcareWebsiteModuleBundle() {
  const modules = healthcareWebsiteModules;
  return (
    <>
      <HealthcareWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
