import type { Project } from "@/lib/schemas";

export const blueSocial: Project = {
  slug: "blue-social",
  title: "Blue Social",
  portfolioKind: "software",
  industry: "technology",
  services: ["custom-software", "mobile-app-development", "website-design-development"],
  description:
    "Proximity-based social networking platform with real-world discovery, community engagement, and scalable content experiences.",
  screenshots: [
    {
      title: "Platform marketing homepage",
      kind: "website",
      src: "/showcases/software/blue-social-hero.jpg",
      alt: "Blue Social hero page with app store download CTAs and map discovery UI",
    },
    { title: "Social discovery map", kind: "dashboard" },
    { title: "iOS & Android app ecosystem", kind: "mobile" },
    { title: "Community engagement layer", kind: "chart" },
  ],
  results: [
    { value: 2, label: "native app platforms (iOS & Android)" },
    { value: 1, label: "Web3 token & community layer" },
  ],
  technologies: ["React Native", "Social Graph", "Proximity Networking", "Web3"],
  testimonial: {
    quote:
      "We needed a product site that explained proximity networking in seconds — and a platform experience as polished as the app itself.",
    author: "Blue Social",
    role: "Product Team",
    company: "Blue Social",
    industry: "technology",
  },
  featured: false,
};
