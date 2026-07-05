import {
  getAllCaseStudies,
  getAllProjects,
  getLocation,
} from "./collections";
import { getAllArticles } from "./content";
import type { Article, CaseStudy, Location, Project } from "./schemas";
import { getPublishedLocations } from "./publish";

export function getLocationsBySlugs(slugs: string[]): Location[] {
  return slugs
    .map((slug) => getLocation(slug))
    .filter((l): l is Location => Boolean(l));
}

export function getLocationsForCaseStudy(caseStudy: CaseStudy): Location[] {
  if (!caseStudy.locations?.length) return [];
  return getLocationsBySlugs(caseStudy.locations);
}

export function getLocationsForArticle(article: Article): Location[] {
  if (article.locations?.length) {
    return getLocationsBySlugs(article.locations);
  }
  return [];
}

export function getNearbyLocations(slug: string): Location[] {
  const location = getLocation(slug);
  if (!location) return [];
  return location.nearbySlugs
    .map((s) => getLocation(s))
    .filter((l): l is Location => Boolean(l));
}

export function getCaseStudiesByLocation(slug: string, limit = 3): CaseStudy[] {
  const location = getLocation(slug);
  if (!location) return [];

  const featured = location.featuredCaseStudies
    .map((s) => getAllCaseStudies().find((c) => c.slug === s))
    .filter((c): c is CaseStudy => Boolean(c));

  const tagged = getAllCaseStudies().filter(
    (c) => c.locations?.includes(slug) && !featured.some((f) => f.slug === c.slug),
  );

  return [...featured, ...tagged].slice(0, limit);
}

export function getProjectsByLocation(slug: string, limit = 3): Project[] {
  const location = getLocation(slug);
  if (!location) return [];

  return location.featuredProjects
    .map((s) => getAllProjects().find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p))
    .slice(0, limit);
}

export function getArticlesByLocation(slug: string, limit = 3): Article[] {
  const location = getLocation(slug);
  if (!location) return [];

  const featured = location.featuredArticles
    .map((s) => getAllArticles().find((a) => a.slug === s))
    .filter((a): a is Article => Boolean(a));

  const tagged = getAllArticles().filter(
    (a) =>
      a.locations?.includes(slug) &&
      !featured.some((f) => f.slug === a.slug),
  );

  return [...featured, ...tagged].slice(0, limit);
}

export function getTopPublishedLocations(limit = 4): Location[] {
  return getPublishedLocations().slice(0, limit);
}
