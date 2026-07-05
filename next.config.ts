import type { NextConfig } from "next";

const LEGACY_LOCATION_SLUGS = ["riverside", "corona", "irvine"] as const;

const legacyLocationRedirects = LEGACY_LOCATION_SLUGS.flatMap((slug) => [
  {
    source: `/locations/${slug}`,
    destination: `/locations/${slug}-ca`,
    permanent: true,
  },
  {
    source: `/locations/${slug}/:path*`,
    destination: `/locations/${slug}-ca/:path*`,
    permanent: true,
  },
]);

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      ...legacyLocationRedirects,
      {
        source: "/services/google-ads",
        destination: "/services/paid-ads-management",
        permanent: true,
      },
      {
        source: "/locations/:location/google-ads",
        destination: "/locations/:location/paid-ads-management",
        permanent: true,
      },
      {
        source: "/locations/:location/google-ads/:industry",
        destination: "/locations/:location/paid-ads-management/:industry",
        permanent: true,
      },
      {
        source: "/services/custom-software-solutions",
        destination: "/services/custom-software",
        permanent: true,
      },
      {
        source: "/case-studies/summit-hvac-lead-engine",
        destination: "/case-studies/mobilehomecrm-cal-star",
        permanent: true,
      },
      {
        source: "/case-studies/ironline-estimating-transformation",
        destination: "/case-studies/farmhouse-collective",
        permanent: true,
      },
      {
        source: "/case-studies/lakeside-patient-growth",
        destination: "/case-studies/visit-riverside",
        permanent: true,
      },
      {
        source: "/case-studies/clearpath-demand-engine",
        destination: "/case-studies/vertex-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
