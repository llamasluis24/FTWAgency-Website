import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";

export interface ResourceItem {
  title: string;
  description: string;
  icon: string;
  tag: string;
  status: "Available" | "Coming Soon";
}

/**
 * Shared resource-library template (Guides, Academy, Tools): a structured
 * placeholder grid architected to scale to hundreds of future assets.
 */
export function ResourceLibrary({
  eyebrow,
  headline,
  sub,
  path,
  name,
  items,
}: {
  eyebrow: string;
  headline: string;
  sub: string;
  path: string;
  name: string;
  items: ResourceItem[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        headline={headline}
        sub={sub}
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name, path },
        ]}
        showCtas={false}
      />
      <Section>
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <RevealItem
                key={item.title}
                className="card-surface card-hover flex flex-col p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <Icon name={item.icon} className="h-5 w-5 text-accent" />
                  </span>
                  <Badge tone={item.status === "Available" ? "success" : "neutral"}>
                    {item.status}
                  </Badge>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.tag}
                </span>
                <h2 className="mt-1.5 font-display text-lg font-semibold text-heading">
                  {item.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
          <p className="mt-12 text-center text-sm text-muted">
            New resources publish regularly — this library is built to grow.
          </p>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
