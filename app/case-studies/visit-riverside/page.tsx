import type { Metadata } from "next";
import { VisitRiversideCaseStudy } from "@/components/case-studies/visit-riverside/VisitRiversideCaseStudy";
import { LocationMarketsStrip } from "@/components/locations/LocationMarketsStrip";
import { visitRiverside } from "@/content/case-studies/visit-riverside";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Visit Riverside Case Study | FTW Agency",
  description:
    "How FTW Agency built Visit Riverside as a destination discovery platform for restaurants, events, attractions, local businesses, and community experiences.",
  path: `/case-studies/${visitRiverside.slug}`,
});

export default function VisitRiversidePage() {
  return (
    <>
      <VisitRiversideCaseStudy />
      <LocationMarketsStrip
        locationSlugs={visitRiverside.locations ?? []}
        title="Growth Systems in *This Market*"
        surface
      />
    </>
  );
}
