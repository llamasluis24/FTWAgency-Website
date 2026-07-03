import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArticleFrontmatterSchema, type Article, type Service } from "./schemas";

/**
 * Content access layer (server-side).
 *
 * This module is the ONLY place that touches the filesystem. Swapping the
 * local typed-content "CMS" for a headless CMS (Sanity, Contentful, etc.)
 * means rewriting this module and lib/collections.ts — templates never change.
 */

export * from "./collections";

/* ------------------------------- Blog ------------------------------- */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllArticles(): Article[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = ArticleFrontmatterSchema.parse(data);
      return {
        ...frontmatter,
        slug: file.replace(/\.mdx?$/, ""),
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getArticle(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticleCategories(): string[] {
  return [...new Set(getAllArticles().map((a) => a.category))];
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === category,
  );
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getRelatedArticlesForService(
  service: Service,
  limit = 3,
): Article[] {
  const all = getAllArticles();
  const keywords = [
    service.slug,
    service.category,
    ...service.shortTitle.toLowerCase().split(" "),
  ];
  const scored = all
    .map((a) => ({
      article: a,
      score: a.tags.filter((t) =>
        keywords.some((k) => t.includes(k) || k.includes(t)),
      ).length,
    }))
    .sort((x, y) => y.score - x.score);
  return scored.slice(0, limit).map((s) => s.article);
}
