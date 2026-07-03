"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "seo": dynamic(
    () => import("@/components/industries/bundles/TechnologySeoModuleBundle").then((m) => m.TechnologySeoModuleBundle),
    { loading, ssr: false },
  ),
  "aio": dynamic(
    () => import("@/components/industries/bundles/TechnologyAioModuleBundle").then((m) => m.TechnologyAioModuleBundle),
    { loading, ssr: false },
  ),
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/TechnologyWebsiteModuleBundle").then((m) => m.TechnologyWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/TechnologyAutomationModuleBundle").then((m) => m.TechnologyAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "viral-social-media": dynamic(
    () => import("@/components/industries/bundles/TechnologySocialModuleBundle").then((m) => m.TechnologySocialModuleBundle),
    { loading, ssr: false },
  ),
};

export function TechnologyIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
