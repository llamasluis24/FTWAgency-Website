"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/StartupsWebsiteModuleBundle").then((m) => m.StartupsWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/StartupsAutomationModuleBundle").then((m) => m.StartupsAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "seo": dynamic(
    () => import("@/components/industries/bundles/StartupsSeoModuleBundle").then((m) => m.StartupsSeoModuleBundle),
    { loading, ssr: false },
  ),
  "aio": dynamic(
    () => import("@/components/industries/bundles/StartupsAioModuleBundle").then((m) => m.StartupsAioModuleBundle),
    { loading, ssr: false },
  ),
  "viral-social-media": dynamic(
    () => import("@/components/industries/bundles/StartupsSocialModuleBundle").then((m) => m.StartupsSocialModuleBundle),
    { loading, ssr: false },
  ),
};

export function StartupsIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
