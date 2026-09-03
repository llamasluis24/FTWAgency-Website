import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { categorySlug, getAllArticles, getArticleCategories } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "All Blog Posts | FTW Agency",
  description:
    "The full FTW Agency blog archive — local SEO, AI visibility, automation, reputation, web design, and growth strategy for operators.",
  path: "/resources/blog/all",
});

export default function BlogArchivePage() {
  const articles = getAllArticles();
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        headline="All *Articles*."
        sub="Every playbook and insight we've published — newest first."
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name: "All Posts", path: "/resources/blog/all" },
        ]}
        showCtas={false}
      />

      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            <Link
              href="/resources/blog/all"
              className="rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent"
            >
              All
            </Link>
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
            {articles.map((article) => (
              <RevealItem key={article.slug}>
                <ArticleCard article={article} />
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </Section>

      <CTASection
        headline="Prefer Systems *Done For You*?"
        sub="Reading is free. So is the strategy call where we map your growth system."
      />
    </>
  );
}
