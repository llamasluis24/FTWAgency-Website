"use client";

import { useEffect } from "react";
import { fireCampaignPageView } from "@/lib/campaigns/conversions";
import type { CampaignChromePage } from "@/content/campaigns/website-design-showcase";

export function CampaignPageViewTracker({ page }: { page: CampaignChromePage }) {
  useEffect(() => {
    fireCampaignPageView({
      campaignName: page.trackingCampaignName,
      service: page.service,
      city: page.city,
      variant: page.experimentVariant,
      pagePath: page.path,
    });
  }, [page]);

  return null;
}
