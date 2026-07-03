import { manufacturingWebsiteModules } from "@/content/industries/modules/manufacturing-website-modules";
import { ManufacturingWebsiteShowcase } from "@/components/industries/manufacturing/ManufacturingWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function ManufacturingWebsiteModuleBundle() {
  const modules = manufacturingWebsiteModules;
  return (
    <>
      <ManufacturingWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
