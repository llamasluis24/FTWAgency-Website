import type { Project } from "@/lib/schemas";

export const mendozerXEarthworks: Project = {
  slug: "mendozer-x-earthworks",
  title: "Mendozer X Earthworks Inc.",
  portfolioKind: "website",
  industry: "construction",
  services: ["website-design-development", "seo", "google-business-profile"],
  liveUrl: "https://www.mendozerxearthworks.com/",
  description:
    "Commercial earthwork contractor site for grading, excavation, concrete, and asphalt — built to win developer and GC bids with licensed credibility, service-area coverage, and fast estimate requests across SoCal.",
  screenshots: [
    {
      title: "Commercial earthwork homepage",
      kind: "website",
      src: "/showcases/websites/mendozer-x-earthworks.jpg",
      alt: "Mendozer X Earthworks commercial grading and excavation website hero",
    },
    { title: "Full-scope sitework services", kind: "website" },
    { title: "Preconstruction workflow", kind: "pipeline" },
    { title: "Southern California service areas", kind: "dashboard" },
  ],
  results: [
    { prefix: "#", value: 1069854, label: "licensed commercial contractor" },
    { value: 4, label: "core sitework service lines" },
  ],
  technologies: ["Next.js", "Local SEO", "GBP Optimization", "Lead Capture"],
  testimonial: {
    quote:
      "Mendozer needed a site that reads like a commercial partner — not a residential handyman page. We built service architecture, proof, and estimate paths that match how developers and GCs actually evaluate earthwork contractors.",
    author: "FTW Agency",
    role: "Project Team",
    company: "Mendozer X Earthworks Inc.",
    industry: "construction",
  },
  featured: false,
};
