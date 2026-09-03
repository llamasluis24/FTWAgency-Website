import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/blocks/PageHero";
import { CTASection } from "@/components/blocks/CTASection";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";
import {
  categorySlug,
  getArticleCategories,
  getArticlesByCategory,
} from "@/lib/content";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getArticleCategories().map((c) => ({ category: categorySlug(c) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const articles = getArticlesByCategory(category);
  if (articles.length === 0) return {};
  const name = articles[0].category;
  return buildMetadata({
    title: `${name} Articles | FTW Agency Blog`,
    description: `Articles and playbooks on ${name.toLowerCase()} from the FTW Agency team.`,
    path: `/resources/blog/category/${category}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const articles = getArticlesByCategory(category);
  if (articles.length === 0) notFound();
  const name = articles[0].category;
  const categories = getArticleCategories();

  return (
    <>
      <PageHero
        eyebrow="Blog Category"
        headline={`*${name}*`}
        sub={`Every article we've published on ${name.toLowerCase()}.`}
        crumbs={[
          { name: "Resources", path: "/resources" },
          { name: "Blog", path: "/resources/blog" },
          { name, path: `/resources/blog/category/${category}` },
        ]}
        showCtas={false}
      />
      <Section>
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            <Link
              href="/resources/blog"
              className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-muted transition-all hover:border-white/25 hover:text-body"
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={`/resources/blog/category/${categorySlug(c)}`}
                className={
                  c === name
                    ? "rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent"
                    : "rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-muted transition-all hover:border-white/25 hover:text-body"
                }
              >
                {c}
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
      <CTASection />
    </>
  );
}
