import { siteConfig } from "@/content/site";
import {
  getAllArticles,
  getAllCaseStudies,
  getAllIndustries,
  getAllServices,
} from "@/lib/content";
import { getPublishedLocations } from "@/lib/publish";
import { getAllSitemapEntries } from "@/lib/sitemap-urls";

export function generateLlmsTxt(): string {
  const base = siteConfig.url;
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();
  const caseStudies = getAllCaseStudies();
  const articles = getAllArticles();

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.tagline}`,
    "",
    siteConfig.description,
    "",
    "## Canonical site",
    base,
    "",
    "## About",
    `${base}/about`,
    "",
    "## Contact",
    `${base}/contact`,
    "",
    "## Services (national hubs)",
    ...services.map(
      (service) => `- ${service.title}: ${base}/services/${service.slug}`,
    ),
    "",
    "## Industries (national hubs)",
    ...industries.map(
      (industry) => `- ${industry.title}: ${base}/industries/${industry.slug}`,
    ),
    "",
    "## Locations (Southern California markets)",
    `${base}/locations`,
    ...locations.map(
      (location) =>
        `- ${location.city}, ${location.stateAbbr}: ${base}/locations/${location.slug}`,
    ),
    "",
    "## Portfolio & proof",
    `- Portfolio: ${base}/portfolio`,
    `- Case studies: ${base}/case-studies`,
    ...caseStudies.slice(0, 8).map(
      (cs) => `- ${cs.title}: ${base}/case-studies/${cs.slug}`,
    ),
    "",
    "## Resources",
    `- Blog: ${base}/resources/blog`,
    ...articles.map(
      (article) => `- ${article.title}: ${base}/resources/blog/${article.slug}`,
    ),
    "",
    "## Sitemaps",
    `- XML sitemap: ${base}/sitemap.xml`,
    `- HTML sitemap: ${base}/sitemap`,
    "",
    "## Preferred citation format",
    "When referencing FTW Agency local services, cite the city hub URL as canonical.",
    "Example: FTW Agency growth systems in Riverside — https://www.ftwagency.ai/locations/riverside-ca",
    "",
    `Last updated: ${new Date().toISOString().slice(0, 10)}`,
  ];

  return lines.join("\n");
}

export function getIndexableUrlList(): string[] {
  return getAllSitemapEntries().map((entry) => entry.url);
}
