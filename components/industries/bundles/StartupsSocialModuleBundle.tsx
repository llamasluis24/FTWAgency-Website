import { startupsSocialModules } from "@/content/industries/modules/startups-social-modules";
import { StartupsSocialShowcase } from "@/components/industries/startups/StartupsSocialShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { StartupsSocialPlatformSpread } from "@/components/industries/startups/StartupsSocialPlatformSpread";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function StartupsSocialModuleBundle() {
  const modules = startupsSocialModules;
  return (
    <>
      <StartupsSocialShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <StartupsSocialPlatformSpread content={modules.platformSpread} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
