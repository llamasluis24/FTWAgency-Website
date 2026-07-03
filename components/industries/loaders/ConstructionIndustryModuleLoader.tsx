"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/ConstructionWebsiteModuleBundle").then((m) => m.ConstructionWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "custom-software": dynamic(
    () => import("@/components/industries/bundles/ConstructionCustomSoftwareModuleBundle").then((m) => m.ConstructionCustomSoftwareModuleBundle),
    { loading, ssr: false },
  ),
  "seo": dynamic(
    () => import("@/components/industries/bundles/ConstructionSeoModuleBundle").then((m) => m.ConstructionSeoModuleBundle),
    { loading, ssr: false },
  ),
  "mobile-app-development": dynamic(
    () => import("@/components/industries/bundles/ConstructionMobileAppModuleBundle").then((m) => m.ConstructionMobileAppModuleBundle),
    { loading, ssr: false },
  ),
  "review-reputation-growth": dynamic(
    () => import("@/components/industries/bundles/ConstructionReputationModuleBundle").then((m) => m.ConstructionReputationModuleBundle),
    { loading, ssr: false },
  ),
};

export function ConstructionIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
