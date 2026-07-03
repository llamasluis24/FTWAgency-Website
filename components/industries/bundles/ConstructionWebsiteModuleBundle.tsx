import { constructionWebsiteModules } from "@/content/industries/modules/construction-website-modules";
import { ConstructionWebsiteShowcase } from "@/components/industries/construction/ConstructionWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ConstructionWebsiteModuleBundle() {
  const modules = constructionWebsiteModules;
  return (
    <>
      <ConstructionWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
