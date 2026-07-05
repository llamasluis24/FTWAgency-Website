import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section, Container } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { getLocationsBySlugs } from "@/lib/linking";

/** Links readers from case studies or blog posts to relevant city hubs. */
export function LocationMarketsStrip({
  locationSlugs,
  title = "Explore FTW in *Your Market*",
  surface = false,
}: {
  locationSlugs: string[];
  title?: string;
  surface?: boolean;
}) {
  const locations = getLocationsBySlugs(locationSlugs);
  if (locations.length === 0) return null;

  return (
    <Section surface={surface}>
      <Container>
        <SectionHeading eyebrow="Locations" title={title} />
        <RevealStagger className="flex flex-wrap gap-3">
          {locations.map((location) => (
            <RevealItem key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="card-surface card-hover inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-heading transition-colors hover:text-accent"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                {location.city}, {location.stateAbbr}
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
