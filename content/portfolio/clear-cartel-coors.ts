import type { Project } from "@/lib/schemas";

const VIDEO_BASE = "/showcases/social/videos";

export const clearCartelCoors: Project = {
  slug: "clear-cartel-coors",
  title: "Clear Cartel Automotive Restyling",
  portfolioKind: "social-media",
  industry: "retail-ecommerce",
  services: ["viral-social-media"],
  description:
    "Coors Light–branded BMW wrap reveal reel — high-energy automotive restyling content built to stop the scroll and drive shop inquiries for custom wraps and detailing.",
  screenshots: [
    {
      title: "Coors wrap reveal reel",
      kind: "reel",
      src: `${VIDEO_BASE}/coors.jpg`,
      videoSrc: `${VIDEO_BASE}/coors.mp4`,
      alt: "Clear Cartel Automotive Restyling Coors Light BMW wrap short-form video reel",
    },
  ],
  results: [
    { value: 1, label: "wrap reveal reel" },
    { value: 1, label: "scroll-stopping automotive edit" },
  ],
  technologies: ["Short-Form Video", "Automotive Content", "Brand Collab Reels"],
  testimonial: {
    quote:
      "Wrap work is visual — this reel shows the finish, the color, and the craft in a way photos alone never could.",
    author: "Clear Cartel Automotive Restyling",
    role: "Shop Team",
    company: "Clear Cartel Automotive Restyling",
    industry: "retail-ecommerce",
  },
  featured: true,
};
