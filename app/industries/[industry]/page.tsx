import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { FAQSection } from "@/components/blocks/FAQSection";
import { CTASection } from "@/components/blocks/CTASection";
import { RelatedCaseStudies } from "@/components/blocks/Related";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { buildMetadata } from "@/lib/metadata";
import { getIndustryHeroImage } from "@/content/industry-hero-images";
import { testimonials } from "@/content/site";
import {
  enrichProject,
  getAllIndustries,
  getCaseStudiesByIndustry,
  getIndustry,
  getProjectsByIndustry,
  getService,
} from "@/lib/content";

interface Props {
  params: Promise<{ industry: string }>;
}

export function generateStaticParams() {
  return getAllIndustries().map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return buildMetadata({
    title: industry.meta.title,
    description: industry.meta.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const projects = getProjectsByIndustry(industry.slug).slice(0, 3);
  const caseStudies = getCaseStudiesByIndustry(industry.slug).slice(0, 3);
  const industryTestimonials = testimonials.filter(
    (t) => t.industry === industry.slug,
  );

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={`Growth Systems for ${industry.title}`}
        headline={industry.heroHeadline}
        sub={industry.heroSub}
        backgroundImage={getIndustryHeroImage(industry.slug)}
        crumbs={[
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />

      {/* Industry stats */}
      <Section className="!py-14">
        <Container>
          <Reveal className="card-surface grid gap-8 p-8 text-center sm:grid-cols-3 md:p-10">
            {industry.stats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Pain points */}
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="The Challenge"
            title={`What Holds ${industry.title} Businesses *Back*`}
          />
          <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industry.painPoints.map((point) => (
              <RevealItem key={point.title} className="card-surface flex flex-col items-center p-6 text-center">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
                </span>
                <h3 className="font-display text-base font-semibold text-heading">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{point.description}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      {/* The growth system */}
      <Section>
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow mb-3">The System</p>
            <h2 className="text-3xl font-semibold md:text-[2.5rem] md:leading-[1.12]">
              {industry.growthSystem.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-body">
              {industry.growthSystem.description}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Recommended service stack → combo pages */}
      <Section surface>
        <Container>
          <SectionHeading
            eyebrow="Recommended Stack"
            title={`The Services That Move ${industry.title} *Fastest*`}
          />
          <RevealStagger className="grid gap-4">
            {industry.serviceStack.map((item, i) => {
              const service = getService(item.service);
              if (!service) return null;
              return (
                <RevealItem key={item.service}>
                  <Link
                    href={`/industries/${industry.slug}/${service.slug}`}
                    className="card-surface card-hover group flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
                  >
                    <span className="tnum font-display text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon name={service.icon} className="h-5 w-5 text-accent" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-lg font-semibold text-heading transition-colors group-hover:text-accent">
                        {service.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-body">{item.reason}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                      {service.shortTitle} for {industry.title}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </Container>
      </Section>

      {/* Industry-relevant portfolio */}
      {projects.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Our Work"
              title={`${industry.title} Projects We've *Shipped*`}
            />
            <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <RevealItem key={project.slug}>
                  <ProjectCard data={enrichProject(project)} />
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      {/* Case studies */}
      <RelatedCaseStudies caseStudies={caseStudies} surface />

      {/* Industry testimonials */}
      {industryTestimonials.length > 0 && (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Testimonials"
              title={`What ${industry.title} Clients *Say*`}
            />
            <RevealStagger className="mx-auto grid max-w-4xl gap-5 md:grid-cols-1">
              {industryTestimonials.map((t) => (
                <RevealItem key={t.author}>
                  <TestimonialCard testimonial={t} />
                </RevealItem>
              ))}
            </RevealStagger>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <FAQSection faqs={industry.faqs} />

      {/* CTA */}
      <CTASection
        headline={`Ready to Grow Your *${industry.title}* Business?`}
        sub="Book a strategy call and we'll map the exact growth system for your market, your customers, and your operations."
      />
    </>
  );
}
