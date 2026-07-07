import type { Project } from "@/lib/schemas";

const VIDEO_BASE = "/showcases/social/videos";

export const allExclusiveGlassHouse: Project = {
  slug: "all-exclusive-glass-house",
  title: "All Exclusive Construction Inc.",
  portfolioKind: "social-media",
  industry: "construction",
  services: ["viral-social-media"],
  description:
    "Glass house build reel showcasing premium residential construction — cinematic on-site storytelling that positions All Exclusive as the high-end builder to follow and hire.",
  screenshots: [
    {
      title: "Glass house build reel",
      kind: "reel",
      src: `${VIDEO_BASE}/glass-house.jpg`,
      videoSrc: `${VIDEO_BASE}/glass-house.mp4`,
      alt: "All Exclusive Construction Inc. glass house build short-form video reel",
    },
  ],
  results: [
    { value: 1, label: "premium build showcase reel" },
    { value: 1, label: "brand-positioning content" },
  ],
  technologies: ["Short-Form Video", "Construction Storytelling", "Reels & TikTok"],
  testimonial: {
    quote:
      "Our work speaks for itself — this reel lets the craftsmanship sell the project before a prospect ever picks up the phone.",
    author: "All Exclusive Construction Inc.",
    role: "Project Team",
    company: "All Exclusive Construction Inc.",
    industry: "construction",
  },
  featured: true,
};
