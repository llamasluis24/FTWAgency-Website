import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  large = false,
}: {
  service: Service;
  large?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "card-surface card-hover group relative flex flex-col overflow-hidden p-6",
        large && "md:p-8",
      )}
    >
      {large && (
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-150" />
      )}
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
        <Icon name={service.icon} className="h-5 w-5 text-accent" />
      </div>
      <h3
        className={cn(
          "font-display font-semibold text-heading transition-colors group-hover:text-accent",
          large ? "text-xl md:text-2xl" : "text-lg",
        )}
      >
        {service.title}
      </h3>
      <p className={cn("mt-2 flex-1 text-sm leading-relaxed text-body", large && "md:text-base")}>
        {service.excerpt}
      </p>
      {large && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {service.subservices.slice(0, 4).map((sub) => (
            <li
              key={sub.title}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
            >
              {sub.title}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Explore
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </Link>
  );
}
