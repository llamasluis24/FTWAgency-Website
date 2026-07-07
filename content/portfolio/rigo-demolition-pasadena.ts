import type { Project } from "@/lib/schemas";

const VIDEO_BASE = "/showcases/social/videos";

export const rigoDemolitionPasadena: Project = {
  slug: "rigo-demolition-pasadena",
  title: "Rigo Demolition Inc.",
  portfolioKind: "social-media",
  industry: "construction",
  services: ["viral-social-media"],
  description:
    "Pasadena burnt-house demolition reel — dramatic before-and-during footage packaged for social discovery and contractor credibility in a competitive Inland Empire market.",
  screenshots: [
    {
      title: "Pasadena demolition reel",
      kind: "reel",
      src: `${VIDEO_BASE}/pasadena.jpg`,
      videoSrc: `${VIDEO_BASE}/pasadena.mp4`,
      alt: "Rigo Demolition Inc. Pasadena burnt houses demolition short-form video reel",
    },
  ],
  results: [
    { value: 1, label: "high-impact demolition reel" },
    { value: 1, label: "social-ready vertical cut" },
  ],
  technologies: ["Short-Form Video", "Drone & Ground Footage", "Social Distribution"],
  testimonial: {
    quote:
      "The Pasadena reel captures the intensity of the job and gives prospects instant proof we can handle complex teardowns.",
    author: "Rigo Demolition Inc.",
    role: "Operations",
    company: "Rigo Demolition Inc.",
    industry: "construction",
  },
  featured: false,
};
