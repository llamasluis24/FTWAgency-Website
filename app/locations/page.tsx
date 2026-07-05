import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/PageHero";
import { LocationCard } from "@/components/cards/LocationCard";
import { CTASection } from "@/components/blocks/CTASection";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getPublishedLocations } from "@/lib/publish";

export const metadata: Metadata = buildMetadata({
  title: "Locations | FTW Agency",
  description:
    "FTW Agency builds growth systems for businesses across Southern California and nationwide — local market knowledge backed by scalable marketing and software systems.",
  path: "/locations",
});

export default function LocationsPage() {
  const locations = getPublishedLocations();

  return (
    <>
      <PageHero
        eyebrow="Locations"
        headline="Local Knowledge. *Scalable* Systems."
        sub="We combine on-the-ground market understanding with growth infrastructure that works anywhere. Explore the markets we serve."
        crumbs={[{ name: "Locations", path: "/locations" }]}
      />
      <Section>
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <RevealItem key={location.slug}>
                <LocationCard location={location} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>
      <CTASection
        headline="Don't See Your *Market*?"
        sub="Our growth systems serve businesses nationwide. Book a strategy call and we'll talk about your market specifically."
      />
    </>
  );
}
