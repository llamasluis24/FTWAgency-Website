"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "google-business-profile": dynamic(
    () => import("@/components/industries/bundles/HomeServicesGbpModuleBundle").then((m) => m.HomeServicesGbpModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/HomeServicesAutomationModuleBundle").then((m) => m.HomeServicesAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "review-reputation-growth": dynamic(
    () => import("@/components/industries/bundles/HomeServicesReputationModuleBundle").then((m) => m.HomeServicesReputationModuleBundle),
    { loading, ssr: false },
  ),
  "seo": dynamic(
    () => import("@/components/industries/bundles/HomeServicesSeoModuleBundle").then((m) => m.HomeServicesSeoModuleBundle),
    { loading, ssr: false },
  ),
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/HomeServicesWebsiteModuleBundle").then((m) => m.HomeServicesWebsiteModuleBundle),
    { loading, ssr: false },
  ),
};

export function HomeServicesIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
