"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "review-reputation-growth": dynamic(
    () => import("@/components/industries/bundles/HealthcareReputationModuleBundle").then((m) => m.HealthcareReputationModuleBundle),
    { loading, ssr: false },
  ),
  "seo": dynamic(
    () => import("@/components/industries/bundles/HealthcareSeoModuleBundle").then((m) => m.HealthcareSeoModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/HealthcareAutomationModuleBundle").then((m) => m.HealthcareAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/HealthcareWebsiteModuleBundle").then((m) => m.HealthcareWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "paid-ads-management": dynamic(
    () => import("@/components/industries/bundles/HealthcarePaidAdsModuleBundle").then((m) => m.HealthcarePaidAdsModuleBundle),
    { loading, ssr: false },
  ),
};

export function HealthcareIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
