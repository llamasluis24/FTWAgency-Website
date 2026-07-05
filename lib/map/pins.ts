import type { Location } from "@/lib/schemas";
import { SOCAL_BOUNDS } from "./config";

export type MapCityPin = {
  slug: string;
  city: string;
  stateAbbr: string;
  county: string;
  metro: string;
  lat: number;
  lng: number;
  href: string;
  intro: string;
  nearbySlugs: string[];
};

export function locationToMapPin(location: Location): MapCityPin {
  return {
    slug: location.slug,
    city: location.city,
    stateAbbr: location.stateAbbr,
    county: location.county,
    metro: location.metro,
    lat: location.geo.lat,
    lng: location.geo.lng,
    href: `/locations/${location.slug}`,
    intro: location.intro,
    nearbySlugs: location.nearbySlugs,
  };
}

export function locationsToMapPins(locations: Location[]): MapCityPin[] {
  return locations.map(locationToMapPin);
}

/** Convert lat/lng to percentage position within SoCal bounds (for static fallback). */
export function geoToPercent(lat: number, lng: number): { x: number; y: number } {
  const x =
    ((lng - SOCAL_BOUNDS.west) / (SOCAL_BOUNDS.east - SOCAL_BOUNDS.west)) * 100;
  const y =
    (1 - (lat - SOCAL_BOUNDS.south) / (SOCAL_BOUNDS.north - SOCAL_BOUNDS.south)) *
    100;
  return {
    x: Math.min(96, Math.max(4, x)),
    y: Math.min(96, Math.max(4, y)),
  };
}

export function getMapPinsForCity(
  allPins: MapCityPin[],
  focusSlug: string,
): { focus: MapCityPin; nearby: MapCityPin[] } | null {
  const focus = allPins.find((pin) => pin.slug === focusSlug);
  if (!focus) return null;

  const nearby = focus.nearbySlugs
    .map((slug) => allPins.find((pin) => pin.slug === slug))
    .filter((pin): pin is MapCityPin => Boolean(pin));

  return { focus, nearby };
}

export function getOverviewBounds(pins: MapCityPin[]): [[number, number], [number, number]] {
  const lngs = pins.map((pin) => pin.lng);
  const lats = pins.map((pin) => pin.lat);
  return [
    [Math.min(...lngs), Math.min(...lats)],
    [Math.max(...lngs), Math.max(...lats)],
  ];
}
