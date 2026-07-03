"use client";

import { CheckCircle2, MapPin, Navigation, Package } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { transportationLogisticsMobileAppModules } from "@/content/industries/modules/transportation-logistics-mobile-app-modules";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TransportationDriverAppShowcase({
  content,
}: {
  content: typeof transportationLogisticsMobileAppModules.showcase;
}) {
  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />
        <Reveal>
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <div className="relative w-[280px] rounded-[2.25rem] border border-white/15 bg-bg p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(0,212,255,0.08)] sm:w-[300px]">
              <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/15" />

              <div className="overflow-hidden rounded-[1.75rem] bg-surface">
                <div className="border-b border-white/5 bg-elevated px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                        Velocity Couriers
                      </p>
                      <p className="text-sm font-semibold text-heading">{content.driverName}</p>
                    </div>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent">
                      Stop {content.stopsCompleted}/{content.stopsTotal}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-muted">{content.routeLabel}</p>
                </div>

                <div className="relative h-36 bg-gradient-to-br from-accent/20 via-bg to-emerald-500/10">
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 280 144" aria-hidden>
                    <motion.path
                      d="M 40 100 Q 80 60, 120 80 T 200 50 T 240 90"
                      fill="none"
                      stroke="rgba(0,212,255,0.5)"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: EASE }}
                    />
                    <motion.circle
                      cx="200"
                      cy="50"
                      r="6"
                      fill="#60d8b8"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    />
                    <circle cx="40" cy="100" r="4" fill="rgba(0,212,255,0.8)" />
                  </svg>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-bg/80 px-2 py-1 backdrop-blur-sm">
                    <Navigation className="h-3 w-3 text-accent" />
                    <span className="text-[10px] font-medium text-heading">En route · 8 min</span>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-3">
                    <div className="mb-2 flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <p className="text-sm font-semibold text-heading">
                          {content.currentStop.name}
                        </p>
                        <p className="text-[11px] text-muted">{content.currentStop.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted">Window: {content.currentStop.window}</span>
                      <span className="flex items-center gap-1 font-medium text-heading">
                        <Package className="h-3 w-3" />
                        {content.currentStop.pieces} pieces
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#60d8b8] py-3 text-sm font-semibold text-bg"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Mark Delivered
                  </button>

                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                      Up next
                    </p>
                    {content.nextStops.map((stop, i) => (
                      <div
                        key={stop.name}
                        className={cn(
                          "flex items-center justify-between rounded-lg border border-white/5 px-3 py-2",
                          i === 0 ? "bg-white/[0.03]" : "opacity-60",
                        )}
                      >
                        <span className="text-xs text-body">{stop.name}</span>
                        <span className="tnum text-[10px] text-muted">ETA {stop.eta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
