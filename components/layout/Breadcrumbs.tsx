import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <JsonLd data={[breadcrumbSchema(all)]} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" strokeWidth={2} />}
              {last ? (
                <span className="text-body">{crumb.name}</span>
              ) : (
                <Link href={crumb.path} className="transition-colors hover:text-accent">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
