"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Search, Star, TrendingUp } from "lucide-react";
import { useIndustry } from "./IndustryContext";
import { cn } from "@/lib/utils";

/**
 * Glassmorphic floating UI panels over the hero: SEO rankings, review
 * growth, lead pipeline, and a live metric — content swaps with the
 * selected industry.
 */
export function FloatingPanels() {
  const { selected } = useIndustry();
  const reduceMotion = useReducedMotion();

  const float = (delay: number, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -10, 0] },
          transition: {
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div className="pointer-events-none absolute inset-0 hidden select-none lg:block" aria-hidden>
      {/* SEO rankings — top right */}
      <motion.div
        {...float(0.4, 7)}
        className="absolute right-[26%] top-[12%]"
      >
        <Panel entrance={2.6} className="w-52">
          <PanelHeader icon={<Search className="h-3 w-3" />} label="SEO Rankings" />
          {[
            { kw: "near me searches", pos: "#1", up: true },
            { kw: selected.examples.metricLabel.toLowerCase(), pos: "#2", up: true },
            { kw: "best in city", pos: "#3", up: false },
          ].map((row) => (
            <div key={row.kw} className="flex items-center justify-between py-1 text-[11px]">
              <span className="truncate text-body">{row.kw}</span>
              <span className={cn("tnum ml-2 font-semibold", row.up ? "text-success" : "text-accent")}>
                {row.pos} {row.up ? "↑" : ""}
              </span>
            </div>
          ))}
        </Panel>
      </motion.div>

      {/* Review growth — right middle */}
      <motion.div {...float(1.1, 8)} className="absolute right-[4%] top-[34%]">
        <Panel entrance={2.8} className="w-56">
          <PanelHeader
            icon={<Star className="h-3 w-3" />}
            label="Review Growth"
            badge="4.9 ★"
          />
          <p className="line-clamp-2 text-[11px] italic leading-snug text-body">
            {selected.examples.review}
          </p>
          <div className="mt-2 flex items-end gap-1">
            {[30, 45, 40, 60, 72, 88, 100].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h * 0.28}px` }}
                className={cn("flex-1 rounded-t-sm", i > 4 ? "bg-success" : "bg-white/10")}
              />
            ))}
          </div>
        </Panel>
      </motion.div>

      {/* Lead pipeline — bottom right */}
      <motion.div {...float(0.7, 6.5)} className="absolute bottom-[14%] right-[18%]">
        <Panel entrance={3.0} className="w-60">
          <PanelHeader
            icon={<TrendingUp className="h-3 w-3" />}
            label="Lead Pipeline"
            badge={selected.examples.metricValue}
          />
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 rounded-md bg-accent/10 px-2 py-1.5 text-[11px] text-heading">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              <span className="truncate">{selected.examples.lead}</span>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-[11px] text-body">
              <CalendarCheck className="h-3 w-3 shrink-0 text-success" />
              <span className="truncate">{selected.examples.appointment}</span>
            </div>
          </div>
        </Panel>
      </motion.div>
    </div>
  );
}

function Panel({
  children,
  className,
  entrance,
}: {
  children: React.ReactNode;
  className?: string;
  entrance: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: entrance, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("glass rounded-xl p-3.5 shadow-card", className)}
    >
      {children}
    </motion.div>
  );
}

function PanelHeader({
  icon,
  label,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
        <span className="text-accent">{icon}</span>
        {label}
      </span>
      {badge && (
        <span className="tnum rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-bold text-success">
          {badge}
        </span>
      )}
    </div>
  );
}
