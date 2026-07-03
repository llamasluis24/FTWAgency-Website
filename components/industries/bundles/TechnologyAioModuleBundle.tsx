import { technologyAioModules } from "@/content/industries/technology-aio-modules";
import { TechnologyAioShowcase } from "@/components/industries/technology/TechnologyAioShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TechnologyAioVisibilityChart } from "@/components/industries/technology/TechnologyAioVisibilityChart";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { TechnologyAioBeforeAfter } from "@/components/industries/technology/TechnologyAioBeforeAfter";

export function TechnologyAioModuleBundle() {
  const modules = technologyAioModules;
  return (
    <>
      <TechnologyAioShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TechnologyAioVisibilityChart content={modules.visibility} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <TechnologyAioBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
