import { retailEcommerceWebsiteModules } from "@/content/industries/modules/retail-ecommerce-website-modules";
import { RetailEcommerceWebsiteShowcase } from "@/components/industries/retail-ecommerce/RetailEcommerceWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RetailEcommerceWebsiteModuleBundle() {
  const modules = retailEcommerceWebsiteModules;
  return (
    <>
      <RetailEcommerceWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
