"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

const bundles: Record<string, ComponentType> = {
  "website-design-development": dynamic(
    () => import("@/components/industries/bundles/RetailEcommerceWebsiteModuleBundle").then((m) => m.RetailEcommerceWebsiteModuleBundle),
    { loading, ssr: false },
  ),
  "seo": dynamic(
    () => import("@/components/industries/bundles/RetailEcommerceSeoModuleBundle").then((m) => m.RetailEcommerceSeoModuleBundle),
    { loading, ssr: false },
  ),
  "business-automation": dynamic(
    () => import("@/components/industries/bundles/RetailEcommerceAutomationModuleBundle").then((m) => m.RetailEcommerceAutomationModuleBundle),
    { loading, ssr: false },
  ),
  "paid-ads-management": dynamic(
    () => import("@/components/industries/bundles/RetailEcommercePaidAdsModuleBundle").then((m) => m.RetailEcommercePaidAdsModuleBundle),
    { loading, ssr: false },
  ),
  "viral-social-media": dynamic(
    () => import("@/components/industries/bundles/RetailEcommerceSocialModuleBundle").then((m) => m.RetailEcommerceSocialModuleBundle),
    { loading, ssr: false },
  ),
};

export function RetailEcommerceIndustryModuleLoader({ serviceSlug }: { serviceSlug: string }) {
  const Bundle = bundles[serviceSlug];
  if (!Bundle) return null;
  return <Bundle />;
}
