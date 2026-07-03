import type { Industry } from "@/lib/schemas";

export const retailEcommerce: Industry = {
  slug: "retail-ecommerce",
  title: "Retail & Ecommerce",
  icon: "ShoppingBag",
  excerpt:
    "Traffic, conversion, and repeat purchase systems for retailers and online stores.",
  heroHeadline: "Turn Browsers Into *Buyers* — Online and In-Store.",
  heroSub:
    "We help retail and ecommerce brands grow traffic that converts, recover abandoned revenue, and build the repeat purchase systems where retail profit actually lives.",
  painPoints: [
    {
      title: "Paying for traffic that bounces",
      description:
        "Ad costs climb while conversion stays flat — growth that gets more expensive every quarter.",
    },
    {
      title: "Abandoned carts, abandoned revenue",
      description:
        "Most carts never check out, and without recovery systems that revenue is simply gone.",
    },
    {
      title: "One-and-done customers",
      description:
        "Acquisition costs only pencil out with repeat purchases — but nothing brings buyers back.",
    },
    {
      title: "Invisible in product searches",
      description:
        "Shoppers search for what you sell and find marketplaces and competitors instead.",
    },
  ],
  growthSystem: {
    title: "The FTW Growth System for Retail & Ecommerce",
    description:
      "Organic and paid traffic engineered for intent, conversion-optimized storefronts, and lifecycle automation that turns one purchase into a customer relationship.",
  },
  serviceStack: [
    {
      service: "website-design-development",
      reason: "Storefronts engineered to convert, not just display.",
    },
    {
      service: "seo",
      reason: "Rank for the product and category searches that drive sales.",
    },
    {
      service: "business-automation",
      reason: "Cart recovery, win-backs, and lifecycle flows that compound revenue.",
    },
    {
      service: "paid-ads-management",
      reason: "Shopping and search campaigns accountable to return on ad spend.",
    },
    {
      service: "viral-social-media",
      reason: "Product content that builds audience and demand.",
    },
  ],
  stats: [
    { value: 70, suffix: "%", label: "of carts are abandoned without recovery systems" },
    { value: 5, suffix: "x", label: "cheaper to sell to an existing customer than acquire new" },
    { value: 2, suffix: "x", label: "conversion lift from optimized product pages" },
  ],
  examples: {
    lead: "New order — premium bundle, $186",
    review: "\u201cQuality exceeded expectations. Already reordered!\u201d",
    appointment: "Back-in-stock alert sent — 412 subscribers",
    metricLabel: "Revenue this week",
    metricValue: "+$12.4k",
  },
  faqs: [
    {
      question: "Do you work with brick-and-mortar retail too?",
      answer:
        "Yes — local visibility, review growth, and foot-traffic campaigns for physical stores, plus unified systems for retailers selling both in-store and online.",
    },
    {
      question: "Which ecommerce platforms do you support?",
      answer:
        "Shopify and WooCommerce most commonly, plus custom storefronts when product configuration or B2B pricing demands it.",
    },
    {
      question: "How do you improve repeat purchase rates?",
      answer:
        "Lifecycle automation: post-purchase flows, replenishment reminders, win-back campaigns, and loyalty mechanics — typically the highest-margin revenue an ecommerce brand isn't capturing.",
    },
  ],
  meta: {
    title: "Retail & Ecommerce Growth Systems | FTW Agency",
    description:
      "Ecommerce growth systems: conversion-optimized storefronts, product SEO, cart recovery automation, and repeat purchase systems that compound revenue.",
  },
};
