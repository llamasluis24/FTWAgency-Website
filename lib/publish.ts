import type { Location } from "./schemas";
import { getAllIndustries, getAllLocations, getAllServices } from "./collections";
import type { PublishTierSummary } from "./publish-meta";

/** Tier-1 service combos when publish.status === "tier1". */
export const TIER1_SERVICE_SLUGS = [
  "seo",
  "website-design-development",
  "google-business-profile",
  "business-automation",
] as const;

/** Tier-1 industry combos when publish.status === "tier1". */
export const TIER1_INDUSTRY_SLUGS = [
  "home-services",
  "healthcare",
  "construction",
] as const;

export function isLocationHubPublished(location: Location): boolean {
  return location.publish.status !== "draft";
}

export function isLocationServiceComboPublished(
  location: Location,
  serviceSlug: string,
): boolean {
  const { status } = location.publish;
  if (status === "draft" || status === "hub") return false;
  if (status === "full") return true;
  return TIER1_SERVICE_SLUGS.includes(
    serviceSlug as (typeof TIER1_SERVICE_SLUGS)[number],
  );
}

export function isLocationIndustryComboPublished(
  location: Location,
  industrySlug: string,
): boolean {
  const { status } = location.publish;
  if (status === "draft" || status === "hub") return false;
  if (status === "full") return true;
  return TIER1_INDUSTRY_SLUGS.includes(
    industrySlug as (typeof TIER1_INDUSTRY_SLUGS)[number],
  );
}

export function getPublishedLocations(): Location[] {
  return getAllLocations().filter(isLocationHubPublished);
}

export function getPublishTierSummaries(): PublishTierSummary[] {
  const services = getAllServices();
  const industries = getAllIndustries();

  return getAllLocations().map((location) => {
    const serviceCombos = services.filter((service) =>
      isLocationServiceComboPublished(location, service.slug),
    ).length;
    const industryCombos = industries.filter((industry) =>
      isLocationIndustryComboPublished(location, industry.slug),
    ).length;

    return {
      slug: location.slug,
      city: location.city,
      status: location.publish.status,
      hubLive: isLocationHubPublished(location),
      serviceCombos,
      industryCombos,
      totalCombos: serviceCombos + industryCombos,
    };
  });
}
