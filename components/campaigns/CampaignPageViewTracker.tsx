"use client";

import { useEffect } from "react";
import { fireCampaignPageView } from "@/lib/campaigns/conversions";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function CampaignPageViewTracker({ page }: { page: ResolvedCampaignPage }) {
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
