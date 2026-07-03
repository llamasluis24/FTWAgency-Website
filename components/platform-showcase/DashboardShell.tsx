import { cn } from "@/lib/utils";

export function DashboardShell({
  title,
  badge,
  children,
  className,
}: {
  title?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-elevated/90 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_60px_rgba(0,212,255,0.06)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/5 bg-bg/50 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          {title && (
            <span className="ml-2 hidden text-xs text-muted sm:inline">{title}</span>
          )}
        </div>
        {badge && (
          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
}
