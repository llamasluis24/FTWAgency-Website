"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { AioLlmSlide } from "@/content/aio-demo";
import type { TechnologyAioModules } from "@/content/industries/technology-aio-modules";
import { PlatformLogo } from "@/components/aio/PlatformLogo";
import { cn } from "@/lib/utils";

const themeBorder = {
  chatgpt: "border-[#10a37f]/25",
  gemini: "border-blue-400/25",
  claude: "border-[#d97757]/25",
  perplexity: "border-[#20b8cd]/25",
  copilot: "border-[#0078d4]/25",
  grok: "border-slate-300",
};

function SlideResponse({ slide }: { slide: AioLlmSlide }) {
  return (
    <div className={cn("rounded-xl border bg-white p-4 sm:p-5", themeBorder[slide.theme])}>
      <div className="mb-4 flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-100 px-4 py-2.5 text-sm text-slate-800">
          {slide.prompt}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <PlatformLogo theme={slide.theme} className="h-8 w-8 text-xs" />
          <span className="text-xs font-medium text-slate-500">{slide.platform}</span>
        </div>

        <p className="text-sm text-slate-600">
          Based on available information, here are strong options to consider:
        </p>

        <ol className="space-y-3">
          {slide.recommendations.map((rec, i) => (
            <li
              key={rec.name}
              className={cn(
                "rounded-lg border p-3",
                rec.highlight ? "border-cyan-200 bg-cyan-50/80" : "border-slate-200 bg-slate-50",
              )}
            >
              <div className="flex items-start gap-2">
                <span
                  className={cn(
                    "tnum mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
                    rec.highlight ? "bg-cyan-100 text-cyan-700" : "bg-slate-200 text-slate-600",
                  )}
                >
                  {i + 1}
                </span>
                <div>
                  <p
                    className={cn(
                      "font-display text-sm font-semibold",
                      rec.highlight ? "text-cyan-700" : "text-slate-900",
                    )}
                  >
                    {rec.name}
                    {rec.highlight && (
                      <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                        Recommended
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{rec.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {slide.citations && (
          <div className="mt-4 border-t border-slate-200 pt-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Sources
            </p>
            <div className="flex flex-wrap gap-2">
              {slide.citations.map((cite, i) => (
                <span
                  key={cite.source}
                  className="inline-flex items-center gap-1.5 rounded-md border border-[#20b8cd]/30 bg-[#20b8cd]/5 px-2 py-1 text-[10px] text-slate-700"
                >
                  <span className="tnum font-bold text-[#0e9ab0]">[{i + 1}]</span>
                  <span className="text-slate-600">{cite.label}</span>
                  <span className="text-[#0e9ab0]">· {cite.source}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {slide.whyAppeared && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
            <p className="mb-2 text-xs font-semibold text-emerald-700">
              Why{" "}
              {slide.recommendations.find((rec) => rec.highlight)?.name ?? "This Product"} Appeared
            </p>
            <ul className="grid gap-1.5 sm:grid-cols-2">
              {slide.whyAppeared.map((item) => (
                <li key={item.label} className="flex items-center gap-1.5 text-xs text-slate-700">
                  <Check className="h-3 w-3 shrink-0 text-emerald-600" strokeWidth={2.5} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export function TechnologyAioShowcase({
  content,
}: {
  content: TechnologyAioModules["showcase"];
}) {
  const slides = content.slides;
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const slide = slides[active];

  const scrollTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, slides.length - 1));
      setActive(next);
      const el = scrollRef.current?.children[next] as HTMLElement | undefined;
      el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    },
    [slides.length],
  );

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <Reveal className="mt-10 hidden lg:block">
          <div className="mb-6 flex flex-wrap gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active === i
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-white/10 text-muted hover:border-white/20 hover:text-body",
                )}
              >
                <PlatformLogo theme={s.theme} className="h-6 w-6 text-[10px]" />
                {s.platform}
              </button>
            ))}
          </div>

          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_60px_rgba(0,212,255,0.08)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-elevated px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-muted">ai-assistant-preview</span>
              </div>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => scrollTo(active - 1)}
                  disabled={active === 0}
                  className="rounded-lg border border-white/10 bg-surface p-2 text-muted transition-colors hover:border-accent/30 hover:text-accent disabled:opacity-30"
                  aria-label="Previous platform"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo(active + 1)}
                  disabled={active === slides.length - 1}
                  className="rounded-lg border border-white/10 bg-surface p-2 text-muted transition-colors hover:border-accent/30 hover:text-accent disabled:opacity-30"
                  aria-label="Next platform"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_280px]">
              <div className="bg-white p-5 sm:p-6">
                <SlideResponse slide={slide} />
              </div>
              <div className="border-t border-white/10 bg-surface p-5 lg:border-l lg:border-t-0">
                <div className="mb-3 flex items-center gap-2">
                  <PlatformLogo theme={slide.theme} className="h-8 w-8" />
                  <p className="font-display text-sm font-semibold text-heading">{slide.platform}</p>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  Why AIO matters
                </p>
                <p className="text-sm leading-relaxed text-body">{slide.explanation}</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className="mt-10 lg:hidden">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={(e) => {
              const container = e.currentTarget;
              const index = Math.round(container.scrollLeft / (container.offsetWidth * 0.88));
              if (index !== active && index >= 0 && index < slides.length) {
                setActive(index);
              }
            }}
          >
            {slides.map((s) => (
              <div
                key={s.id}
                className="w-[88vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-lg"
              >
                <div className="flex items-center gap-3 border-b border-white/10 bg-elevated px-4 py-3">
                  <PlatformLogo theme={s.theme} className="h-8 w-8" />
                  <p className="font-display text-sm font-semibold text-heading">{s.platform}</p>
                </div>
                <div className="bg-white p-4">
                  <SlideResponse slide={s} />
                  <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                    {s.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-center gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  active === i ? "w-6 bg-accent" : "w-1.5 bg-white/20",
                )}
                aria-label={`Go to ${s.platform}`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
