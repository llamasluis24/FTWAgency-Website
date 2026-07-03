"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "google-business-profile": dynamic(
    () => import("@/components/industries/bundles/RestaurantsHospitalityGbpModuleBundle").then((m) => m.RestaurantsHospitalityGbpModuleBundle),
    { loading, ssr: false },
  ),
  "review-reputation-growth": dynamic(
    () => import("@/components/industries/bundles/RestaurantsHospitalityReputationModuleBundle").then((m) => m.RestaurantsHospitalityReputationModuleBundle),
    { loading, ssr: false },
  ),
  "viral-social-media": dynamic(
    () => import("@/components/industries/bundles/RestaurantsHospitalitySocialModuleBundle").then((m) => m.RestaurantsHospitalitySocialModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/RestaurantsHospitalityAutomationModuleBundle").then((m) => m.RestaurantsHospitalityAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "mobile-app-development": dynamic(
    () => import("@/components/industries/bundles/RestaurantsHospitalityMobileAppModuleBundle").then((m) => m.RestaurantsHospitalityMobileAppModuleBundle),
    { loading, ssr: false },
  ),
};

export function RestaurantsHospitalityIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
