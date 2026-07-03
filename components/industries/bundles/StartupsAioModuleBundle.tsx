import { startupsAioModules } from "@/content/industries/modules/startups-aio-modules";
import { StartupsAioShowcase } from "@/components/industries/startups/StartupsAioShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { StartupsAioVisibilityChart } from "@/components/industries/startups/StartupsAioVisibilityChart";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function StartupsAioModuleBundle() {
  const modules = startupsAioModules;
  return (
    <>
      <StartupsAioShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <StartupsAioVisibilityChart content={modules.visibility} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
