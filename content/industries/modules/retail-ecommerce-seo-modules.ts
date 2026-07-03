import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
  IndustryModuleSeoEducation,
} from "./types";
import type { SerpResult, KeywordNode } from "@/content/seo-showcase";

export const retailEcommerceSeoModules = {
  showcase: {
    eyebrow: "Ecommerce SEO Example",
    title: "See What Product & Category Rankings Look Like for a DTC Brand",
    lede:
      "Shoppers search by product and category — \"organic linen sheets\" or \"sustainable home decor gifts.\" Product SEO puts your catalog in those results before Amazon and big-box competitors.",
    searchQuery: "organic linen sheets queen",
    serpResults: [
      {
        title: "Ad · BigBox Home",
        url: "bigbox.example.com",
        description: "Linen sheets on sale. Free shipping on orders $75+.",
        isAd: true,
      },
      {
        title: "Verde Market Co. — Organic Linen Sheets Queen",
        url: "verdemarket.co › organic-linen-sheets-queen",
        description:
          "GOTS-certified organic linen sheets. 4.8★ from 2,400+ reviews. Free shipping · 60-night trial. Shop the Sage Collection.",
        isHighlighted: true,
      },
      {
        title: "Best Organic Linen Sheets 2026 — Reviewed",
        url: "homeguide.example.com › linen-sheets",
        description: "Compare the top organic linen sheet brands for comfort and durability.",
      },
      {
        title: "Organic Linen Sheets vs Cotton — Which Is Better?",
        url: "sleepguide.example.com › linen-vs-cotton",
        description: "Material comparison, care tips, and what to look for when buying.",
      },
    ] satisfies SerpResult[],
    keywordNodes: [
      { query: "organic linen sheets", target: "Category Page" },
      { query: "sustainable home decor", target: "Collection Page" },
      { query: "linen bedding gift set", target: "Product Page" },
      { query: "verde market reviews", target: "Reviews Page" },
      { query: "eco friendly throw blankets", target: "Category Page" },
    ] satisfies KeywordNode[],
  },

  growth: {
    eyebrow: "Compounding Product Rankings",
    title: "Category & Product Equity That Grows Every Month",
    lede:
      "Unlike paid traffic, organic product visibility compounds — every optimized category page, blog post, and review earned lowers customer acquisition cost.",
    chartValues: [10, 14, 18, 24, 32, 40, 52, 64, 78, 94, 112, 134],
    metrics: [
      { label: "Organic visits / mo", before: "1,240", after: "8,640" },
      { label: "Ranking keywords", before: "42", after: "386" },
      { label: "Revenue from organic", before: "$4.2k", after: "$28k" },
    ],
  },

  funnel: {
    eyebrow: "Organic Commerce Pipeline",
    title: "Turn Product Rankings Into Revenue",
    lede:
      "Strong ecommerce SEO captures shoppers at the research stage — comparing materials, reading reviews, and shortlisting brands all start in search.",
    stages: [
      { label: "Search Impressions", value: 92000 },
      { label: "Organic Clicks", value: 8640 },
      { label: "Product Page Views", value: 5180 },
      { label: "Add to Cart", value: 1036 },
      { label: "Completed Orders", value: 412 },
    ],
  } satisfies IndustryModuleFunnel,

  seoEducation: {
    eyebrow: "Search essentials",
    title: "What ranking DTC brands do differently",
    lede:
      "Verde Market Co. ranks for product and category terms with collection architecture, unique copy, and schema — not duplicated manufacturer descriptions.",
    insights: [
      {
        icon: "ShoppingBag",
        title: "Collections match search intent",
        body:
          "Shoppers search 'organic linen sheets queen' — category pages with curated products and buying guides beat thin catalog listings.",
        takeaway: "Structure the catalog for how people search.",
      },
      {
        icon: "Layers",
        title: "Unique product copy",
        body:
          "Supplier descriptions hurt rankings across the whole catalog. Rewrite titles, meta, and copy with brand voice and specs Google hasn't seen.",
        takeaway: "Templated copy wastes every product page.",
      },
      {
        icon: "Star",
        title: "Review schema drives clicks",
        body:
          "Product schema with ratings and price data earns rich snippets. Stars in SERPs are free ad space.",
        takeaway: "Schema and reviews unlock higher CTR.",
      },
      {
        icon: "Gauge",
        title: "Speed affects rankings",
        body:
          "Heavy galleries and bloated themes tank Core Web Vitals. Optimized images and lean code keep pages eligible for page one.",
        takeaway: "A 6-second load ranks worse than a fast store.",
      },
    ],
    audit: {
      healthBefore: 61,
      healthAfter: 95,
      checks: [
        { label: "Unique product descriptions", status: "pass" },
        { label: "Collection landing pages", status: "pass" },
        { label: "Product schema with reviews", status: "pass" },
        { label: "Optimized product images", status: "pass" },
        { label: "Product XML sitemap", status: "pass" },
        { label: "Core Web Vitals passing", status: "warn" },
      ],
    },
  } satisfies IndustryModuleSeoEducation,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Invisible Products to Page-One Category Rankings",
    before: {
      label: "Before",
      headline: "Amazon owned every product search.",
      items: [
        "Thin product pages with duplicate descriptions",
        "No category or collection landing pages",
        "Missing product schema and review markup",
        "Blog content disconnected from catalog",
        "Organic drove $4.2k/month",
      ],
    },
    after: {
      label: "After",
      headline: "Ranking for every category you sell.",
      items: [
        "Unique PDP copy with schema on every SKU",
        "Category pages optimized for buyer intent",
        "Review-rich snippets on 40+ products",
        "Content hub linking to high-margin SKUs",
        "Organic drives $28k+/month",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
