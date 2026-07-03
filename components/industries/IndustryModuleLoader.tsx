"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const loading = () => <div className="min-h-[240px] bg-surface" aria-hidden />;

/** Lazy-load only the current industry's bundle map — avoids registering 50+ chunks upfront. */
const industryLoaders: Record<string, ComponentType<{ serviceSlug: string }>> = {
  "technology": dynamic(
    () => import("./loaders/TechnologyIndustryModuleLoader").then((m) => m.TechnologyIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "home-services": dynamic(
    () => import("./loaders/HomeServicesIndustryModuleLoader").then((m) => m.HomeServicesIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "transportation-logistics": dynamic(
    () => import("./loaders/TransportationLogisticsIndustryModuleLoader").then((m) => m.TransportationLogisticsIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "construction": dynamic(
    () => import("./loaders/ConstructionIndustryModuleLoader").then((m) => m.ConstructionIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "retail-ecommerce": dynamic(
    () => import("./loaders/RetailEcommerceIndustryModuleLoader").then((m) => m.RetailEcommerceIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "healthcare": dynamic(
    () => import("./loaders/HealthcareIndustryModuleLoader").then((m) => m.HealthcareIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "manufacturing": dynamic(
    () => import("./loaders/ManufacturingIndustryModuleLoader").then((m) => m.ManufacturingIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "restaurants-hospitality": dynamic(
    () => import("./loaders/RestaurantsHospitalityIndustryModuleLoader").then((m) => m.RestaurantsHospitalityIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "professional-services": dynamic(
    () => import("./loaders/ProfessionalServicesIndustryModuleLoader").then((m) => m.ProfessionalServicesIndustryModuleLoader),
    { loading, ssr: false },
  ),
  "startups": dynamic(
    () => import("./loaders/StartupsIndustryModuleLoader").then((m) => m.StartupsIndustryModuleLoader),
    { loading, ssr: false },
  ),
};

interface IndustryModuleLoaderProps {
  industrySlug: string;
  serviceSlug: string;
}

export function IndustryModuleLoader({ industrySlug, serviceSlug }: IndustryModuleLoaderProps) {
  const Loader = industryLoaders[industrySlug];
  if (!Loader) return null;
  return <Loader serviceSlug={serviceSlug} />;
}
