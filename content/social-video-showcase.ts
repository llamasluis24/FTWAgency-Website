export interface SocialVideoItem {
  title: string;
  /** Short-form context label shown above the title. */
  tag: string;
  src: string;
  poster: string;
}

const BASE = "/showcases/social/videos";

export const socialVideoShowcase = {
  eyebrow: "Featured Reels",
  headline: "Work That *Stops the Scroll*",
  subheadline:
    "Real short-form video we've produced for brands — shot, edited, and built to perform on the feed.",
  items: [
    {
      title: "Rigo Demolition Inc.",
      tag: "Demolition",
      src: `${BASE}/brentwood.mp4`,
      poster: `${BASE}/brentwood.jpg`,
    },
    {
      title: "All Exclusive Construction Inc.",
      tag: "Construction",
      src: `${BASE}/glass-house.mp4`,
      poster: `${BASE}/glass-house.jpg`,
    },
    {
      title: "Rigo Demolition Inc.",
      tag: "Demolition",
      src: `${BASE}/pasadena.mp4`,
      poster: `${BASE}/pasadena.jpg`,
    },
    {
      title: "Clear Cartel Automotive Restyling",
      tag: "Automotive",
      src: `${BASE}/coors.mp4`,
      poster: `${BASE}/coors.jpg`,
    },
  ] satisfies SocialVideoItem[],
} as const;
