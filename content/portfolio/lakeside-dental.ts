import type { Project } from "@/lib/schemas";

export const lakesideDental: Project = {
  slug: "lakeside-dental",
  title: "Lakeside Dental Studio",
  portfolioKind: "website",
  industry: "healthcare",
  services: ["seo", "review-reputation-growth", "business-automation", "website-design-development"],
  description:
    "Patient acquisition system for a two-location dental practice: treatment-focused SEO, a review engine that built 400+ new five-star reviews, and scheduling automation that cut no-shows by a third.",
  screenshots: [
    { title: "Patient-focused website", kind: "website" },
    { title: "Treatment landing pages", kind: "website" },
    { title: "Review velocity dashboard", kind: "reviews" },
    { title: "Appointment automation flows", kind: "dashboard" },
  ],
  results: [
    { value: 156, suffix: "%", label: "increase in new patient bookings" },
    { value: 400, prefix: "+", label: "new five-star reviews in 12 months" },
    { value: 32, suffix: "%", label: "reduction in no-shows" },
  ],
  technologies: ["Next.js", "Practice Management Integration", "Review Automation", "SMS Reminders"],
  testimonial: {
    quote:
      "We used to compete on price. Now patients arrive already convinced because of our reviews and our rankings — and the front desk finally has room to breathe.",
    author: "Dr. Priya Raman",
    role: "Practice Owner",
    company: "Lakeside Dental Studio",
    industry: "healthcare",
  },
  featured: true,
};
