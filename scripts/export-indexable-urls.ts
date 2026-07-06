/**
 * Export indexable URLs for Google Search Console submission.
 * Run: npm run export:urls
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getIndexableUrlList } from "../lib/llms.ts";
import { getSitemapSegmentCounts } from "../lib/sitemap-urls.ts";
import { getPublishTierSummaries } from "../lib/publish.ts";

const outDir = resolve(process.cwd(), "exports");
mkdirSync(outDir, { recursive: true });
const urls = getIndexableUrlList();
const segments = getSitemapSegmentCounts();
const tiers = getPublishTierSummaries();

writeFileSync(resolve(outDir, "indexable-urls.txt"), urls.join("\n") + "\n", "utf8");

writeFileSync(
  resolve(outDir, "gsc-submission-manifest.txt"),
  [
    "# FTW Agency — indexable URL export",
    `# Generated: ${new Date().toISOString()}`,
    `# Total URLs: ${urls.length}`,
    `# Sitemap segments: core=${segments.core}, locations=${segments.locations}, content=${segments.content}`,
    "# Submit sitemap index: https://www.ftwagency.ai/sitemap.xml",
    "",
    ...urls,
  ].join("\n") + "\n",
  "utf8",
);

writeFileSync(
  resolve(outDir, "publish-tier-report.txt"),
  [
    "# Location publish tier report",
    "# status: draft | hub | tier1 | full",
    "",
    "city\tstatus\thub\tservice_combos\tindustry_combos\ttotal",
    ...tiers.map(
      (t) =>
        `${t.city}\t${t.status}\t${t.hubLive ? "yes" : "no"}\t${t.serviceCombos}\t${t.industryCombos}\t${t.totalCombos}`,
    ),
  ].join("\n") + "\n",
  "utf8",
);

console.log(`Exported ${urls.length} indexable URLs to exports/`);
console.log(`  core: ${segments.core} | locations: ${segments.locations} | content: ${segments.content}`);
console.log("Files:");
console.log("  exports/indexable-urls.txt");
console.log("  exports/gsc-submission-manifest.txt");
console.log("  exports/publish-tier-report.txt");
