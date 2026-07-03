import type { Project } from "@/lib/schemas";

export const farmhouseCollective: Project = {
  slug: "farmhouse-collective",
  title: "Farm House Collective",
  portfolioKind: "website",
  industry: "restaurants-hospitality",
  services: ["website-design-development", "seo"],
  description:
    "Riverside food hall and event collective site with calendar programming, vendor lineup, and brand storytelling for a multi-concept destination.",
  screenshots: [
    {
      title: "Immersive homepage",
      kind: "website",
      src: "/showcases/websites/farmhouse-collective.jpg",
      alt: "Farm House Collective website hero with outdoor courtyard and Grow Where You Are Planted branding",
    },
    { title: "Restaurant & retail directory", kind: "website" },
    { title: "Events calendar", kind: "website" },
    { title: "Mobile-first experience", kind: "mobile" },
  ],
  results: [
    { value: 9891, suffix: " sq ft", label: "mixed-use destination" },
    { value: 10, suffix: "+", label: "restaurants and retail vendors" },
    { value: 100, suffix: "%", label: "mobile-first experience" },
  ],
  technologies: ["Next.js", "Tailwind CSS", "Events Calendar", "Local SEO"],
  testimonial: {
    quote:
      "The website captures the feeling of being here. Visitors discover our restaurants, shops, and story before they ever walk through the courtyard — and that matters for a place built on craftsmanship and community.",
    author: "FarmHouse Collective",
    role: "Leadership Team",
    company: "Farm House Collective",
    industry: "restaurants-hospitality",
  },
  featured: false,
};
