import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/** Default social share image (app/opengraph-image.png). */
export const defaultOgImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Strategy. Systems. Growth.`,
};

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
}

/**
 * Metadata factory: generates title, description, Open Graph, Twitter, and
 * canonical URL for any page from content entry fields.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogTitle,
  ogDescription,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [defaultOgImage.url],
    },
  };
}
