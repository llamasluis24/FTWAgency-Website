import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import type { Service } from "@/lib/schemas";

/**
 * Section 2 — Services Overview as a bento grid: flagship services
 * (featured) get large tiles, the rest get compact tiles.
 */
export function ServicesBento({ services }: { services: Service[] }) {
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Every System Your Business Needs to *Grow*"
          lede="Ten interconnected services — designed to work as one growth engine, available wherever your biggest constraint is."
        />
        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Flagship tiles */}
          {featured.map((service) => (
            <RevealItem key={service.slug} className="md:col-span-1 lg:row-span-2">
              <ServiceCard service={service} large />
            </RevealItem>
          ))}
          {/* Compact tiles */}
          {rest.map((service) => (
            <RevealItem key={service.slug}>
              <ServiceCard service={service} />
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
