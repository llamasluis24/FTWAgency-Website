/**
 * Validates location content, publish state, combo counts, and SEO metadata.
 * Run: npm run validate:locations
 */
import { locations } from "../content/locations/index.ts";
import { getAllIndustries, getAllServices } from "../lib/collections.ts";
import {
  isLocationIndustryComboPublished,
  isLocationServiceComboPublished,
} from "../lib/publish.ts";

const EXPECTED_CITIES = 10;
const services = getAllServices();
const industries = getAllIndustries();

let errors = 0;
let warnings = 0;

function fail(message: string) {
  console.error(`ERROR: ${message}`);
  errors++;
}

function warn(message: string) {
  console.warn(`WARN: ${message}`);
  warnings++;
}

function pass(message: string) {
  console.log(`OK: ${message}`);
}

if (locations.length !== EXPECTED_CITIES) {
  fail(`Expected ${EXPECTED_CITIES} cities, found ${locations.length}`);
} else {
  pass(`${locations.length} cities registered`);
}

const slugSet = new Set(locations.map((l) => l.slug));
const titles = new Map<string, string>();
const descriptions = new Map<string, string>();

let serviceCombos = 0;
let industryCombos = 0;

for (const location of locations) {
  if (location.publish.status !== "full") {
    fail(`${location.slug} is not publish.status full (got ${location.publish.status})`);
  }

  if (!location.slug.endsWith("-ca")) {
    fail(`${location.slug} does not end with -ca`);
  }

  for (const nearby of location.nearbySlugs) {
    if (!slugSet.has(nearby)) {
      fail(`${location.slug} nearbySlugs references unknown slug: ${nearby}`);
    }
  }

  const otherCities = locations
    .filter((l) => l.slug !== location.slug)
    .map((l) => l.city);

  for (const otherCity of otherCities) {
    const haystack = [
      location.intro,
      location.heroSub,
      ...location.marketPoints.map((p) => p.description),
      ...location.whyLocal.map((p) => p.description),
      ...location.faqs.map((f) => f.answer),
    ].join(" ");

    if (haystack.includes(otherCity)) {
      warn(`${location.slug} copy mentions another market city: ${otherCity}`);
    }
  }

  if (titles.has(location.meta.title)) {
    fail(`Duplicate meta title: ${location.meta.title}`);
  }
  titles.set(location.meta.title, location.slug);

  if (descriptions.has(location.meta.description)) {
    fail(`Duplicate meta description on ${location.slug}`);
  }
  descriptions.set(location.meta.description, location.slug);

  serviceCombos += services.filter((s) =>
    isLocationServiceComboPublished(location, s.slug),
  ).length;
  industryCombos += industries.filter((i) =>
    isLocationIndustryComboPublished(location, i.slug),
  ).length;
}

const totalCombos = serviceCombos + industryCombos;

if (totalCombos !== 210) {
  fail(`Expected 210 combo URLs, would generate ${totalCombos} (${serviceCombos} service + ${industryCombos} industry)`);
} else {
  pass(`210 combo URLs (${serviceCombos} service + ${industryCombos} industry)`);
}

pass(`${locations.length} city hub URLs + 1 /locations hub = ${locations.length + 1} hub pages`);

console.log("\n--- Summary ---");
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  process.exit(1);
}

console.log("All location validation checks passed.");
