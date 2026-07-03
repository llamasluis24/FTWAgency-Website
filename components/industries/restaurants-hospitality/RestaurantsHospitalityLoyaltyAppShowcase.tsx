"use client";

import { Gift, MapPin, Star, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { restaurantsHospitalityMobileAppModules } from "@/content/industries/modules/restaurants-hospitality-mobile-app-modules";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function RestaurantsHospitalityLoyaltyAppShowcase({
  content,
}: {
  content: typeof restaurantsHospitalityMobileAppModules.showcase;
}) {
  const progress = Math.round((content.pointsBalance / content.pointsToReward) * 100);

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <div className="relative w-[280px] rounded-[2.25rem] border border-white/15 bg-bg p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(0,212,255,0.08)] sm:w-[300px]">
              <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/15" />

              <div className="overflow-hidden rounded-[1.75rem] bg-surface">
                <div className="border-b border-white/5 bg-gradient-to-br from-emerald-600/30 via-surface to-amber-500/10 px-4 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                        Harvest & Table
                      </p>
                      <p className="text-sm font-semibold text-heading">{content.guestName}</p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                      <UtensilsCrossed className="h-4 w-4 text-emerald-400" />
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-emerald-300">{content.memberTier}</p>
                </div>

                <div className="border-b border-white/5 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted">Points balance</p>
                      <p className="tnum font-display text-3xl font-bold text-heading">
                        {content.pointsBalance.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-muted">Next reward</p>
                      <p className="text-xs font-semibold text-amber-300">{content.nextReward}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: EASE }}
                    />
                  </div>
                  <p className="mt-1.5 text-[10px] text-muted">
                    {content.pointsToReward - content.pointsBalance} points to {content.nextReward.toLowerCase()}
                  </p>
                </div>

                <div className="space-y-2 border-b border-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Recent activity
                  </p>
                  {content.recentActivity.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                    >
                      <div>
                        <p className="text-xs font-medium text-heading">{item.label}</p>
                        <p className="text-[10px] text-muted">{item.date}</p>
                      </div>
                      <span
                        className={cn(
                          "tnum text-xs font-bold",
                          item.points.startsWith("+") ? "text-emerald-400" : "text-amber-400",
                        )}
                      >
                        {item.points}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                    Member perks
                  </p>
                  {content.perks.map((perk) => (
                    <div key={perk.label} className="flex items-center gap-2 text-xs text-body">
                      {perk.active ? (
                        <Star className="h-3.5 w-3.5 text-amber-400" fill="currentColor" />
                      ) : (
                        <Gift className="h-3.5 w-3.5 text-muted" />
                      )}
                      <span className={cn(!perk.active && "text-muted")}>{perk.label}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/5 bg-elevated px-4 py-3">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted">
                    <MapPin className="h-3 w-3 text-accent" />
                    {content.locations.join(" · ")}
                  </div>
                  <button
                    type="button"
                    className="mt-2 w-full rounded-lg bg-accent py-2.5 text-xs font-semibold text-bg"
                  >
                    Reserve a Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
