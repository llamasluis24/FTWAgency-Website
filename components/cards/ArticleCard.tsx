import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/lib/schemas";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const COVER_GRADIENTS: Record<string, string> = {
  cyan: "from-accent/30 via-accent/5",
  green: "from-success/30 via-success/5",
  violet: "from-violet-500/30 via-violet-500/5",
  amber: "from-amber-500/30 via-amber-500/5",
};

export function ArticleCard({ article }: { article: Article }) {
  const gradient = COVER_GRADIENTS[article.featuredImage] ?? COVER_GRADIENTS.cyan;
  const hasImage = article.featuredImage.startsWith("/");

  return (
    <Link
      href={`/resources/blog/${article.slug}`}
      className="card-surface card-hover group flex h-full flex-col overflow-hidden"
    >
      {hasImage ? (
        <div className="relative h-48 overflow-hidden border-b border-white/5 bg-black">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt ?? article.title}
            width={1280}
            height={720}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div
          className={cn(
            "relative h-40 border-b border-white/5 bg-gradient-to-br to-transparent",
            gradient,
          )}
        >
          <span className="absolute bottom-4 left-5 font-display text-5xl font-bold text-white/10">
            {article.category.slice(0, 1)}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <Badge tone="accent">{article.category}</Badge>
          <span className="text-xs text-muted">{formatDate(article.publishedAt)}</span>
        </div>
        <h3 className="font-display text-lg font-semibold leading-snug text-heading transition-colors group-hover:text-accent">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{article.excerpt}</p>
        <p className="mt-4 text-xs text-muted">Written by FTW Agency</p>
      </div>
    </Link>
  );
}
