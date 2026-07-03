import type {
  CaseStudy,
  Industry,
  Location,
  Project,
  Service,
} from "./schemas";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { projects } from "@/content/portfolio";
import { caseStudies } from "@/content/case-studies";

/**
 * Client-safe collection access (no filesystem): services, industries,
 * locations, portfolio, and case studies are typed local content bundled
 * at build time. Blog access (filesystem) lives in lib/content.ts.
 */

/* ----------------------------- Services ----------------------------- */

export function getAllServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}

export function getServicesByCategory(
  category: Service["category"],
): Service[] {
  return services.filter((s) => s.category === category);
}

/* ---------------------------- Industries ---------------------------- */

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

/* ----------------------------- Locations ---------------------------- */

export function getAllLocations(): Location[] {
  return locations;
}

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/* ----------------------------- Portfolio ---------------------------- */

export function getAllProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByIndustry(industrySlug: string): Project[] {
  return projects.filter((p) => p.industry === industrySlug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.services.includes(serviceSlug));
}

/* ---------------------------- Case studies -------------------------- */

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.featured);
}

export function getCaseStudiesByService(serviceSlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.services.includes(serviceSlug));
}

export function getCaseStudiesByIndustry(industrySlug: string): CaseStudy[] {
  return caseStudies.filter((c) => c.industry === industrySlug);
}

/* ------------------------- Display enrichment ----------------------- */

export interface EnrichedProject {
  project: Project;
  industryLabel: string;
  serviceLabels: string[];
}

/** Resolve display labels server-side so cards stay content-layer-free. */
export function enrichProject(project: Project): EnrichedProject {
  return {
    project,
    industryLabel: getIndustry(project.industry)?.title ?? "",
    serviceLabels: project.services
      .map((slug) => getService(slug)?.shortTitle)
      .filter((s): s is string => Boolean(s)),
  };
}

/* --------------------------- Related content ------------------------ */

export function getRelatedServices(service: Service): Service[] {
  return service.relatedServices
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}

export function getRelatedIndustriesForService(
  serviceSlug: string,
  limit = 4,
): Industry[] {
  return industries
    .filter((i) => i.serviceStack.some((s) => s.service === serviceSlug))
    .slice(0, limit);
}
