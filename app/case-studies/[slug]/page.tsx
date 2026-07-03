import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { MockPanel } from "@/components/ui/MockPanel";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import {
  getAllCaseStudies,
  getCaseStudy,
  getIndustry,
  getService,
} from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCaseStudies()
    .filter((c) => !["mobilehomecrm-cal-star", "farmhouse-collective", "visit-riverside", "vertex-services"].includes(c.slug))
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return buildMetadata({
    title: `${cs.title} | FTW Agency Case Study`,
    description: cs.summary,
    path: `/case-studies/${cs.slug}`,
  });
}

const NARRATIVE: { key: "challenge" | "strategy" | "execution"; title: string }[] = [
  { key: "challenge", title: "The Challenge" },
  { key: "strategy", title: "The Strategy" },
  { key: "execution", title: "The Execution" },
];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const industry = getIndustry(cs.industry);

  return (
    <>
      <PageHero
        eyebrow={`Case Study · ${cs.client}`}
        headline={cs.title}
        sub={cs.summary}
        crumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: cs.client, path: `/case-studies/${cs.slug}` },
        ]}
        showCtas={false}
      >
        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {industry && (
            <Link href={`/industries/${industry.slug}`}>
              <Badge tone="neutral">{industry.title}</Badge>
            </Link>
          )}
          {cs.services.map((sSlug) => {
            const service = getService(sSlug);
            return service ? (
              <Link key={sSlug} href={`/services/${service.slug}`}>
                <Badge tone="accent">{service.shortTitle}</Badge>
              </Link>
            ) : null;
          })}
        </Reveal>
      </PageHero>

      {/* Narrative + sticky metrics sidebar */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-14">
              {NARRATIVE.map((section, idx) => (
                <Reveal key={section.key}>
                  <p className="eyebrow mb-2">
                    {String(idx + 1).padStart(2, "0")} — {section.title}
                  </p>
                  <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {cs[section.key].map((paragraph, i) => (
                      <p key={i} className="leading-relaxed text-body">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sticky metrics sidebar */}
            <aside>
              <div className="card-surface sticky top-28 p-7">
                <p className="eyebrow mb-5">The Results</p>
                <div className="space-y-6">
                  {cs.results.map((result) => (
                    <div key={result.label} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                      <StatCounter
                        stat={result}
                        valueClassName="!text-3xl !text-success"
                      />
                      {result.before && result.after && (
                        <p className="tnum mt-1.5 text-xs text-muted">
                          {result.before} → <span className="text-success">{result.after}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Before / After */}
      <Section surface>
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Before & After"
            title="Drag to *Compare*"
            lede="The transformation, side by side."
          />
          <Reveal>
            <BeforeAfterSlider beforeAfter={cs.beforeAfter} />
          </Reveal>
        </Container>
      </Section>

      {/* Screenshots */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Inside the System" title="What We *Built*" />
          <RevealStagger className="grid gap-6 md:grid-cols-3">
            {cs.screenshots.map((shot) => (
              <RevealItem key={shot.title}>
                <MockPanel screenshot={shot} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* Testimonial */}
      <Section surface>
        <Container className="max-w-3xl">
          <Reveal>
            <TestimonialCard testimonial={cs.testimonial} />
          </Reveal>
        </Container>
      </Section>

      <CTASection
        headline="Ready for Results Like *These*?"
        sub="Book a strategy call and we'll map the system that gets your business its own case study."
      />
    </>
  );
}
