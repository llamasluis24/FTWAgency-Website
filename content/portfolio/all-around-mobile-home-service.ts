import type { Project } from "@/lib/schemas";

export const allAroundMobileHomeService: Project = {
  slug: "all-around-mobile-home-service",
  title: "All Around Mobile Home Service",
  portfolioKind: "website",
  industry: "home-services",
  services: ["website-design-development", "seo"],
  description:
    "Conversion-focused mobile home repair site with clear service categories, estimate forms, and trust proof built to turn local searches into booked jobs.",
  screenshots: [
    {
      title: "Conversion-first homepage",
      kind: "website",
      src: "/showcases/websites/all-around-mobile-home-service-hero.png",
      alt: "All Around Mobile Home Service website homepage",
    },
    { title: "Service category pages", kind: "website" },
    { title: "Estimate request flow", kind: "website" },
    { title: "Local SEO landing system", kind: "website" },
  ],
  results: [
    { value: 8, suffix: "+", label: "dedicated service pages" },
    { value: 42, suffix: "%", label: "increase in estimate requests" },
    { value: 100, suffix: "%", label: "mobile-optimized lead capture" },
  ],
  technologies: ["Next.js", "Tailwind CSS", "Local SEO", "Form Integration"],
  testimonial: {
    quote:
      "Our old site looked like every other builder template — homeowners couldn't tell what we actually did. The new site makes our services obvious, the estimate form is front and center, and we're finally getting calls from the right customers.",
    author: "All Around Mobile Home Service",
    role: "Owner",
    company: "All Around Mobile Home Service",
    industry: "home-services",
  },
  featured: true,
};
