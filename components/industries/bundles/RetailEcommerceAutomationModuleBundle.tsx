import { retailEcommerceAutomationModules } from "@/content/industries/modules/retail-ecommerce-automation-modules";
import { RetailEcommerceAutomationShowcase } from "@/components/industries/retail-ecommerce/RetailEcommerceAutomationShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { RetailEcommerceAutomationTimeline } from "@/components/industries/retail-ecommerce/RetailEcommerceAutomationTimeline";
import { IndustryTimeSavingsCalculator } from "@/components/industries/shared/IndustryTimeSavingsCalculator";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function RetailEcommerceAutomationModuleBundle() {
  const modules = retailEcommerceAutomationModules;
  return (
    <>
      <RetailEcommerceAutomationShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <RetailEcommerceAutomationTimeline content={modules.timeline} />
      <IndustryTimeSavingsCalculator content={modules.timeSavingsCalculator} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
