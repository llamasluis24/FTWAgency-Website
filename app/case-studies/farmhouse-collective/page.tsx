import type { Metadata } from "next";
import { FarmHouseCollectiveCaseStudy } from "@/components/case-studies/farmhouse-collective/FarmHouseCollectiveCaseStudy";
import { LocationMarketsStrip } from "@/components/locations/LocationMarketsStrip";
import { farmhouseCollective } from "@/content/case-studies/farmhouse-collective";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${farmhouseCollective.title} | FTW Agency Case Study`,
  description: farmhouseCollective.summary,
  path: `/case-studies/${farmhouseCollective.slug}`,
});

export default function FarmHouseCollectivePage() {
  return (
    <>
      <FarmHouseCollectiveCaseStudy />
      <LocationMarketsStrip
        locationSlugs={farmhouseCollective.locations ?? []}
        title="Growth Systems in *This Market*"
        surface
      />
    </>
  );
}
