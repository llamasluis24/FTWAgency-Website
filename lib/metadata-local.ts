import type { Industry, Location, Service } from "./schemas";

export function buildLocationHubMetadata(location: Location) {
  return {
    title: `${location.city} Marketing Agency & Growth Systems | FTW Agency`,
    description: `FTW Agency helps ${location.city} businesses generate leads, automate operations, and scale — local SEO, websites, automation, and software for ${location.metro}.`,
  };
}

export function buildLocationServiceMetadata(service: Service, location: Location) {
  return {
    title: `${service.shortTitle} in ${location.city}, ${location.stateAbbr} | FTW Agency`,
    description: `${service.title} for ${location.city} businesses. ${service.excerpt} Local market expertise across ${location.county}.`,
  };
}

export function buildLocationIndustryMetadata(industry: Industry, location: Location) {
  return {
    title: `${industry.title} Marketing in ${location.city}, ${location.stateAbbr} | FTW Agency`,
    description: `Growth systems for ${industry.title.toLowerCase()} businesses in ${location.city}: ${industry.excerpt.charAt(0).toLowerCase()}${industry.excerpt.slice(1)}`,
  };
}
