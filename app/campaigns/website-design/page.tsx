import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { websiteDesignShowcase } from "@/content/campaigns/website-design-showcase";
import { WebsiteShowcaseTemplate } from "@/components/campaigns/showcase/WebsiteShowcaseTemplate";

export const metadata: Metadata = buildMetadata({
  title: websiteDesignShowcase.metaTitle,
  description: websiteDesignShowcase.metaDescription,
  path: websiteDesignShowcase.path,
  robots: websiteDesignShowcase.noindex
    ? { index: false, follow: true }
    : undefined,
});

export default function WebsiteDesignShowcasePage() {
  return <WebsiteShowcaseTemplate config={websiteDesignShowcase} />;
}
