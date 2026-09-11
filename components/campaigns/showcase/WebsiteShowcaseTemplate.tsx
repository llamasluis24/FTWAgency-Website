import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignLeadForm } from "@/components/campaigns/CampaignLeadForm";
import { CampaignFinalCTA } from "@/components/campaigns/CampaignFinalCTA";
import { CampaignStickyCTA } from "@/components/campaigns/CampaignStickyCTA";
import { CampaignFooter } from "@/components/campaigns/CampaignFooter";
import { CampaignPageViewTracker } from "@/components/campaigns/CampaignPageViewTracker";
import { WebsiteShowcaseHero } from "./WebsiteShowcaseHero";
import { CampaignGsapStory } from "./CampaignGsapStory";
import { CampaignInteractivityDemos } from "./CampaignInteractivityDemos";
import { CampaignWebsiteGallery } from "./CampaignWebsiteGallery";
import {
  toCampaignChrome,
  type WebsiteShowcaseConfig,
} from "@/content/campaigns/website-design-showcase";
import { getPublishedLocations } from "@/lib/publish";
import { locationsToMapPins } from "@/lib/map/pins";

export function WebsiteShowcaseTemplate({ config }: { config: WebsiteShowcaseConfig }) {
  const chrome = toCampaignChrome(config);
  const mapPins = locationsToMapPins(getPublishedLocations());

  return (
    <main>
      <CampaignPageViewTracker page={chrome} />
      <CampaignHeader page={chrome} />
      <WebsiteShowcaseHero config={config} />
      <CampaignGsapStory config={config} />
      <CampaignInteractivityDemos mapPins={mapPins} />
      <CampaignWebsiteGallery slugs={config.gallerySlugs} />
      <CampaignLeadForm page={chrome} />
      <CampaignFinalCTA page={chrome} />
      <CampaignStickyCTA page={chrome} />
      <CampaignFooter />
    </main>
  );
}
