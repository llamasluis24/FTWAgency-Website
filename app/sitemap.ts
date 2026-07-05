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
  isLocationIndustryComboPublished,
  isLocationHubPublished,
  isLocationServiceComboPublished,
} from "@/lib/publish";

/** Dynamic sitemap: derives every URL from the content collections. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();

  const staticPaths = [
    "",
    "/services",
    "/industries",
    "/locations",
    "/portfolio",
    "/case-studies",
    "/resources",
    "/resources/blog",
    "/resources/blog/all",
    "/resources/guides",
    "/resources/academy",
    "/resources/tools",
    "/about",
    "/contact",
  ];

  const urls: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const add = (path: string, priority = 0.7) =>
    urls.push({ url: `${base}${path}`, changeFrequency: "weekly", priority });

  services.forEach((s) => add(`/services/${s.slug}`, 0.9));
  industries.forEach((i) => add(`/industries/${i.slug}`, 0.8));

  locations.filter(isLocationHubPublished).forEach((l) => add(`/locations/${l.slug}`, 0.8));

  industries.forEach((industry) =>
    industry.serviceStack.forEach((item) =>
      add(`/industries/${industry.slug}/${item.service}`, 0.7),
    ),
  );

  locations.forEach((location) => {
    services
      .filter((s) => isLocationServiceComboPublished(location, s.slug))
      .forEach((s) => add(`/locations/${location.slug}/${s.slug}`, 0.7));
    industries
      .filter((i) => isLocationIndustryComboPublished(location, i.slug))
      .forEach((i) => add(`/locations/${location.slug}/industries/${i.slug}`, 0.7));
  });

  getAllCaseStudies().forEach((c) => add(`/case-studies/${c.slug}`, 0.6));
  getAllArticles().forEach((a) => add(`/resources/blog/${a.slug}`, 0.6));
  getArticleCategories().forEach((c) =>
    add(`/resources/blog/category/${categorySlug(c)}`, 0.5),
  );

  return urls;
}
