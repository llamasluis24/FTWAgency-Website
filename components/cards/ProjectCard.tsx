import { Badge } from "@/components/ui/Badge";
import { MockPanel } from "@/components/ui/MockPanel";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/schemas";

/**
 * Project with display labels resolved server-side (keeps the content
 * layer out of client bundles when this card renders inside client
 * components like the portfolio filter grid).
 */
export interface ProjectCardData {
  project: Project;
  industryLabel: string;
  serviceLabels: string[];
}

export function ProjectCard({ data }: { data: ProjectCardData }) {
  const { project, industryLabel, serviceLabels } = data;
  const isReel = project.screenshots[0]?.kind === "reel";

  return (
    <article className="card-surface flex h-full flex-col overflow-hidden">
      <div
        className={cn(
          "border-b border-white/5 bg-bg/40 p-4",
          isReel && "flex justify-center py-6",
        )}
      >
        <MockPanel
          screenshot={project.screenshots[0]}
          className={cn("!border-0 !bg-transparent", isReel && "w-full max-w-[220px]")}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {industryLabel && <Badge tone="neutral">{industryLabel}</Badge>}
          {serviceLabels.slice(0, 2).map((label) => (
            <Badge key={label} tone="accent">
              {label}
            </Badge>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold text-heading">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
          {project.description}
        </p>
        <div className="mt-5 flex gap-6 border-t border-white/5 pt-4">
          {project.results.slice(0, 2).map((result) => (
            <div key={result.label}>
              <div className="tnum font-display text-xl font-bold text-success">
                {result.prefix}
                {result.value}
                {result.suffix}
              </div>
              <div className="text-xs text-muted">{result.label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
