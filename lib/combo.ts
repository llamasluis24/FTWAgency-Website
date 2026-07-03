import type { Faq, Industry, Location, Service } from "./schemas";

/**
 * Programmatic SEO copy-merge: generates page-level copy for combo pages
 * (industry+service, location+service, location+industry) from collection
 * entries — no per-page authoring required, no thin duplicate copy.
 */

export function industryServiceCopy(service: Service, industry: Industry) {
  return {
    headline: `${service.shortTitle} for *${industry.title}*`,
    sub: `${service.excerpt} Built around how ${industry.title.toLowerCase()} customers search, decide, and buy.`,
    intro: `${industry.growthSystem.description}`,
    reason:
      industry.serviceStack.find((s) => s.service === service.slug)?.reason ??
      `${service.shortTitle} is a core component of the growth system we deploy for ${industry.title.toLowerCase()} businesses.`,
    faqs: mergeFaqs(service.faqs, industry.faqs),
    meta: {
      title: `${service.shortTitle} for ${industry.title} | FTW Agency`,
      description: `${service.shortTitle} engineered for ${industry.title.toLowerCase()} businesses: ${service.meta.description.charAt(0).toLowerCase()}${service.meta.description.slice(1)}`,
    },
  };
}

export function locationServiceCopy(service: Service, location: Location) {
  return {
    headline: `${service.shortTitle} in *${location.city}*, ${location.stateAbbr}`,
    sub: `${service.excerpt} Delivered with on-the-ground knowledge of the ${location.city} market.`,
    intro: location.intro,
    faqs: mergeFaqs(service.faqs, location.faqs),
    meta: {
      title: `${service.shortTitle} in ${location.city}, ${location.stateAbbr} | FTW Agency`,
      description: `${service.title} for ${location.city} businesses. ${service.excerpt}`,
    },
  };
}

export function locationIndustryCopy(industry: Industry, location: Location) {
  return {
    headline: `${industry.title} Growth Systems in *${location.city}*`,
    sub: `${industry.heroSub} Tuned for the ${location.city} market.`,
    intro: location.intro,
    faqs: mergeFaqs(industry.faqs, location.faqs),
    meta: {
      title: `${industry.title} Marketing in ${location.city}, ${location.stateAbbr} | FTW Agency`,
      description: `Growth systems for ${industry.title.toLowerCase()} businesses in ${location.city}: ${industry.excerpt.charAt(0).toLowerCase()}${industry.excerpt.slice(1)}`,
    },
  };
}

function mergeFaqs(primary: Faq[], secondary: Faq[]): Faq[] {
  return [...primary.slice(0, 3), ...secondary.slice(0, 2)];
}
