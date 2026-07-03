import type {
  IndustryModuleBeforeAfter,
  IndustryModuleFunnel,
} from "./types";

export const retailEcommerceWebsiteModules = {
  showcase: {
    eyebrow: "Retail & Ecommerce Website Example",
    title: "See What a Conversion-Engineered Storefront Looks Like",
    lede:
      "Verde Market Co. went from a basic catalog site with flat conversion to a full ecommerce experience — curated collections, product filtering, and checkout flows built to turn browsers into buyers.",
    portfolioExampleTitle: "Ecommerce",
  },

  funnel: {
    eyebrow: "Storefront Conversion",
    title: "Turn Product Browsers Into Completed Orders",
    lede:
      "An ecommerce site should guide shoppers from discovery to checkout in as few clicks as possible — with trust signals and urgency on every product page.",
    stages: [
      { label: "Store Sessions", value: 8400 },
      { label: "Product Page Views", value: 5200 },
      { label: "Add to Cart", value: 1680 },
      { label: "Checkout Started", value: 840 },
      { label: "Orders Completed", value: 420 },
    ],
  } satisfies IndustryModuleFunnel,

  beforeAfter: {
    eyebrow: "Before vs After",
    title: "From Catalog Site to Revenue Engine",
    before: {
      label: "Before",
      headline: "Pretty products, flat conversion.",
      items: [
        "Basic product grid with no collections",
        "Slow mobile checkout experience",
        "No urgency or social proof on PDPs",
        "2.1% conversion rate",
        "High bounce on paid traffic",
      ],
    },
    after: {
      label: "After",
      headline: "Built to convert every visit.",
      items: [
        "Curated collections and smart filtering",
        "One-page mobile checkout",
        "Reviews and scarcity on every product page",
        "5.8% conversion rate — 2× lift",
        "ROAS improved across all paid channels",
      ],
    },
  } satisfies IndustryModuleBeforeAfter,
};
