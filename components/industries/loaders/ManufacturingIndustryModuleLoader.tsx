"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "seo": dynamic(
    () => import("@/components/industries/bundles/ManufacturingSeoModuleBundle").then((m) => m.ManufacturingSeoModuleBundle),
    { loading, ssr: false },
  ),
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/ManufacturingWebsiteModuleBundle").then((m) => m.ManufacturingWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "custom-software": dynamic(
    () => import("@/components/industries/bundles/ManufacturingCustomSoftwareModuleBundle").then((m) => m.ManufacturingCustomSoftwareModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/ManufacturingAutomationModuleBundle").then((m) => m.ManufacturingAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "paid-ads-management": dynamic(
    () => import("@/components/industries/bundles/ManufacturingPaidAdsModuleBundle").then((m) => m.ManufacturingPaidAdsModuleBundle),
    { loading, ssr: false },
  ),
};

export function ManufacturingIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
