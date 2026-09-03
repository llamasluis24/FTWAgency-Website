import type { CampaignCitySlug } from "./types";

export interface CampaignCityDefinition {
  slug: CampaignCitySlug;
  name: string;
  state: string;
  stateAbbr: string;
  organicLocationSlug?: string;
}

/** SoCal campaign city registry — only configured pages are built at deploy time. */
export const campaignCities: Record<CampaignCitySlug, CampaignCityDefinition> = {
  riverside: {
    slug: "riverside",
    name: "Riverside",
    state: "California",
    stateAbbr: "CA",
    organicLocationSlug: "riverside-ca",
  },
  corona: {
    slug: "corona",
    name: "Corona",
    state: "California",
    stateAbbr: "CA",
    organicLocationSlug: "corona-ca",
  },
  irvine: {
    slug: "irvine",
    name: "Irvine",
    state: "California",
    stateAbbr: "CA",
  },
  anaheim: {
    slug: "anaheim",
    name: "Anaheim",
    state: "California",
    stateAbbr: "CA",
  },
  ontario: {
    slug: "ontario",
    name: "Ontario",
    state: "California",
    stateAbbr: "CA",
    organicLocationSlug: "ontario-ca",
  },
  "rancho-cucamonga": {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    state: "California",
    stateAbbr: "CA",
  },
  "santa-ana": {
    slug: "santa-ana",
    name: "Santa Ana",
    state: "California",
    stateAbbr: "CA",
  },
  carlsbad: {
    slug: "carlsbad",
    name: "Carlsbad",
    state: "California",
    stateAbbr: "CA",
  },
  "san-diego": {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateAbbr: "CA",
  },
  "los-angeles": {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
  },
};

export function getCampaignCity(slug: CampaignCitySlug) {
  return campaignCities[slug];
}
