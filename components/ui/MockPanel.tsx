import Image from "next/image";
import { Star } from "lucide-react";
import type { Screenshot } from "@/lib/schemas";
import { cn } from "@/lib/utils";

/**
 * CMS screenshot placeholder: renders a stylized mock interface until real
 * imagery is uploaded. The `kind` field controls the mock layout.
 */
export function MockPanel({
  screenshot,
  className,
  muted = false,
}: {
  screenshot: Screenshot;
  className?: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "card-surface overflow-hidden",
        muted && "opacity-90 saturate-0",
        className,
      )}
    >
      {/* Browser/window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-bg/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 hidden h-4 flex-1 rounded-full bg-white/5 sm:block" />
      </div>
      <div className={cn(screenshot.src ? "relative h-44 overflow-hidden bg-black" : "p-4")}>
        {screenshot.src ? (
          <Image
            src={screenshot.src}
            alt={screenshot.alt ?? screenshot.title}
            width={1280}
            height={720}
            className="h-full w-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <MockBody kind={screenshot.kind} muted={muted} />
        )}
      </div>
      <div className="border-t border-white/5 px-4 py-2.5 text-xs text-muted">
        {screenshot.title}
      </div>
    </div>
  );
}

function MockBody({ kind, muted }: { kind: Screenshot["kind"]; muted?: boolean }) {
  const accent = muted ? "bg-white/20" : "bg-accent";
  const accentSoft = muted ? "bg-white/10" : "bg-accent/30";

  switch (kind) {
    case "website":
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-16 rounded-full bg-white/15" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-white/10" />
              <div className="h-2 w-8 rounded-full bg-white/10" />
              <div className={cn("h-2 w-10 rounded-full", accentSoft)} />
            </div>
          </div>
          <div className="space-y-2 py-3">
            <div className="h-4 w-3/4 rounded-full bg-white/20" />
            <div className="h-4 w-1/2 rounded-full bg-white/20" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
            <div className="flex gap-2 pt-2">
              <div className={cn("h-6 w-24 rounded-md", accent)} />
              <div className="h-6 w-20 rounded-md border border-white/15" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 rounded-lg bg-white/5" />
            ))}
          </div>
        </div>
      );
    case "dashboard":
      return (
        <div className="flex gap-3">
          <div className="hidden w-14 shrink-0 space-y-2 sm:block">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn("h-2 rounded-full", i === 0 ? accentSoft : "bg-white/10")}
              />
            ))}
          </div>
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg bg-white/5 p-2">
                  <div className={cn("mb-1.5 h-3 w-10 rounded-full", i === 0 ? accent : "bg-white/20")} />
                  <div className="h-1.5 w-12 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-1.5 flex-1 rounded-full bg-white/10" />
                  <div className="h-1.5 w-8 rounded-full bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "mobile":
      return (
        <div className="flex justify-center py-1">
          <div className="w-24 rounded-2xl border border-white/10 bg-bg p-2">
            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
            <div className={cn("mb-2 h-8 rounded-lg", accentSoft)} />
            <div className="space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-4 rounded-md bg-white/5" />
              ))}
            </div>
            <div className={cn("mt-2 h-5 rounded-md", accent)} />
          </div>
        </div>
      );
    case "chart":
      return (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2.5 w-20 rounded-full bg-white/15" />
            <div className={cn("h-2.5 w-12 rounded-full", accentSoft)} />
          </div>
          <div className="flex h-24 items-end gap-1.5">
            {[35, 42, 38, 55, 48, 62, 58, 74, 70, 85, 92, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={cn(
                  "flex-1 rounded-t-sm",
                  i >= 9 ? accent : "bg-white/10",
                )}
              />
            ))}
          </div>
        </div>
      );
    case "reviews":
      return (
        <div className="space-y-2.5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="rounded-lg bg-white/5 p-2.5">
              <div className="mb-1.5 flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    className={cn("h-3 w-3", muted ? "text-white/30" : "text-amber-400")}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
                <div className="ml-2 h-1.5 w-12 rounded-full bg-white/10" />
              </div>
              <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      );
    case "pipeline":
      return (
        <div className="grid grid-cols-3 gap-2">
          {[3, 2, 4].map((cards, col) => (
            <div key={col} className="space-y-1.5 rounded-lg bg-white/[0.03] p-1.5">
              <div className={cn("h-1.5 w-10 rounded-full", col === 2 ? accentSoft : "bg-white/15")} />
              {Array.from({ length: cards }).map((_, i) => (
                <div key={i} className="h-7 rounded-md border border-white/5 bg-white/5" />
              ))}
            </div>
          ))}
        </div>
      );
  }
}
