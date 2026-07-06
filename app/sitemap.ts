import type { MetadataRoute } from "next";
import { getAllSitemapEntries } from "@/lib/sitemap-urls";

/** Unified sitemap at /sitemap.xml for Google Search Console and crawlers. */
export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries();
}
