import { testimonials } from "@/content/site";
import { projects } from "@/content/portfolio";
import { farmhouseCollective } from "@/content/case-studies/farmhouse-collective";
import type { Testimonial } from "@/lib/schemas";
import type { Project } from "@/lib/schemas";

const testimonialSlugMap: Record<string, string> = {
  "farmhouse-collective": "Farm House Collective",
  "visit-riverside": "Visit Riverside",
  "vertex-services": "Vertex Services",
  "cal-star-mobilehomecrm": "Cal Star Mobile Home Construction",
  "all-around-mobile-home-service": "All Around Mobile Home Service",
};

export function getCampaignTestimonials(slugs: string[]): Testimonial[] {
  return slugs
    .map((slug) => {
      const company = testimonialSlugMap[slug];
      if (!company) return null;
      return testimonials.find(
        (t) =>
          t.company === company ||
          t.author === company ||
          t.company?.includes(company.split(" ")[0] ?? ""),
      );
    })
    .filter((t): t is Testimonial => Boolean(t));
}

export function getCampaignPortfolioProof(slugs: string[]): Project[] {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
}

export function getCampaignCaseStudy(slug: string) {
  if (slug === "farmhouse-collective") return farmhouseCollective;
  return null;
}

export function getPortfolioHeroImage(project: Project): string | null {
  const shot = project.screenshots.find((s) => s.src);
  return shot?.src ?? null;
}
