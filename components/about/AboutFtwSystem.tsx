"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AccentText } from "@/components/ui/AccentText";
import { Container, Section } from "@/components/layout/Section";
import type { AboutSystemNode } from "@/content/about";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function FlowNode({
  node,
  index,
  isLast,
  isRevenue,
}: {
  node: AboutSystemNode;
  index: number;
  isLast: boolean;
  isRevenue: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 16 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
        className={cn(
          "relative w-full max-w-sm rounded-2xl border px-6 py-5 text-center transition-shadow duration-500",
          isRevenue
            ? "border-success/40 bg-success/[0.08] shadow-[0_0_40px_rgba(46,212,122,0.15)]"
            : "border-white/10 bg-surface/80 hover:border-accent/25 hover:shadow-[0_0_32px_rgba(0,212,255,0.1)]",
        )}
      >
        {isRevenue && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(46,212,122,0.12),transparent)]"
            aria-hidden
          />
        )}
        <p
          className={cn(
            "relative font-display text-xl font-semibold md:text-2xl",
            isRevenue ? "text-success" : "text-heading",
          )}
        >
          {node.label}
        </p>
        {node.description && (
          <p className="relative mt-1.5 text-sm text-muted">{node.description}</p>
        )}
      </motion.div>

      {!isLast && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.08 + 0.15, ease: EASE }}
          className="flex flex-col items-center py-2 origin-top"
          aria-hidden
        >
          <div className="h-6 w-px bg-gradient-to-b from-accent/50 to-accent/20" />
          <ChevronDown className="h-4 w-4 text-accent/50" strokeWidth={2} />
        </motion.div>
      )}
    </div>
  );
}

export function AboutFtwSystem({
  eyebrow,
  title,
  lede,
  nodes,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  nodes: AboutSystemNode[];
}) {
  return (
    <Section surface>
      <Container className="max-w-3xl">
        <div className="mb-14 text-center md:mb-20">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="text-3xl font-semibold md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            <AccentText text={title} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">{lede}</p>
        </div>

        <div className="relative mx-auto max-w-sm">
          <div
            className="pointer-events-none absolute inset-x-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-accent/30 via-accent/10 to-success/30"
            aria-hidden
          />
          {nodes.map((node, index) => (
            <FlowNode
              key={node.label}
              node={node}
              index={index}
              isLast={index === nodes.length - 1}
              isRevenue={node.label === "Revenue"}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
