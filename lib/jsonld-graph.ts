import { siteConfig } from "@/content/site";
import type { Crumb } from "@/components/layout/Breadcrumbs";
import type { Faq, Industry, Location, Service } from "./schemas";

type JsonLdNode = Record<string, unknown>;

const ORG_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

function fullCrumbs(crumbs: Crumb[]): Crumb[] {
  return [{ name: "Home", path: "/" }, ...crumbs];
}

function breadcrumbNode(pageUrl: string, crumbs: Crumb[]): JsonLdNode {
  const items = fullCrumbs(crumbs);
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

function faqNode(pageUrl: string, faqs: Faq[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function localBusinessNode(location: Location, pageUrl: string): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "LocalBusiness",
    "@id": `${pageUrl}#localbusiness`,
    name: `${siteConfig.name} — ${location.city}`,
    url: pageUrl,
    email: siteConfig.email,
    description: location.meta.description,
    parentOrganization: { "@id": ORG_ID },
    areaServed: location.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, ${location.stateAbbr}`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.stateAbbr,
      addressCountry: "US",
    },
  };

  if (location.geo) {
    node.geo = {
      "@type": "GeoCoordinates",
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    };
  }

  return node;
}

function webPageNode(
  pageUrl: string,
  name: string,
  description: string,
  aboutId: string,
): JsonLdNode {
  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": aboutId },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    publisher: { "@id": ORG_ID },
  };
}

function serviceNode(
  service: Service,
  pageUrl: string,
  location: Location,
): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${service.title} in ${location.city}, ${location.stateAbbr}`,
    description: service.meta.description,
    serviceType: service.title,
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: location.state,
      },
    },
    provider: { "@id": `${pageUrl}#localbusiness` },
  };
}

function buildGraph(nodes: JsonLdNode[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": ORG_ID },
      },
      ...nodes,
    ],
  };
}

export function locationHubGraph(
  location: Location,
  crumbs: Crumb[],
  faqs: Faq[],
): JsonLdNode {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}`;
  const businessId = `${pageUrl}#localbusiness`;

  return buildGraph([
    webPageNode(pageUrl, location.meta.title, location.meta.description, businessId),
    localBusinessNode(location, pageUrl),
    breadcrumbNode(pageUrl, crumbs),
    ...(faqs.length > 0 ? [faqNode(pageUrl, faqs)] : []),
  ]);
}

export function locationServiceGraph(
  location: Location,
  service: Service,
  crumbs: Crumb[],
  faqs: Faq[],
  meta: { title: string; description: string },
): JsonLdNode {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}/${service.slug}`;
  const businessId = `${pageUrl}#localbusiness`;

  return buildGraph([
    webPageNode(pageUrl, meta.title, meta.description, businessId),
    localBusinessNode(location, `${siteConfig.url}/locations/${location.slug}`),
    serviceNode(service, pageUrl, location),
    breadcrumbNode(pageUrl, crumbs),
    ...(faqs.length > 0 ? [faqNode(pageUrl, faqs)] : []),
  ]);
}

export function locationIndustryGraph(
  location: Location,
  industry: Industry,
  crumbs: Crumb[],
  faqs: Faq[],
  meta: { title: string; description: string },
): JsonLdNode {
  const pageUrl = `${siteConfig.url}/locations/${location.slug}/industries/${industry.slug}`;
  const businessId = `${pageUrl}#localbusiness`;

  return buildGraph([
    webPageNode(pageUrl, meta.title, meta.description, businessId),
    localBusinessNode(location, `${siteConfig.url}/locations/${location.slug}`),
    {
      "@type": "ProfessionalService",
      "@id": `${pageUrl}#service`,
      name: `${industry.title} marketing in ${location.city}, ${location.stateAbbr}`,
      description: industry.excerpt,
      areaServed: { "@type": "City", name: location.city },
      provider: { "@id": `${siteConfig.url}/locations/${location.slug}#localbusiness` },
    },
    breadcrumbNode(pageUrl, crumbs),
    ...(faqs.length > 0 ? [faqNode(pageUrl, faqs)] : []),
  ]);
}
