import type { MetadataRoute } from "next";
import {
  buildSitemapEntries,
  SITEMAP_SEGMENTS,
  type SitemapSegment,
} from "@/lib/sitemap-urls";

export async function generateSitemaps() {
  return SITEMAP_SEGMENTS.map((id) => ({ id }));
}

/** Split sitemap index: core, locations, and content segments for scale. */
export default async function sitemap({
  id,
}: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const segment = (await id) as SitemapSegment;
  return buildSitemapEntries(segment);
}
