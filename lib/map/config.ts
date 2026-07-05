/** Southern California bounding box for overview maps. */
export const SOCAL_BOUNDS = {
  west: -118.55,
  south: 32.55,
  east: -116.85,
  north: 34.15,
} as const;

/** Mapbox style — dark base aligned with FTW surface language. */
export const MAPBOX_STYLE = "mapbox://styles/mapbox/dark-v11";

export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

export function isMapboxEnabled(): boolean {
  return MAPBOX_TOKEN.length > 0;
}

/** ~15 mile service radius on city hub maps. */
export const CITY_SERVICE_RADIUS_METERS = 24_140;
