import { siteConfig } from "@/content/site";
import type { ResolvedCampaignPage } from "@/content/campaigns/types";

export function campaignWebPageSchema(page: ResolvedCampaignPage) {
  const url = `${siteConfig.url}${page.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
  };
}
