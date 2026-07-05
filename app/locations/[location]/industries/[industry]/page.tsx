import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationIndustryPageView } from "@/components/locations/LocationIndustryPageView";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { locationIndustryGraph } from "@/lib/jsonld-graph";
import { locationIndustryCopy } from "@/lib/combo";
import { getAllIndustries, getIndustry, getLocation } from "@/lib/content";
import {
  getPublishedLocations,
  isLocationIndustryComboPublished,
} from "@/lib/publish";

interface Props {
  params: Promise<{ location: string; industry: string }>;
}

/** Location + Industry combo pages — programmatic SEO surface. */
export function generateStaticParams() {
  return getPublishedLocations().flatMap((location) =>
    getAllIndustries()
      .filter((industry) =>
        isLocationIndustryComboPublished(location, industry.slug),
      )
      .map((industry) => ({
        location: location.slug,
        industry: industry.slug,
      })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: lSlug, industry: iSlug } = await params;
  const location = getLocation(lSlug);
  const industry = getIndustry(iSlug);
  if (!location || !industry) return {};
  const copy = locationIndustryCopy(industry, location);
  return buildMetadata({
    title: copy.meta.title,
    description: copy.meta.description,
    path: `/locations/${location.slug}/industries/${industry.slug}`,
  });
}

export default async function LocationIndustryPage({ params }: Props) {
  const { location: lSlug, industry: iSlug } = await params;
  const location = getLocation(lSlug);
  const industry = getIndustry(iSlug);
  if (!location || !industry) notFound();

  const copy = locationIndustryCopy(industry, location);
  const crumbs = [
    { name: "Locations", path: "/locations" },
    { name: location.city, path: `/locations/${location.slug}` },
    {
      name: industry.title,
      path: `/locations/${location.slug}/industries/${industry.slug}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          locationIndustryGraph(location, industry, crumbs, copy.faqs, copy.meta),
        ]}
      />
      <LocationIndustryPageView location={location} industrySlug={industry.slug} />
    </>
  );
}
