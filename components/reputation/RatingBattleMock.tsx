"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { BusinessProfile } from "@/content/reputation-showcase";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;
const STAR_COLOR = "#FBBC04";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sizeClass = size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);

        if (fill >= 1) {
          return (
            <Star key={i} className={cn(sizeClass, "fill-[#FBBC04] text-[#FBBC04]")} />
          );
        }

        if (fill > 0) {
          return (
            <span key={i} className={cn("relative inline-block shrink-0", sizeClass)}>
              <Star className={cn(sizeClass, "fill-slate-200 text-slate-200")} />
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star className={cn(sizeClass, "fill-[#FBBC04] text-[#FBBC04]")} />
              </span>
            </span>
          );
        }

        return (
          <Star key={i} className={cn(sizeClass, "fill-slate-200 text-slate-200")} />
        );
      })}
      <span
        className={cn(
          "tnum ml-1.5 font-bold text-slate-800",
          size === "lg" ? "text-xl" : "text-sm",
        )}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function DistributionBars({
  distribution,
  total,
  animate,
}: {
  distribution: [number, number, number, number, number];
  total: number;
  animate: boolean;
}) {
  const max = Math.max(...distribution, 1);

  return (
    <div className="space-y-1">
      {[5, 4, 3, 2, 1].map((stars) => {
        const count = distribution[stars - 1];
        const pct = (count / max) * 100;
        return (
          <div key={stars} className="flex items-center gap-2">
            <span className="w-3 text-[10px] font-medium text-slate-400">{stars}</span>
            <Star className="h-2.5 w-2.5 fill-[#FBBC04] text-[#FBBC04]" />
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: STAR_COLOR }}
                initial={{ width: 0 }}
                animate={{ width: animate ? `${pct}%` : 0 }}
                transition={{ duration: 0.8, delay: (5 - stars) * 0.08, ease: EASE }}
              />
            </div>
            <span className="tnum w-6 text-right text-[10px] text-slate-400">{count}</span>
          </div>
        );
      })}
      <p className="pt-1 text-right text-[10px] text-slate-400">{total} total reviews</p>
    </div>
  );
}

function ProfileCard({
  profile,
  highlight,
  dimmed,
  animate,
  badge,
}: {
  profile: BusinessProfile;
  highlight?: boolean;
  dimmed?: boolean;
  animate: boolean;
  badge?: string;
}) {
  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.55 : 1, scale: dimmed ? 0.97 : 1 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={cn(
        "rounded-xl border p-4 transition-shadow",
        highlight
          ? "border-emerald-300 bg-emerald-50/50 shadow-md ring-2 ring-emerald-200"
          : "border-slate-200 bg-white",
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-2 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
            highlight ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500",
          )}
        >
          {badge}
        </span>
      )}
      <p className="font-display text-sm font-semibold text-slate-900">{profile.name}</p>
      <div className="mt-2">
        <StarRating rating={profile.rating} size="lg" />
      </div>
      <div className="mt-3">
        <DistributionBars
          distribution={profile.distribution}
          total={profile.reviewCount}
          animate={animate}
        />
      </div>
    </motion.div>
  );
}

export function RatingBattleMock({
  beforeProfile,
  afterProfile,
  competitorProfile,
}: {
  beforeProfile: BusinessProfile;
  afterProfile: BusinessProfile;
  competitorProfile: BusinessProfile;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState<"before" | "after">("before");

  const showAfter = reduceMotion ? true : mode === "after";

  return (
    <div ref={ref} className="mx-auto w-full max-w-lg">
      <div className="mb-4 flex rounded-xl border border-slate-200 bg-slate-50 p-1">
        {(["before", "after"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "flex-1 rounded-lg py-2 text-xs font-semibold transition-all",
              mode === m
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            )}
          >
            {m === "before" ? "Before System" : "After 6 Months"}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <ProfileCard
          profile={competitorProfile}
          animate={isInView}
          dimmed={showAfter}
          badge="Competitor"
        />
        <ProfileCard
          profile={showAfter ? afterProfile : beforeProfile}
          animate={isInView}
          highlight={showAfter}
          badge={showAfter ? "You — Winning" : "You — Today"}
        />
      </div>

      {showAfter && isInView && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center"
        >
          <p className="text-xs font-semibold text-emerald-800">
            +365 reviews · +1.1 rating · Now outranking competitor
          </p>
        </motion.div>
      )}
    </div>
  );
}
