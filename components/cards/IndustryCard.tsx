import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Industry } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function IndustryCard({
  industry,
  highlighted = false,
}: {
  industry: Industry;
  highlighted?: boolean;
}) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className={cn(
        "card-surface card-hover group flex h-full min-h-[11.5rem] flex-col p-6",
        highlighted && "border-accent/40 shadow-[0_0_32px_rgba(0,212,255,0.12)]",
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#60d8b8]/10">
          <Icon name={industry.icon} className="h-5 w-5 text-[#60d8b8]" />
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          strokeWidth={2}
        />
      </div>
      <h3 className="font-display text-base font-semibold text-heading transition-colors group-hover:text-accent">
        {industry.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-snug text-muted line-clamp-4">
        {industry.excerpt}
      </p>
    </Link>
  );
}
