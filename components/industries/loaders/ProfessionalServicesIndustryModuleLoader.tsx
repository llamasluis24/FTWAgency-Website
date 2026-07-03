"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "seo": dynamic(
    () => import("@/components/industries/bundles/ProfessionalServicesSeoModuleBundle").then((m) => m.ProfessionalServicesSeoModuleBundle),
    { loading, ssr: false },
  ),
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/ProfessionalServicesWebsiteModuleBundle").then((m) => m.ProfessionalServicesWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/ProfessionalServicesAutomationModuleBundle").then((m) => m.ProfessionalServicesAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "aio": dynamic(
    () => import("@/components/industries/bundles/ProfessionalServicesAioModuleBundle").then((m) => m.ProfessionalServicesAioModuleBundle),
    { loading, ssr: false },
  ),
  "review-reputation-growth": dynamic(
    () => import("@/components/industries/bundles/ProfessionalServicesReputationModuleBundle").then((m) => m.ProfessionalServicesReputationModuleBundle),
    { loading, ssr: false },
  ),
};

export function ProfessionalServicesIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
