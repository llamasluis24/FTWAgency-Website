import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import {
  categorySlug,
  getAllArticles,
  getAllCaseStudies,
  getAllIndustries,
  getAllServices,
  getArticleCategories,
} from "@/lib/content";
import {
  getPublishedLocations,
  isLocationHubPublished,
  isLocationIndustryComboPublished,
  isLocationServiceComboPublished,
} from "@/lib/publish";
import { getLocationLastModified } from "@/lib/publish-meta";

export const SITEMAP_SEGMENTS = ["core", "locations", "content"] as const;
export type SitemapSegment = (typeof SITEMAP_SEGMENTS)[number];

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  priority: number,
  lastModified?: string,
): SitemapEntry {
  return {
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly",
    priority,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
  };
}

/** Core site pages, national services, and industries. */
export function buildCoreSitemapEntries(): MetadataRoute.Sitemap {
  const services = getAllServices();
  const industries = getAllIndustries();

  const staticPaths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/industries", priority: 0.9 },
    { path: "/locations", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/resources", priority: 0.7 },
    { path: "/resources/blog", priority: 0.7 },
    { path: "/resources/blog/all", priority: 0.6 },
    { path: "/resources/guides", priority: 0.6 },
    { path: "/resources/academy", priority: 0.6 },
    { path: "/resources/tools", priority: 0.6 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/sitemap", priority: 0.4 },
  ];

  const urls: MetadataRoute.Sitemap = staticPaths.map(({ path, priority }) =>
    entry(path, priority),
  );

  services.forEach((service) => {
    urls.push(entry(`/services/${service.slug}`, 0.9));
  });

  industries.forEach((industry) => {
    urls.push(entry(`/industries/${industry.slug}`, 0.8));
    industry.serviceStack.forEach((item) => {
      urls.push(entry(`/industries/${industry.slug}/${item.service}`, 0.7));
    });
  });

  return urls;
}

/** Location hubs and programmatic local combo pages. */
export function buildLocationsSitemapEntries(): MetadataRoute.Sitemap {
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();
  const urls: MetadataRoute.Sitemap = [];

  locations.filter(isLocationHubPublished).forEach((location) => {
    urls.push(
      entry(`/locations/${location.slug}`, 0.85, getLocationLastModified(location)),
    );

    services
      .filter((service) => isLocationServiceComboPublished(location, service.slug))
      .forEach((service) => {
        urls.push(
          entry(
            `/locations/${location.slug}/${service.slug}`,
            0.7,
            getLocationLastModified(location),
          ),
        );
      });

    industries
      .filter((industry) => isLocationIndustryComboPublished(location, industry.slug))
      .forEach((industry) => {
        urls.push(
          entry(
            `/locations/${location.slug}/industries/${industry.slug}`,
            0.7,
            getLocationLastModified(location),
          ),
        );
      });
  });

  return urls;
}

/** Case studies, blog posts, and blog category archives. */
export function buildContentSitemapEntries(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  getAllCaseStudies().forEach((caseStudy) => {
    urls.push(entry(`/case-studies/${caseStudy.slug}`, 0.6));
  });

  getAllArticles().forEach((article) => {
    urls.push(entry(`/resources/blog/${article.slug}`, 0.6, article.publishedAt));
  });

  getArticleCategories().forEach((category) => {
    urls.push(entry(`/resources/blog/category/${categorySlug(category)}`, 0.5));
  });

  return urls;
}

export function buildSitemapEntries(segment: SitemapSegment): MetadataRoute.Sitemap {
  switch (segment) {
    case "core":
      return buildCoreSitemapEntries();
    case "locations":
      return buildLocationsSitemapEntries();
    case "content":
      return buildContentSitemapEntries();
    default:
      return [];
  }
}

export function getAllSitemapEntries(): MetadataRoute.Sitemap {
  return SITEMAP_SEGMENTS.flatMap((segment) => buildSitemapEntries(segment));
}

export function getSitemapSegmentCounts(): Record<SitemapSegment, number> {
  return {
    core: buildCoreSitemapEntries().length,
    locations: buildLocationsSitemapEntries().length,
    content: buildContentSitemapEntries().length,
  };
}
