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
      title: "Brentwood",
      tag: "Real Estate",
      src: `${BASE}/brentwood.mp4`,
      poster: `${BASE}/brentwood.jpg`,
    },
    {
      title: "Glass House",
      tag: "Real Estate",
      src: `${BASE}/glass-house.mp4`,
      poster: `${BASE}/glass-house.jpg`,
    },
    {
      title: "Pasadena",
      tag: "Real Estate",
      src: `${BASE}/pasadena.mp4`,
      poster: `${BASE}/pasadena.jpg`,
    },
    {
      title: "Coors",
      tag: "Brand",
      src: `${BASE}/coors.mp4`,
      poster: `${BASE}/coors.jpg`,
    },
  ] satisfies SocialVideoItem[],
} as const;
