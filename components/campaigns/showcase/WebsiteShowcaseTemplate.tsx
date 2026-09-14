import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignLeadForm } from "@/components/campaigns/CampaignLeadForm";
import { CampaignFinalCTA } from "@/components/campaigns/CampaignFinalCTA";
import { CampaignStickyCTA } from "@/components/campaigns/CampaignStickyCTA";
import { CampaignFooter } from "@/components/campaigns/CampaignFooter";
import { CampaignPageViewTracker } from "@/components/campaigns/CampaignPageViewTracker";
import { WebsiteShowcaseHero } from "./WebsiteShowcaseHero";
import { WebsiteValueCompare } from "./WebsiteValueCompare";
import { WebsiteGrowthSystemScroll } from "./WebsiteGrowthSystemScroll";
import { WebsiteGrowthPillars } from "./WebsiteGrowthPillars";
import { WebsiteAioAdvantage } from "./WebsiteAioAdvantage";
import { CampaignInteractivityDemos } from "./CampaignInteractivityDemos";
import { CampaignWebsiteGallery } from "./CampaignWebsiteGallery";
import { WebsiteWhyItMatters } from "./WebsiteWhyItMatters";
import { WebsiteCampaignProcess } from "./WebsiteCampaignProcess";
import { WebsiteCampaignFaq } from "./WebsiteCampaignFaq";
import {
  toCampaignChrome,
  type WebsiteShowcaseConfig,
} from "@/content/campaigns/website-design-showcase";

export function WebsiteShowcaseTemplate({ config }: { config: WebsiteShowcaseConfig }) {
  const chrome = toCampaignChrome(config);

  return (
    <main>
      <CampaignPageViewTracker page={chrome} />
      <CampaignHeader page={chrome} />
      <WebsiteShowcaseHero config={config} />
      <WebsiteValueCompare />
      <WebsiteGrowthSystemScroll config={config} />
      <WebsiteGrowthPillars pillars={config.pillars} />
      <WebsiteAioAdvantage
        section={config.aioSection}
        trackingCampaignName={config.trackingCampaignName}
        pagePath={config.path}
      />
      <CampaignInteractivityDemos />
      <CampaignWebsiteGallery slugs={config.gallerySlugs} />
      <WebsiteWhyItMatters />
      <WebsiteCampaignProcess steps={config.processSteps} />
      <WebsiteCampaignFaq faq={config.faq} />
      <CampaignLeadForm page={chrome} />
      <CampaignFinalCTA page={chrome} />
      <CampaignStickyCTA page={chrome} />
      <CampaignFooter />
    </main>
  );
}
