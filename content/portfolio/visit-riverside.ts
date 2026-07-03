import type { Project } from "@/lib/schemas";

export const visitRiverside: Project = {
  slug: "visit-riverside",
  title: "Visit Riverside",
  portfolioKind: "website",
  industry: "professional-services",
  services: ["website-design-development", "seo", "custom-software"],
  description:
    "City tourism hub for Riverside, CA — things to do, dining, events, trip planning, and business listings in one searchable destination guide.",
  screenshots: [
    {
      title: "City discovery homepage",
      kind: "website",
      src: "/showcases/websites/visit-riverside/category-things-to-do.png",
      alt: "Visit Riverside tourism website hero and city discovery experience",
    },
    { title: "Category explorer", kind: "website" },
    { title: "Interactive city map", kind: "dashboard" },
    { title: "Events & trip planner", kind: "mobile" },
  ],
  results: [
    { value: 1, label: "city-wide business directory" },
    { value: 1, label: "events & trip planner tools" },
  ],
  technologies: ["Next.js", "Interactive Maps", "Local SEO", "Content Architecture"],
  testimonial: {
    quote:
      "A city has more to offer than people can find through random searches. Visit Riverside was built to make local discovery easier, faster, and more intentional.",
    author: "FTW Agency",
    role: "Project Team",
    company: "Visit Riverside",
    industry: "professional-services",
  },
  featured: true,
};
