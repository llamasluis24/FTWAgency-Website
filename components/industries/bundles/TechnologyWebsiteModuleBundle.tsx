import { technologyWebsiteDesignModules } from "@/content/industries/technology-website-design-modules";
import { TechnologyWebsiteShowcase } from "@/components/industries/technology/TechnologyWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { TechnologyBeforeAfter } from "@/components/industries/technology/TechnologyBeforeAfter";

export function TechnologyWebsiteModuleBundle() {
  const modules = technologyWebsiteDesignModules;
  return (
    <>
      <TechnologyWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <TechnologyBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
