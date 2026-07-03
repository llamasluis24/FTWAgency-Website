import { technologySocialModules } from "@/content/industries/technology-social-modules";
import { TechnologySocialShowcase } from "@/components/industries/technology/TechnologySocialShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TechnologySocialPlatformSpread } from "@/components/industries/technology/TechnologySocialPlatformSpread";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";

export function TechnologySocialModuleBundle() {
  const modules = technologySocialModules;
  return (
    <>
      <TechnologySocialShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TechnologySocialPlatformSpread content={modules.platformSpread} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
    </>
  );
}
