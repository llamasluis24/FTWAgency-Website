import { ServiceSchema, type Service } from "@/lib/schemas";
import { websiteDesignDevelopment } from "./website-design-development";
import { seo } from "./seo";
import { aio } from "./aio";
import { paidAdsManagement } from "./paid-ads-management";
import { googleBusinessProfile } from "./google-business-profile";
import { reviewReputationGrowth } from "./review-reputation-growth";
import { viralSocialMedia } from "./viral-social-media";
import { businessAutomation } from "./business-automation";
import { aiAgents } from "./ai-agents";
import { customSoftware } from "./custom-software";
import { mobileAppDevelopment } from "./mobile-app-development";

export const services: Service[] = [
  websiteDesignDevelopment,
  seo,
  aio,
  paidAdsManagement,
  googleBusinessProfile,
  reviewReputationGrowth,
  viralSocialMedia,
  businessAutomation,
  aiAgents,
  customSoftware,
  mobileAppDevelopment,
].map((s) => ServiceSchema.parse(s));
