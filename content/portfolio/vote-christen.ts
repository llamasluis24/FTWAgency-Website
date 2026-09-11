import type { Project } from "@/lib/schemas";

export const voteChristen: Project = {
  slug: "vote-christen",
  title: "Vote Christen",
  portfolioKind: "website",
  industry: "professional-services",
  services: ["website-design-development"],
  liveUrl: "https://www.votechristen.com/",
  description:
    "Civic campaign website for Christen Montero — scroll-driven storytelling, priorities, endorsements, and conversion paths for voters across Western Municipal Water District Division 2.",
  screenshots: [
    {
      title: "Campaign homepage hero",
      kind: "website",
      src: "/showcases/websites/vote-christen.jpg",
      alt: "Vote Christen campaign website hero — Affordable Water. Reliable Future.",
    },
    { title: "Why Water Matters scroll story", kind: "website" },
    { title: "Priorities & get involved flows", kind: "website" },
    { title: "Mobile-first campaign experience", kind: "mobile" },
  ],
  results: [
    { value: 1, label: "GSAP scroll storytelling section" },
    { value: 1, label: "endorsement & volunteer conversion system" },
  ],
  technologies: ["Next.js", "GSAP ScrollTrigger", "Campaign Conversion", "Accessibility"],
  testimonial: {
    quote:
      "We built a campaign site that turns complex water policy into a scroll-driven story voters can feel — clear priorities, strong CTAs, and motion that supports the message instead of distracting from it.",
    author: "FTW Agency",
    role: "Project Team",
    company: "Vote Christen",
    industry: "professional-services",
  },
  featured: true,
};
