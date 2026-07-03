import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Section, Container } from "@/components/layout/Section";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { categorySlug, getAllArticles, getArticleCategories } from "@/lib/content";

const PREVIEW_COUNT = 6;

export const metadata: Metadata = buildMetadata({
  title: "Blog | FTW Agency",
  description:
    "Growth insights and playbooks: local SEO, AI optimization, business automation, reputation systems, and the strategy that connects them.",
  path: "/resources/blog",
});

export default function BlogIndexPage() {
  const articles = getAllArticles();
  const categories = getArticleCategories();
  const preview = articles.slice(0, PREVIEW_COUNT);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        headline="Growth *Insights*, Published Openly."
        sub="The playbooks, systems, and strategy we use to grow real businesses — written for operators, not marketers."
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
        ]}
        showCtas={false}
      />

      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            <span className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
              All
            </span>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/resources/blog/category/${categorySlug(category)}`}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-muted transition-all hover:border-white/25 hover:text-body"
              >
                {category}
              </Link>
            ))}
          </div>

          <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {preview.map((article) => (
              <RevealItem key={article.slug}>
                <ArticleCard article={article} />
              </RevealItem>
            ))}
          </RevealStagger>

          {articles.length > PREVIEW_COUNT && (
            <Reveal className="mt-12 flex justify-center">
              <Link
                href="/resources/blog/all"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-surface px-6 py-3 text-sm font-semibold text-heading transition-all hover:border-accent/50 hover:text-accent"
              >
                View all blogs
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Reveal>
          )}
        </Container>
      </Section>

      <CTASection
        headline="Prefer Systems *Done For You*?"
        sub="Reading is free. So is the strategy call where we map your growth system."
      />
    </>
  );
}
