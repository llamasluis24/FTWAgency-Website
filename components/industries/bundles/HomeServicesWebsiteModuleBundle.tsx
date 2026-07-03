import { homeServicesWebsiteModules } from "@/content/industries/modules/home-services-website-modules";
import { HomeServicesWebsiteShowcase } from "@/components/industries/home-services/HomeServicesWebsiteShowcase";
import { IndustryFunnel } from "@/components/industries/shared/IndustryFunnel";
import { IndustryBeforeAfter } from "@/components/industries/shared/IndustryBeforeAfter";

export function HomeServicesWebsiteModuleBundle() {
  const modules = homeServicesWebsiteModules;
  return (
    <>
      <HomeServicesWebsiteShowcase content={modules.showcase} />
      <IndustryFunnel content={modules.funnel} />
      <IndustryBeforeAfter content={modules.beforeAfter} />
    </>
  );
}
