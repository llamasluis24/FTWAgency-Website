"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "seo": dynamic(
    () => import("@/components/industries/bundles/TransportationLogisticsSeoModuleBundle").then((m) => m.TransportationLogisticsSeoModuleBundle),
    { loading, ssr: false },
  ),
  "custom-software": dynamic(
    () => import("@/components/industries/bundles/TransportationLogisticsCustomSoftwareModuleBundle").then((m) => m.TransportationLogisticsCustomSoftwareModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/TransportationLogisticsAutomationModuleBundle").then((m) => m.TransportationLogisticsAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "paid-ads-management": dynamic(
    () => import("@/components/industries/bundles/TransportationLogisticsPaidAdsModuleBundle").then((m) => m.TransportationLogisticsPaidAdsModuleBundle),
    { loading, ssr: false },
  ),
  "mobile-app-development": dynamic(
    () => import("@/components/industries/bundles/TransportationLogisticsMobileAppModuleBundle").then((m) => m.TransportationLogisticsMobileAppModuleBundle),
    { loading, ssr: false },
  ),
};

export function TransportationLogisticsIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
