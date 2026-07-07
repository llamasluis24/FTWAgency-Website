import type { Project } from "@/lib/schemas";

const VIDEO_BASE = "/showcases/social/videos";

export const rigoDemolitionBrentwood: Project = {
  slug: "rigo-demolition-brentwood",
  title: "Rigo Demolition Inc.",
  portfolioKind: "social-media",
  industry: "construction",
  services: ["viral-social-media"],
  description:
    "Short-form demolition reel for a Brentwood residential teardown — raw jobsite footage edited for reach, credibility, and lead generation on Instagram and TikTok.",
  screenshots: [
    {
      title: "Brentwood demolition reel",
      kind: "reel",
      src: `${VIDEO_BASE}/brentwood.jpg`,
      videoSrc: `${VIDEO_BASE}/brentwood.mp4`,
      alt: "Rigo Demolition Inc. Brentwood teardown short-form video reel",
    },
  ],
  results: [
    { value: 1, label: "jobsite reel produced" },
    { value: 1, label: "platform-ready vertical edit" },
  ],
  technologies: ["Short-Form Video", "On-Site Production", "Reels & TikTok"],
  testimonial: {
    quote:
      "Demolition is visual — this reel shows the scale of our work in seconds and brings in the right kind of project inquiries.",
    author: "Rigo Demolition Inc.",
    role: "Operations",
    company: "Rigo Demolition Inc.",
    industry: "construction",
  },
  featured: true,
};
