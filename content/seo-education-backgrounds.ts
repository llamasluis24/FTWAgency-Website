export interface SeoEducationBackground {
  src: string;
  alt: string;
}

/** Subtle card backgrounds for SEO education insight panels, keyed by industry slug. */
export const seoEducationBackgrounds: Record<string, readonly SeoEducationBackground[]> = {
  "professional-services": [
    {
      src: "/industries/seo-education/professional-services/01-practice-areas.jpg",
      alt: "Law books and legal reference materials in a professional office",
    },
    {
      src: "/industries/seo-education/professional-services/02-expertise.jpg",
      alt: "Attorney reviewing documents at a desk",
    },
    {
      src: "/industries/seo-education/professional-services/03-local-search.jpg",
      alt: "Aerial view of a city neighborhood",
    },
    {
      src: "/industries/seo-education/professional-services/04-reviews.jpg",
      alt: "Five-star rating on a mobile device",
    },
  ],
  "home-services": [
    {
      src: "/industries/seo-education/home-services/01-service-city.jpg",
      alt: "Suburban home exterior at golden hour",
    },
    {
      src: "/industries/seo-education/home-services/02-mobile-emergency.jpg",
      alt: "Technician working on HVAC equipment",
    },
    {
      src: "/industries/seo-education/home-services/03-gbp-alignment.jpg",
      alt: "Google Maps on a smartphone screen",
    },
    {
      src: "/industries/seo-education/home-services/04-speed-schema.jpg",
      alt: "Engineer reviewing technical diagnostics on a laptop",
    },
  ],
  manufacturing: [
    {
      src: "/industries/seo-education/manufacturing/01-capability.jpg",
      alt: "CNC machining equipment in a fabrication shop",
    },
    {
      src: "/industries/seo-education/manufacturing/02-specs.jpg",
      alt: "Engineering blueprints and technical drawings",
    },
    {
      src: "/industries/seo-education/manufacturing/03-certifications.jpg",
      alt: "Quality certification documents on a desk",
    },
    {
      src: "/industries/seo-education/manufacturing/04-long-cycle.jpg",
      alt: "Analytics dashboard showing growth trends",
    },
  ],
  startups: [
    {
      src: "/industries/seo-education/startups/01-long-tail.jpg",
      alt: "Startup team collaborating in a workspace",
    },
    {
      src: "/industries/seo-education/startups/02-comparison.jpg",
      alt: "Product analytics dashboard on a monitor",
    },
    {
      src: "/industries/seo-education/startups/03-lean-content.jpg",
      alt: "Minimal laptop setup for focused work",
    },
    {
      src: "/industries/seo-education/startups/04-technical.jpg",
      alt: "Developer code on a screen",
    },
  ],
  "transportation-logistics": [
    {
      src: "/industries/seo-education/transportation-logistics/01-routes.jpg",
      alt: "Semi trucks on a highway at sunset",
    },
    {
      src: "/industries/seo-education/transportation-logistics/02-credentials.jpg",
      alt: "Commercial freight trucks in a yard",
    },
    {
      src: "/industries/seo-education/transportation-logistics/03-reviews.jpg",
      alt: "Logistics warehouse with organized freight",
    },
    {
      src: "/industries/seo-education/transportation-logistics/04-mobile-quote.jpg",
      alt: "Person using a smartphone for business",
    },
  ],
  "retail-ecommerce": [
    {
      src: "/industries/seo-education/retail-ecommerce/01-collections.jpg",
      alt: "Curated product display in a retail store",
    },
    {
      src: "/industries/seo-education/retail-ecommerce/02-product-copy.jpg",
      alt: "Ecommerce product on a clean white background for unique catalog copy",
    },
    {
      src: "/industries/seo-education/retail-ecommerce/03-review-schema.jpg",
      alt: "Customer reviewing products on a tablet",
    },
    {
      src: "/industries/seo-education/retail-ecommerce/04-speed.jpg",
      alt: "Fast-loading ecommerce checkout on mobile",
    },
  ],
  construction: [
    {
      src: "/industries/seo-education/construction/01-portfolio.jpg",
      alt: "Finished kitchen remodel with modern cabinetry",
    },
    {
      src: "/industries/seo-education/construction/02-city-pages.jpg",
      alt: "Residential neighborhood with homes under renovation",
    },
    {
      src: "/industries/seo-education/construction/03-proof.jpg",
      alt: "Contractor reviewing plans on a job site",
    },
    {
      src: "/industries/seo-education/construction/04-performance.jpg",
      alt: "Construction site with workers and equipment",
    },
  ],
  healthcare: [
    {
      src: "/industries/seo-education/healthcare/01-trust.jpg",
      alt: "Healthcare provider consulting with a patient",
    },
    {
      src: "/industries/seo-education/healthcare/02-treatment-pages.jpg",
      alt: "Modern dental treatment room",
    },
    {
      src: "/industries/seo-education/healthcare/03-patient-reviews.jpg",
      alt: "Patient consultation in a modern medical clinic",
    },
    {
      src: "/industries/seo-education/healthcare/04-clinic-interior.jpg",
      alt: "Hospital corridor and medical facility interior",
    },
  ],
  technology: [
    {
      src: "/industries/seo-education/technology/01-category.jpg",
      alt: "SaaS product dashboard interface",
    },
    {
      src: "/industries/seo-education/technology/02-comparison.jpg",
      alt: "Team evaluating software options on a whiteboard",
    },
    {
      src: "/industries/seo-education/technology/03-technical.jpg",
      alt: "Developer reviewing code on multiple monitors",
    },
    {
      src: "/industries/seo-education/technology/04-funnel.jpg",
      alt: "Marketing funnel analytics on a laptop",
    },
  ],
};

export function getSeoEducationBackgrounds(
  industrySlug: string,
): readonly SeoEducationBackground[] {
  return seoEducationBackgrounds[industrySlug] ?? [];
}
