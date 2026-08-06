export interface LocationHeroImage {
  src: string;
  alt: string;
  /** Iconic landmark or natural feature represented in the hero photo. */
  landmark: string;
}

/** City-specific hero backgrounds keyed by location slug. */
export const locationHeroImages: Record<string, LocationHeroImage> = {
  "riverside-ca": {
    src: "/locations/heroes/riverside-ca.jpg",
    alt: "The Mission Inn Hotel & Spa — Riverside's historic Spanish Revival landmark",
    landmark: "Mission Inn",
  },
  "corona-ca": {
    src: "/locations/heroes/corona-ca.jpg",
    alt: "Santa Ana Mountains panorama above Corona — the natural backdrop to Circle City",
    landmark: "Santa Ana Mountains",
  },
  "irvine-ca": {
    src: "/locations/heroes/irvine-ca.jpg",
    alt: "Great Park balloon rising over Irvine's master-planned skyline",
    landmark: "Orange County Great Park",
  },
  "anaheim-ca": {
    src: "/locations/heroes/anaheim-ca.jpg",
    alt: "Angel Stadium of Anaheim at twilight — home of the Angels and a city icon",
    landmark: "Angel Stadium",
  },
  "ontario-ca": {
    src: "/locations/heroes/ontario-ca.jpg",
    alt: "Cucamonga Peak and the San Gabriel Mountains viewed from Ontario",
    landmark: "Cucamonga Peak",
  },
  "rancho-cucamonga-ca": {
    src: "/locations/heroes/rancho-cucamonga-ca.jpg",
    alt: "Victoria Gardens with the San Gabriel Mountains at sunset",
    landmark: "Victoria Gardens",
  },
  "santa-ana-ca": {
    src: "/locations/heroes/santa-ana-ca.jpg",
    alt: "Old Orange County Courthouse — Santa Ana's Romanesque Revival landmark",
    landmark: "Old Orange County Courthouse",
  },
  "carlsbad-ca": {
    src: "/locations/heroes/carlsbad-ca.jpg",
    alt: "Carlsbad Flower Fields overlooking the Pacific Ocean coastline",
    landmark: "Carlsbad Flower Fields",
  },
  "san-diego-ca": {
    src: "/locations/heroes/san-diego-ca.jpg",
    alt: "San Diego-Coronado Bridge at sunset with the bay and downtown skyline",
    landmark: "Coronado Bridge",
  },
  "los-angeles-ca": {
    src: "/locations/heroes/los-angeles-ca.jpg",
    alt: "Griffith Observatory overlooking the Los Angeles skyline at dusk",
    landmark: "Griffith Observatory",
  },
  "long-beach-ca": {
    src: "/locations/heroes/long-beach-ca.jpg",
    alt: "RMS Queen Mary docked in Long Beach Harbor — the city's iconic ocean liner landmark",
    landmark: "Queen Mary",
  },
  "pasadena-ca": {
    src: "/locations/heroes/pasadena-ca.jpg",
    alt: "Pasadena City Hall — the Spanish Colonial Revival civic landmark of Pasadena",
    landmark: "Pasadena City Hall",
  },
  "fontana-ca": {
    src: "/locations/heroes/fontana-ca.jpg",
    alt: "Fontana with the San Bernardino Mountains rising beyond the Inland Empire corridor",
    landmark: "San Bernardino Mountains",
  },
  "moreno-valley-ca": {
    src: "/locations/heroes/moreno-valley-ca.jpg",
    alt: "Lake Perris State Recreation Area near Moreno Valley — the region's signature reservoir landmark",
    landmark: "Lake Perris",
  },
  "temecula-ca": {
    src: "/locations/heroes/temecula-ca.jpg",
    alt: "Temecula Valley vineyards — wine country rows defining southwest Riverside County",
    landmark: "Temecula Valley Wine Country",
  },
  "huntington-beach-ca": {
    src: "/locations/heroes/huntington-beach-ca.jpg",
    alt: "Huntington Beach Pier stretching into the Pacific — Surf City's defining coastal landmark",
    landmark: "Huntington Beach Pier",
  },
  "oceanside-ca": {
    src: "/locations/heroes/oceanside-ca.jpg",
    alt: "Oceanside Pier from above along the North County San Diego coastline",
    landmark: "Oceanside Pier",
  },
  "chula-vista-ca": {
    src: "/locations/heroes/chula-vista-ca.jpg",
    alt: "Chula Vista Bayfront marina looking across San Diego Bay",
    landmark: "Chula Vista Bayfront",
  },
  "fullerton-ca": {
    src: "/locations/heroes/fullerton-ca.jpg",
    alt: "Plummer Auditorium in Fullerton — the historic Spanish Colonial campus landmark",
    landmark: "Plummer Auditorium",
  },
  "torrance-ca": {
    src: "/locations/heroes/torrance-ca.jpg",
    alt: "Path to Torrance Beach shoreline — the South Bay's local coastal landmark",
    landmark: "Torrance Beach",
  },
};

export function getLocationHeroImage(slug: string): LocationHeroImage | undefined {
  return locationHeroImages[slug];
}
