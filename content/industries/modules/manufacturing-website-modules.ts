import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const manufacturingWebsiteModules = {
  showcase: {
    eyebrow: "Manufacturing Website Example",
    title: "See What a Capability-First Fabricator Website Looks Like",
    lede:
      "Apex Precision Manufacturing went from a brochure site with stock photos to a capability showcase that earns RFQs from specifying engineers — tolerances, certifications, and upload-a-print quoting front and center.",
    siteName: "Apex Precision Manufacturing",
    siteUrl: "apexprecision.com",
    tagline: "CNC Machining · Sheet Metal · Assembly",
    hero: {
      badge: "ISO 9001 · AS9100 · ITAR Registered",
      headline: "Precision CNC & Fabrication Built for Demanding Specs",
      headlineAccent: "Precision CNC",
      subheadline:
        "5-axis milling, laser cutting, and weld fabrication under one roof. Upload your prints — detailed quote within 24 hours.",
      primaryCta: "Submit an RFQ",
      secondaryCta: "(614) 555-0198",
      heroImage: "/showcases/manufacturing/hero-fabrication.jpg",
      trustBadges: [
        "±0.0005\" Tolerances",
        "24-Hour Quote Turnaround",
        "First Article Inspection",
        "Made in USA",
      ],
    },
    gallery: {
      eyebrow: "Core Capabilities",
      title: "Processes buyers search for.",
      cta: "View all capabilities",
    },
    capabilities: [
      {
        name: "5-Axis CNC Milling",
        type: "CNC Machining",
        detail: "Aluminum · Steel · Titanium",
        image: "/showcases/manufacturing/cnc-milling.jpg",
        layout: "large" as const,
      },
      {
        name: "Laser & Waterjet Cutting",
        type: "Sheet Metal",
        detail: "Up to 1\" plate",
        image: "/showcases/manufacturing/laser-cutting.jpg",
        layout: "medium" as const,
      },
      {
        name: "Weld Fabrication",
        type: "Fabrication",
        detail: "MIG · TIG · Certified welders",
        image: "/showcases/manufacturing/weld-fabrication.jpg",
        layout: "medium" as const,
      },
      {
        name: "Assembly & Kitting",
        type: "Value-Add",
        detail: "Full BOM assembly",
        image: "/showcases/manufacturing/assembly-kitting.jpg",
        layout: "tall" as const,
      },
    ],
    stats: [
      { label: "RFQ conversion", value: "+58%" },
      { label: "Avg. PO value", value: "+34%" },
      { label: "Quote requests", value: "3×" },
    ],
  },

  funnel: {
    eyebrow: "Website Conversion",
    title: "Turn Capability Research Into Submitted RFQs",
    lede:
      "A manufacturer website should prove tolerances, show certifications, and make submitting prints effortless — on every device, for every specifying engineer.",
    stages: [
      { label: "Website Visitors", value: 4200 },
      { label: "Capability Page Views", value: 2940 },
      { label: "RFQ Clicks", value: 588 },
      { label: "Prints Uploaded", value: 176 },
      { label: "Qualified RFQs", value: 88 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Brochure Site to RFQ-Generating Capability Hub",
    before: {
      label: "Before",
      headline: "Stock photos, no proof of capability.",
      items: [
        "Generic template with no tolerance specs",
        "Certifications hidden in footer PDF",
        "No upload-a-print RFQ workflow",
        "Engineers bounced to competitors",
        "22 RFQs per month from web",
      ],
    },
    after: {
      label: "After",
      headline: "Every process page earns the RFQ.",
      items: [
        "Dedicated pages per process with spec tables",
        "ISO 9001 & AS9100 badges above the fold",
        "Upload-a-print RFQ with 24-hour quote SLA",
        "Case studies with industries and tolerances",
        "88+ qualified RFQs per month from web",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
