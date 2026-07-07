import { AccentText } from "@/components/ui/AccentText";
import Link from "next/link";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { CaseStudyReelVideo } from "@/components/case-studies/rigo-demolition/CaseStudyReelVideo";
import {
  rigoDemolition,
  rigoDemolitionVideos,
  rigoPageContent,
} from "@/content/case-studies/rigo-demolition";
import { getIndustry, getService } from "@/lib/content";

const NARRATIVE = [
  { key: "challenge" as const, title: "The Challenge" },
  { key: "strategy" as const, title: "The Strategy" },
  { key: "execution" as const, title: "The Execution" },
];

export function RigoDemolitionCaseStudy() {
  const cs = rigoDemolition;
  const industry = getIndustry(cs.industry);

  return (
    <>
      <PageHero
        eyebrow={rigoPageContent.hero.eyebrow}
        headline={rigoPageContent.hero.headline}
        sub={rigoPageContent.hero.lede}
        crumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: cs.client, path: `/case-studies/${cs.slug}` },
        ]}
        showCtas={false}
      >
        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {industry ? (
            <Link href={`/industries/${industry.slug}`}>
              <Badge tone="neutral">{industry.title}</Badge>
            </Link>
          ) : null}
          {cs.services.map((serviceSlug) => {
            const service = getService(serviceSlug);
            return service ? (
              <Link key={serviceSlug} href={`/services/${service.slug}`}>
                <Badge tone="accent">{service.shortTitle}</Badge>
              </Link>
            ) : null;
          })}
          <Badge tone="neutral">Los Angeles, CA</Badge>
        </Reveal>
      </PageHero>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-10">
              {NARRATIVE.map((section, index) => (
                <Reveal key={section.key}>
                  <p className="eyebrow mb-2">
                    {String(index + 1).padStart(2, "0")} — {section.title}
                  </p>
                  <h2 className="mb-4 text-2xl font-semibold md:text-3xl">{section.title}</h2>
                  <div className="space-y-4">
                    {cs[section.key].map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="leading-relaxed text-body">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <aside>
              <div className="card-surface sticky top-28 space-y-6 p-7">
                <p className="eyebrow">Campaign Results</p>
                {cs.results.map((result) => (
                  <div key={result.label} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <StatCounter stat={result} valueClassName="!text-3xl !text-success" />
                  </div>
                ))}
                <div className="rounded-xl border border-white/8 bg-bg/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">Before</p>
                  <p className="mt-2 text-sm text-body">{cs.beforeAfter.before.caption}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">After</p>
                  <p className="mt-2 text-sm text-body">{cs.beforeAfter.after.caption}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <SectionHeading
            eyebrow={rigoPageContent.videoSection.eyebrow}
            title={rigoPageContent.videoSection.title}
            lede={rigoPageContent.videoSection.lede}
          />
          <RevealStagger className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {rigoDemolitionVideos.map((video) => (
              <RevealItem key={video.name}>
                <CaseStudyReelVideo
                  name={video.name}
                  location={video.location}
                  description={video.description}
                  src={video.src}
                  poster={video.poster}
                />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-3">{rigoPageContent.takeaway.eyebrow}</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              <AccentText text={rigoPageContent.takeaway.title} />
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">{rigoPageContent.takeaway.body}</p>
          </Reveal>
        </Container>
      </Section>

      <Section surface>
        <Container className="max-w-3xl">
          <Reveal>
            <TestimonialCard testimonial={cs.testimonial} />
          </Reveal>
        </Container>
      </Section>

      <CTASection
        headline="Ready to Build Local Buzz Like *Rigo*?"
        sub="Book a strategy call and we'll map a content campaign that makes your work visible — reel by reel, market by market."
      />
    </>
  );
}
