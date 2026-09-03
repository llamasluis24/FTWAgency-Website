import type { Metadata } from "next";
import { RigoDemolitionCaseStudy } from "@/components/case-studies/rigo-demolition/RigoDemolitionCaseStudy";
import { LocationMarketsStrip } from "@/components/locations/LocationMarketsStrip";
import { rigoDemolition } from "@/content/case-studies/rigo-demolition";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: `${rigoDemolition.title} | FTW Agency Case Study`,
  description: rigoDemolition.summary,
  path: `/case-studies/${rigoDemolition.slug}`,
});

export default function RigoDemolitionPage() {
  return (
    <>
      <RigoDemolitionCaseStudy />
      <LocationMarketsStrip
        locationSlugs={rigoDemolition.locations ?? []}
        title="Social Media Growth in *Los Angeles*"
        surface
      />
    </>
  );
}
