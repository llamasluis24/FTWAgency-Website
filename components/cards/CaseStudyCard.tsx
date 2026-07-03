import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { getIndustry } from "@/lib/collections";
import type { CaseStudy } from "@/lib/schemas";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const industry = getIndustry(caseStudy.industry);
  const headline = caseStudy.results[0];

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="card-surface card-hover group flex h-full flex-col p-8"
    >
      <div className="mb-4 flex items-center justify-between">
        {industry && <Badge tone="neutral">{industry.title}</Badge>}
        <ArrowUpRight
          className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={2}
        />
      </div>
      {headline && (
        <div className="tnum mb-3 font-display text-5xl font-bold text-success">
          {headline.prefix}
          {headline.value}
          {headline.suffix}
        </div>
      )}
      <h3 className="font-display text-lg font-semibold leading-snug text-heading transition-colors group-hover:text-accent">
        {caseStudy.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{caseStudy.summary}</p>
      <p className="mt-5 border-t border-white/5 pt-4 text-xs text-muted">
        {caseStudy.client}
      </p>
    </Link>
  );
}
