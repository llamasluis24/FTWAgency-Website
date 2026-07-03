"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Camera,
  FileText,
  Globe,
  MapPin,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/layout/Section";
import { vertexChallenge } from "@/content/case-studies/vertex-services";
import { BlueprintGrid, SectionIntro, SteelPanel } from "./VertexChrome";

const BEFORE_ICONS = [Globe, FileText, Search, AlertCircle, Phone] as const;
const AFTER_ICONS = [Globe, MapPin, Camera, FileText, FileText, Phone] as const;

export function VertexChallengeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <BlueprintGrid className="opacity-40" />
      <Container className="relative">
        <Reveal>
          <SectionIntro
            eyebrow={vertexChallenge.eyebrow}
            headline={vertexChallenge.headline}
          />
          <div className="mt-8 max-w-3xl space-y-5">
            {vertexChallenge.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-[1.75] text-body md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <ComparisonColumn
              title="Before"
              variant="before"
              items={vertexChallenge.beforeItems}
              icons={BEFORE_ICONS}
              reduceMotion={!!reduceMotion}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ComparisonColumn
              title="After"
              variant="after"
              items={vertexChallenge.afterItems}
              icons={AFTER_ICONS}
              reduceMotion={!!reduceMotion}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ComparisonColumn({
  title,
  variant,
  items,
  icons,
  reduceMotion,
}: {
  title: string;
  variant: "before" | "after";
  items: readonly string[];
  icons: readonly (typeof BEFORE_ICONS)[number][];
  reduceMotion: boolean;
}) {
  const isAfter = variant === "after";

  return (
    <SteelPanel
      className={
        isAfter
          ? "border-green-500/30 bg-[#121821]/95 p-6 shadow-[0_0_40px_rgba(34,197,94,0.1)] md:p-8"
          : "border-red-500/25 bg-[#121821]/95 p-6 opacity-95 md:p-8"
      }
    >
      <div
        className={
          isAfter
            ? "mb-6 flex items-center gap-2 border-b border-green-500/20 pb-4"
            : "mb-6 flex items-center gap-2 border-b border-red-500/15 pb-4"
        }
      >
        {isAfter && <Sparkles className="h-4 w-4 text-green-500" />}
        <p className={isAfter ? "eyebrow !text-green-500" : "eyebrow !text-red-500"}>{title}</p>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => {
          const Icon = icons[i] ?? Search;
          return (
            <motion.li
              key={item}
              initial={reduceMotion ? false : { opacity: 0, x: isAfter ? 12 : -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className={
                isAfter
                  ? "flex items-center gap-3 rounded-lg border border-green-500/25 bg-green-500/[0.06] px-4 py-3"
                  : "flex items-center gap-3 rounded-lg border border-red-500/25 bg-red-500/[0.06] px-4 py-3"
              }
            >
              <span
                className={
                  isAfter
                    ? "flex h-8 w-8 items-center justify-center rounded-md bg-green-500/15 text-green-500"
                    : "flex h-8 w-8 items-center justify-center rounded-md bg-red-500/15 text-red-500"
                }
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-heading">{item}</span>
            </motion.li>
          );
        })}
      </ul>
    </SteelPanel>
  );
}
