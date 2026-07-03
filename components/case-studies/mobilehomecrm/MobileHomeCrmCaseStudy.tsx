import dynamic from "next/dynamic";
import Image from "next/image";
import { X } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { AccentText } from "@/components/ui/AccentText";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { SectionLoading } from "@/lib/section-loading";
import {
  calStarProblemIntro,
  calStarImages,
  CAL_STAR_NAME,
  mobilehomecrmCalStar,
  mobilehomecrmHeroEyebrow,
  mobilehomecrmHeroTags,
  mobilehomecrmMetrics,
  mobilehomecrmWorkflowStages,
} from "@/content/case-studies/mobilehomecrm-cal-star";

const load = (minHeight = 320) => () => <SectionLoading minHeight={minHeight} />;

const StorySection = dynamic(
  () => import("./StorySection").then((m) => ({ default: m.StorySection })),
  { loading: load(400) },
);
const BeforeAfterCards = dynamic(
  () => import("./BeforeAfterCards").then((m) => ({ default: m.BeforeAfterCards })),
  { loading: load(400) },
);
const SystemFeaturesGrid = dynamic(
  () => import("./SystemFeaturesGrid").then((m) => ({ default: m.SystemFeaturesGrid })),
  { loading: load(480) },
);

export function MobileHomeCrmCaseStudy() {
  const cs = mobilehomecrmCalStar;

  return (
    <>
      <PageHero
        surface
        eyebrow={mobilehomecrmHeroEyebrow}
        headline={cs.title}
        sub={cs.summary}
        crumbs={[
          { name: "Case Studies", path: "/case-studies" },
          { name: "Cal Star", path: `/case-studies/${cs.slug}` },
        ]}
        showCtas
        primaryCta={{ label: "See What Changed", href: "#the-problem" }}
        secondaryCta={{ label: "Explore Software Services", href: "/services/custom-software" }}
        visual={
          <div className="flex w-full items-center justify-center px-2 py-8 lg:min-h-[28rem] lg:px-6 lg:py-0">
            <Image
              src={calStarImages.logo}
              alt={CAL_STAR_NAME}
              width={1024}
              height={682}
              priority
              className="h-auto w-full max-w-md bg-transparent object-contain sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
            />
          </div>
        }
      >
        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {mobilehomecrmHeroTags.map((tag) => (
            <Badge key={tag} tone={tag === "Mobile Home Contractor" ? "accent" : "neutral"}>
              {tag}
            </Badge>
          ))}
        </Reveal>
      </PageHero>

      <Section className="pb-10 pt-0 md:pb-14">
        <Container>
          <RevealStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mobilehomecrmMetrics.map((metric) => (
              <RevealItem key={metric.value + metric.label}>
                <div className="card-surface h-full p-6 text-center">
                  <div className="tnum font-display text-3xl font-bold text-success md:text-4xl">
                    {metric.value}
                  </div>
                  {"sublabel" in metric && metric.sublabel && (
                    <p className="text-sm font-medium text-accent">{metric.sublabel}</p>
                  )}
                  {metric.label && (
                    <p className="mt-2 text-sm text-body">{metric.label}</p>
                  )}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section id="the-problem">
        <Container className="max-w-4xl">
          <SectionHeading
            align="left"
            eyebrow={calStarProblemIntro.eyebrow}
            title={calStarProblemIntro.headline}
            lede={calStarProblemIntro.lede}
            className="mx-0 max-w-3xl text-left"
          />
          <Reveal className="grid gap-3 sm:grid-cols-2">
            {calStarProblemIntro.painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-red-500/50 bg-[#121821] p-4 shadow-[0_0_24px_rgba(239,68,68,0.22)]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-500/15">
                  <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-body">{point}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <Section surface id="workflow">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="The Transformation"
            title="How Cal Star *Sells a Job Today*"
            lede="See what changed when FTW replaced their manual process with one custom system built around how Cal Star actually operates."
            className="mx-0 max-w-3xl text-left"
          />
          <div className="space-y-6 md:space-y-10">
            {mobilehomecrmWorkflowStages.map((stage, index) => (
              <StorySection key={stage.id} stage={stage} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container className="max-w-5xl">
          <Reveal className="mb-12 mx-auto max-w-3xl text-center md:mb-16">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <h2 className="text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
                <AccentText text="What Changed for *Cal Star*" />
              </h2>
              <Image
                src={calStarImages.logo}
                alt=""
                width={1024}
                height={682}
                aria-hidden
                className="h-14 w-auto shrink-0 object-contain sm:h-16 md:h-20"
              />
            </div>
            <p className="mt-4 text-lg text-body">
              Compare Cal Star&apos;s old manual process with the custom platform FTW built around
              their sales workflow.
            </p>
          </Reveal>
          <BeforeAfterCards />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What We Built"
            title="One Custom System for *Cal Star's* Workflow"
            lede="Every module was designed to remove manual steps from how Cal Star Mobile Home Construction sells, schedules, and completes jobs."
            className="mb-10 md:mb-12"
          />
          <SystemFeaturesGrid />
        </Container>
      </Section>

      <Section surface>
        <Container className="max-w-3xl">
          <Reveal>
            <TestimonialCard testimonial={cs.testimonial} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface px-6 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_120%,rgba(0,212,255,0.18),transparent)]" />
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl font-semibold md:text-5xl md:leading-[1.1]">
                  Ready to Build Software Around Your Business?
                </h2>
                <p className="mt-5 text-lg text-body">
                  FTW Agency builds custom platforms around how businesses like Cal Star Mobile
                  Home Construction actually sell, schedule, and operate — so teams close more work
                  with less manual effort.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Button href="/contact" size="lg" showArrow>
                    Schedule Strategy Call
                  </Button>
                  <Button href="/services/custom-software" variant="ghost" size="lg">
                    View Software Services
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
