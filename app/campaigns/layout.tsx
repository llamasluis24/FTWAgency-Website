import type { ReactNode } from "react";
import {
  CampaignAttributionInit,
  CampaignTrackingScripts,
} from "@/components/campaigns/CampaignTrackingProvider";

export default function CampaignsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="campaign-page min-h-screen bg-bg bg-grid text-body">
      <CampaignTrackingScripts />
      <CampaignAttributionInit />
      {children}
    </div>
  );
}
