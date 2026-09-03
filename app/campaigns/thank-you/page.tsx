import type { Metadata } from "next";
import { Suspense } from "react";
import { buildThankYouMetadata } from "@/lib/campaigns/metadata";
import { CampaignThankYouClient } from "./CampaignThankYouClient";

export const metadata: Metadata = buildThankYouMetadata();

export default function CampaignThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
      <CampaignThankYouClient />
    </Suspense>
  );
}
