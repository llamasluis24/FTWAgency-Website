import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/blocks/PageHero";
import { Section, Container } from "@/components/layout/Section";
import { buildMetadata } from "@/lib/metadata";
import {
  getAllArticles,
  getAllCaseStudies,
  getAllIndustries,
  getAllServices,
} from "@/lib/content";
import { getPublishedLocations } from "@/lib/publish";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap | FTW Agency",
  description:
    "Complete index of FTW Agency pages — services, industries, Southern California locations, case studies, and resources.",
  path: "/sitemap",
});

export default function HtmlSitemapPage() {
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getPublishedLocations();
  const caseStudies = getAllCaseStudies();
  const articles = getAllArticles();

  const sections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Portfolio", href: "/portfolio" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "All Services", href: "/services" },
        ...services.map((s) => ({
          label: s.shortTitle,
          href: `/services/${s.slug}`,
        })),
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "All Industries", href: "/industries" },
        ...industries.map((i) => ({
          label: i.title,
          href: `/industries/${i.slug}`,
        })),
      ],
    },
    {
      title: "Locations",
      links: [
        { label: "All Locations", href: "/locations" },
        ...locations.map((l) => ({
          label: `${l.city}, ${l.stateAbbr}`,
          href: `/locations/${l.slug}`,
        })),
      ],
    },
    {
      title: "Case Studies",
      links: caseStudies.map((cs) => ({
        label: cs.title,
        href: `/case-studies/${cs.slug}`,
      })),
    },
    {
      title: "Resources",
      links: [
        { label: "Resources Hub", href: "/resources" },
        { label: "Blog", href: "/resources/blog" },
        ...articles.map((a) => ({
          label: a.title,
          href: `/resources/blog/${a.slug}`,
        })),
      ],
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        headline="Every Page on *FTW Agency*"
        sub="Human-readable index of our services, markets, proof, and resources. XML sitemaps are available for crawlers."
        crumbs={[{ name: "Sitemap", path: "/sitemap" }]}
      />
      <Section>
        <Container>
          <p className="mb-10 text-sm text-muted">
            XML sitemap:{" "}
            <Link href="/sitemap.xml" className="text-accent hover:underline">
              {siteConfig.url}/sitemap.xml
            </Link>
            {" · "}
            AI summary:{" "}
            <Link href="/llms.txt" className="text-accent hover:underline">
              {siteConfig.url}/llms.txt
            </Link>
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-lg font-semibold text-heading">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-body transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
