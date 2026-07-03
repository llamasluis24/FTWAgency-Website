import { startupsWebsiteModules } from "@/content/industries/modules/startups-website-modules";
import { StartupsWebsiteShowcase } from "@/components/industries/startups/StartupsWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function StartupsWebsiteModuleBundle() {
  const modules = startupsWebsiteModules;
  return (
    <>
      <StartupsWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
