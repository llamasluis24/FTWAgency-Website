import { ServiceCard } from "@/components/cards/ServiceCard";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type {
  Article,
  CaseStudy,
  Industry,
  Location,
  Service,
} from "@/lib/schemas";

/**
 * Dynamic internal-linking components: every programmatic page renders
 * contextual related-content grids so no page is ever an orphan.
 */

function RelatedSection({
  eyebrow,
  title,
  children,
  columns = 3,
  surface = false,
  gridClassName,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  surface?: boolean;
  gridClassName?: string;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };
  return (
    <Section surface={surface}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <RevealStagger className={cn("grid auto-rows-fr gap-5", cols[columns], gridClassName)}>
          {children}
        </RevealStagger>
      </Container>
    </Section>
  );
}

export function RelatedServices({
  services,
  title = "Related *Services*",
  surface,
}: {
  services: Service[];
  title?: string;
  surface?: boolean;
}) {
  if (services.length === 0) return null;
  return (
    <RelatedSection eyebrow="Stronger Together" title={title} surface={surface}>
      {services.map((s) => (
        <RevealItem key={s.slug}>
          <ServiceCard service={s} />
        </RevealItem>
      ))}
    </RelatedSection>
  );
}

export function RelatedIndustries({
  industries,
  title = "Industries We *Serve*",
  surface,
}: {
  industries: Industry[];
  title?: string;
  surface?: boolean;
}) {
  if (industries.length === 0) return null;

  const columns = Math.min(4, industries.length) as 2 | 3 | 4;
  const centerGrid = industries.length < 4;

  return (
    <RelatedSection
      eyebrow="Industries"
      title={title}
      columns={columns}
      surface={surface}
      gridClassName={centerGrid ? "mx-auto max-w-5xl" : undefined}
    >
      {industries.map((i) => (
        <RevealItem key={i.slug} className="h-full">
          <IndustryCard industry={i} />
        </RevealItem>
      ))}
    </RelatedSection>
  );
}

export function RelatedLocations({
  locations,
  title = "Markets We *Serve*",
  surface,
}: {
  locations: Location[];
  title?: string;
  surface?: boolean;
}) {
  if (locations.length === 0) return null;
  return (
    <RelatedSection eyebrow="Locations" title={title} surface={surface}>
      {locations.map((l) => (
        <RevealItem key={l.slug}>
          <LocationCard location={l} />
        </RevealItem>
      ))}
    </RelatedSection>
  );
}

export function RelatedArticles({
  articles,
  title = "From the *Blog*",
  surface,
}: {
  articles: Article[];
  title?: string;
  surface?: boolean;
}) {
  if (articles.length === 0) return null;
  return (
    <RelatedSection eyebrow="Insights" title={title} surface={surface}>
      {articles.map((a) => (
        <RevealItem key={a.slug}>
          <ArticleCard article={a} />
        </RevealItem>
      ))}
    </RelatedSection>
  );
}

export function RelatedCaseStudies({
  caseStudies,
  title = "Proven *Results*",
  surface,
}: {
  caseStudies: CaseStudy[];
  title?: string;
  surface?: boolean;
}) {
  if (caseStudies.length === 0) return null;
  return (
    <RelatedSection eyebrow="Case Studies" title={title} surface={surface}>
      {caseStudies.map((c) => (
        <RevealItem key={c.slug}>
          <CaseStudyCard caseStudy={c} />
        </RevealItem>
      ))}
    </RelatedSection>
  );
}
