import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Resources | FTW Agency",
  description:
    "Growth insights, guides, courses, and free tools — the FTW resource center for businesses that want to generate more leads, automate operations, and scale.",
  path: "/resources",
});

const HUBS = [
  {
    title: "Blog",
    href: "/resources/blog",
    icon: "MessageSquare",
    description:
      "Growth insights and playbooks: SEO, AIO, automation, reputation, and the systems thinking behind them.",
    status: "Live",
  },
  {
    title: "Guides",
    href: "/resources/guides",
    icon: "Layers",
    description:
      "Deep-dive guides on building growth systems — from local SEO domination to automation rollouts.",
    status: "Growing",
  },
  {
    title: "Academy",
    href: "/resources/academy",
    icon: "Crown",
    description:
      "Structured courses and training for teams that want to run growth systems in-house.",
    status: "Coming Soon",
  },
  {
    title: "Tools & Templates",
    href: "/resources/tools",
    icon: "Wrench",
    description:
      "Calculators, checklists, and templates — free resources that produce immediate value.",
    status: "Growing",
  },
];

export default function ResourcesPage() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        headline="Learn the *Systems* Behind the Growth."
        sub="Everything we know about generating leads, automating operations, and scaling — published openly. Built to support hundreds of future resources."
        crumbs={[{ name: "Resources", path: "/resources" }]}
        showCtas={false}
      />

      <Section>
        <Container>
          <RevealStagger className="grid gap-5 sm:grid-cols-2">
            {HUBS.map((hub) => (
              <RevealItem key={hub.href}>
                <Link
                  href={hub.href}
                  className="card-surface card-hover group flex h-full flex-col p-8"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                      <Icon name={hub.icon} className="h-6 w-6 text-accent" />
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                      {hub.status}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-heading transition-colors group-hover:text-accent">
                    {hub.title}
                  </h2>
                  <p className="mt-2 flex-1 text-body">{hub.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Explore {hub.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <SectionHeading eyebrow="Latest" title="Fresh From the *Blog*" />
          <RevealStagger className="grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <RevealItem key={article.slug}>
                <ArticleCard article={article} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
