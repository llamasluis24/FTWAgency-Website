"use client";

import { Camera, CheckCircle2, ClipboardList, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { constructionMobileAppModules } from "@/content/industries/modules/construction-mobile-app-modules";
import { cn } from "@/lib/utils";

export function ConstructionFieldAppShowcase({
  content,
}: {
  content: typeof constructionMobileAppModules.showcase;
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
                        Northgate Field
                      </p>
                      <p className="text-sm font-semibold text-heading">{content.foremanName}</p>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15">
                      <HardHat className="h-3.5 w-3.5 text-accent" />
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] font-medium text-heading">{content.jobLabel}</p>
                  <p className="text-[10px] text-muted">{content.jobPhase}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-b border-white/5 p-3">
                  <div className="rounded-lg bg-white/[0.03] p-2.5 text-center">
                    <Camera className="mx-auto h-4 w-4 text-accent" />
                    <p className="tnum mt-1 text-lg font-bold text-heading">{content.photosToday}</p>
                    <p className="text-[9px] text-muted">Photos today</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] p-2.5 text-center">
                    <ClipboardList className="mx-auto h-4 w-4 text-accent" />
                    <p className="tnum mt-1 text-lg font-bold text-heading">
                      {content.punchCompleted}/{content.punchItems}
                    </p>
                    <p className="text-[9px] text-muted">Punch items</p>
                  </div>
                </div>

                <div className="space-y-3 p-4">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      Daily log
                    </p>
                    <div className="space-y-2">
                      {content.dailyLog.map((entry, i) => (
                        <motion.div
                          key={`${entry.time}-${entry.note}`}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06 }}
                          className="flex gap-2 text-[11px]"
                        >
                          <span className="tnum shrink-0 text-muted">{entry.time}</span>
                          <span className="text-body">{entry.note}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      Open punch items
                    </p>
                    {content.openItems.map((item, i) => (
                      <div
                        key={item.task}
                        className={cn(
                          "mb-2 flex items-center justify-between rounded-lg border border-white/5 px-3 py-2",
                          i === 0 ? "bg-white/[0.03]" : "opacity-70",
                        )}
                      >
                        <span className="text-xs text-body">{item.task}</span>
                        <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium text-accent">
                          {item.trade}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#60d8b8] py-3 text-sm font-semibold text-bg"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Add Progress Photo
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
