import { siteConfig } from "@/content/site";
import type { Article, Faq, Location, Service } from "./schemas";

type JsonLdObject = Record<string, unknown>;

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function localBusinessSchema(location: Location): JsonLdObject {
  const schema: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} — ${location.city}`,
    url: `${siteConfig.url}/locations/${location.slug}`,
    email: siteConfig.email,
    description: location.meta.description,
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
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: location.geo.lat,
      longitude: location.geo.lng,
    };
  }

  return schema;
}

export function serviceSchema(
  service: Service,
  opts?: { industryName?: string; locationName?: string },
): JsonLdObject {
  const nameSuffix = [opts?.industryName, opts?.locationName]
    .filter(Boolean)
    .join(" in ");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nameSuffix ? `${service.title} for ${nameSuffix}` : service.title,
    description: service.meta.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    serviceType: service.title,
  };
}

export function faqSchema(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function articleSchema(article: Article): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/resources/blog/${article.slug}`,
  };
}
