import { retailEcommerceSocialModules } from "@/content/industries/modules/retail-ecommerce-social-modules";
import { RetailEcommerceSocialShowcase } from "@/components/industries/retail-ecommerce/RetailEcommerceSocialShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { RetailEcommerceSocialPlatformSpread } from "@/components/industries/retail-ecommerce/RetailEcommerceSocialPlatformSpread";
import { IndustryRoiCalculator } from "@/components/industries/shared/IndustryRoiCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RetailEcommerceSocialModuleBundle() {
  const modules = retailEcommerceSocialModules;
  return (
    <>
      <RetailEcommerceSocialShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <RetailEcommerceSocialPlatformSpread content={modules.platformSpread} />
      <IndustryRoiCalculator content={modules.roiCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
