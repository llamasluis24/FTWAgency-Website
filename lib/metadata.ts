import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/** Default social share image — served from /public/opengraph-image.png. */
export const defaultOgImage = {
  url: `${siteConfig.url}/opengraph-image.png`,
  secureUrl: `${siteConfig.url}/opengraph-image.png`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Strategy. Systems. Growth.`,
  type: "image/png",
};

type OgImageConfig = {
  url: string;
  secureUrl?: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
};

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogTitle?: string;
  ogDescription?: string;
  /** Override default site OG image (e.g. per-city opengraph-image routes). */
  ogImage?: OgImageConfig;
  robots?: Metadata["robots"];
}

/**
 * Metadata factory: generates title, description, Open Graph, Twitter, and
 * canonical URL for any page from content entry fields.
 */
export function buildLocationOgImage(path: string, alt: string): OgImageConfig {
  return {
    url: `${siteConfig.url}${path}/opengraph-image`,
    secureUrl: `${siteConfig.url}${path}/opengraph-image`,
    width: 1200,
    height: 630,
    alt,
    type: "image/png",
  };
}

export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage,
  robots,
}: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  const images = [ogImage ?? defaultOgImage];
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(robots ? { robots } : {}),
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: siteConfig.name,
      type: ogType,
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [images[0].url],
    },
  };
}
