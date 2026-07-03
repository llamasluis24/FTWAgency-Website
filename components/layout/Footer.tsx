import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import {
  getAllIndustries,
  getAllLocations,
  getAllServices,
} from "@/lib/content";

/**
 * Footer doubles as the sitewide internal-linking engine: every service,
 * industry, and location is linked from every page.
 */
export function Footer() {
  const services = getAllServices();
  const industries = getAllIndustries();
  const locations = getAllLocations();

  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Services",
      links: services.map((s) => ({
        label: s.shortTitle,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: "Industries",
      links: industries.map((i) => ({
        label: i.title,
        href: `/industries/${i.slug}`,
      })),
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Guides", href: "/resources/guides" },
        { label: "Academy", href: "/resources/academy" },
        { label: "Tools & Templates", href: "/resources/tools" },
      ],
    },
    {
      title: "Locations",
      links: [
        ...locations.map((l) => ({
          label: `${l.city}, ${l.stateAbbr}`,
          href: `/locations/${l.slug}`,
        })),
        { label: "All Locations", href: "/locations" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top: brand + newsletter */}
        <div className="mb-14 flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex shrink-0">
              <Image
                src="/brand/logo-inverted.png"
                alt="FTW Agency"
                width={1024}
                height={682}
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-body">
              {siteConfig.tagline} Marketing, automation, mobile apps, and
              software solutions — engineered to work together.
            </p>
            <div className="mt-5 space-y-1 text-sm text-body">
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
                  {siteConfig.email}
                </a>
                {" · "}
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="transition-colors hover:text-accent">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="w-full max-w-md">
            <p className="font-display text-sm font-semibold text-heading">
              Growth insights, monthly.
            </p>
            <p className="mt-1 text-sm text-body">
              Practical systems for generating leads and scaling operations. No fluff.
            </p>
            <form className="mt-4 flex gap-2" action="/contact">
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-[10px] border border-white/10 bg-bg px-4 py-2.5 text-sm text-heading outline-none transition-colors placeholder:text-body/50 focus:border-accent/50"
              />
              <button
                type="submit"
                className="rounded-[10px] bg-accent px-4 py-2.5 font-display text-sm font-semibold text-[#04222b] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-12 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow mb-4 !text-xs">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
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
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-body/80">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs capitalize text-body/80 transition-colors hover:text-accent"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
