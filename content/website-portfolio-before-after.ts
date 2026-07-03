export interface WebsiteBeforeAfterExample {
  title: string;
  before: string;
  after: string;
  beforeTitle: string;
  beforeDescription: string;
  afterTitle: string;
  afterDescription: string;
}

const BASE = "/portfolio/before-after";

export const websiteBeforeAfterExamples: WebsiteBeforeAfterExample[] = [
  {
    title: "Professional Services",
    before: `${BASE}/all-around-mobile-before.png`,
    after: `${BASE}/all-around-mobile-after.png`,
    beforeTitle: "All Around — Outdated Wix Site",
    beforeDescription:
      "Legacy builder site with dated layout, weak lead capture, and no clear service positioning for All Around Mobile Home Service",
    afterTitle: "All Around — Modern Conversion Site",
    afterDescription:
      "Trust-focused redesign with clear service categories, estimate forms, project proof, and a professional mobile home specialist brand",
  },
  {
    title: "Local Restaurant",
    before: `${BASE}/ce731aa1-1096-4d32-af28-dbfa094efe05.png`,
    after: `${BASE}/b401e16f-5b49-4876-8098-df2c6df4c1aa.png`,
    beforeTitle: "Coming Soon Page",
    beforeDescription:
      "Basic placeholder website with minimal functionality and poor user experience",
    afterTitle: "Full Restaurant Experience",
    afterDescription:
      "Complete menu showcase, online ordering, and engaging customer experience",
  },
  {
    title: "Dental",
    before: `${BASE}/f8486be3-f4fe-4323-b7e5-b189f23ce70e.png`,
    after: `${BASE}/bbb82625-66ea-4e0b-93d2-ce756e8a48ce.png`,
    beforeTitle: "Single Practice Focus",
    beforeDescription:
      "Basic dental website with limited content and simple hero section",
    afterTitle: "Comprehensive Dental Excellence",
    afterDescription:
      "Multiple dentist profiles, comprehensive services showcase, patient testimonials, and professional team presentation",
  },
  {
    title: "Auto Repair",
    before: `${BASE}/d3903148-272f-4b43-af30-cc0385960914.png`,
    after: `${BASE}/108f2acf-93cb-49b0-b6ea-30440369e585.png`,
    beforeTitle: "Basic Auto Shop Website",
    beforeDescription:
      "Simple layout with minimal visual appeal and limited service showcase",
    afterTitle: "Professional Auto Service Center",
    afterDescription:
      "Comprehensive service showcase, customer testimonials, online appointment booking, and trust-building features",
  },
  {
    title: "Wellness",
    before: `${BASE}/60db43a7-0678-4a58-ae88-d7e5dc97a2f9.png`,
    after: `${BASE}/fefcd28f-bee5-488e-aa7b-81bd3d97b3c1.png`,
    beforeTitle: "Basic Chiropractic Practice",
    beforeDescription:
      "Simple layout with limited visual appeal, basic appointment form, and minimal service information",
    afterTitle: "Complete Wellness Experience",
    afterDescription:
      "Professional team profiles, comprehensive service descriptions, treatment plans, patient testimonials, and seamless appointment booking",
  },
  {
    title: "Ecommerce",
    before: `${BASE}/3ce98480-63d0-413a-9b79-20346ba2af2d.png`,
    after: `${BASE}/ffdc9693-f5ee-4ecc-ba14-1d97d1270801.png`,
    beforeTitle: "Basic Store Information",
    beforeDescription:
      "Simple informational website with basic store hours, contact info, and minimal product showcase",
    afterTitle: "Full E-commerce Experience",
    afterDescription:
      "Complete online store with advanced filtering, curated collections, featured products, and seamless shopping experience",
  },
  {
    title: "Growing Brands",
    before: `${BASE}/dbb88315-38e6-47d5-88a0-fe04ce5c3d65.png`,
    after: `${BASE}/bfcd6ca4-a515-4962-905b-bdbec9892ac6.png`,
    beforeTitle: "Blue Social — Basic Landing Page",
    beforeDescription:
      "Simple layout with minimal content, basic navigation, and limited interactive features for a growing social app brand",
    afterTitle: "Blue Social — Modern Interactive Platform",
    afterDescription:
      "Dynamic Web3 experience with token utility, proximity networking, team credibility, and conversion paths built for scale",
  },
];
