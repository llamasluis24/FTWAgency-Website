import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedArticles } from "@/components/blocks/Related";
import { CTASection } from "@/components/blocks/CTASection";
import { Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import { categorySlug, getAllArticles, getArticle } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    path: `/resources/blog/${article.slug}`,
    ogType: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => {
      const aScore =
        (a.category === article.category ? 2 : 0) +
        a.tags.filter((t) => article.tags.includes(t)).length;
      const bScore =
        (b.category === article.category ? 2 : 0) +
        b.tags.filter((t) => article.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, 3);

  return (
    <>
      <JsonLd data={[articleSchema(article)]} />

      {/* Article header */}
      <div className="bg-radial-accent border-b border-white/5 pb-12 pt-32 md:pt-40">
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Resources", path: "/resources" },
              { name: "Blog", path: "/resources/blog" },
              { name: article.title, path: `/resources/blog/${article.slug}` },
            ]}
          />
          <Reveal>
            <Link href={`/resources/blog/category/${categorySlug(article.category)}`}>
              <Badge tone="accent">{article.category}</Badge>
            </Link>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.12] md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 font-display text-xs font-bold text-accent">
                FTW
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-heading">
                  Written by FTW Agency
                </p>
                <p className="text-xs text-muted">{formatDate(article.publishedAt)}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* Article body */}
      <Container className="max-w-3xl py-16">
        <article className="prose-ftw !max-w-none text-body">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/5 pt-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </Container>

      <RelatedArticles articles={related} surface />

      <CTASection
        headline="Want This *Implemented*, Not Just Explained?"
        sub="Book a strategy call and we'll map how these systems apply to your business."
      />
    </>
  );
}
