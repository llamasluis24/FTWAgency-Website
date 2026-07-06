/**
 * Plain slug lists for next.config redirects (no schema/content imports).
 * Keep in sync with published full-tier locations and all services.
 */
export const PUBLISHED_CITY_SLUGS = [
  "riverside-ca",
  "corona-ca",
  "irvine-ca",
  "anaheim-ca",
  "ontario-ca",
  "rancho-cucamonga-ca",
  "santa-ana-ca",
  "carlsbad-ca",
  "san-diego-ca",
  "los-angeles-ca",
] as const;

export const ALL_SERVICE_SLUGS = [
  "website-design-development",
  "seo",
  "aio",
  "paid-ads-management",
  "google-business-profile",
  "review-reputation-growth",
  "viral-social-media",
  "business-automation",
  "ai-agents",
  "custom-software",
  "mobile-app-development",
] as const;

/** 301 keyword alias: /services/{service}/{city} → canonical location-first URL. */
export function getServiceCityAliasRedirects() {
  return PUBLISHED_CITY_SLUGS.flatMap((city) =>
    ALL_SERVICE_SLUGS.map((service) => ({
      source: `/services/${service}/${city}`,
      destination: `/locations/${city}/${service}`,
      permanent: true as const,
    })),
  );
}
