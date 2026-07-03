"use client";

import { motion } from "framer-motion";
import { OpenClawAgentBubble } from "./OpenClawAgentBubble";

/**
 * Premium hero visual: agents routing leads → qualification → calendar →
 * workflows → business systems. CSS/SVG diagram — no stock robot imagery.
 */
export function AgentWorkflowVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur md:p-8 lg:mt-0"
    >
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-3">
        {/* Inbound channels */}
        <div className="space-y-2">
          <p className="eyebrow !text-[10px]">Inbound</p>
          {["Website form", "Phone / SMS", "Email"].map((label) => (
            <div
              key={label}
              className="rounded-lg border border-white/10 bg-elevated px-3 py-2 text-xs text-body"
            >
              {label}
            </div>
          ))}
        </div>

        <FlowArrow />

        {/* Agent core */}
        <div className="relative mx-auto w-[200px] shrink-0 rounded-xl border border-accent/30 bg-accent/5 p-5 text-center shadow-[0_0_40px_rgba(0,212,255,0.12)]">
          <OpenClawAgentBubble />
          <p className="font-display text-sm font-semibold text-heading">
            Qualification Agent
          </p>
          <p className="mt-1 text-[11px] text-muted">Powered by OpenClaw · Route · Respond · Book</p>
        </div>

        <FlowArrow />

        {/* Outputs */}
        <div className="space-y-2">
          <p className="eyebrow !text-[10px]">Connected Systems</p>
          {[
            { label: "CRM pipeline", tone: "text-accent" },
            { label: "Calendar booked", tone: "text-success" },
            { label: "Workflow triggered", tone: "text-accent" },
          ].map(({ label, tone }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3 py-2 text-xs"
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-current ${tone}`} />
              <span className="text-body">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating panels */}
      <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
        <MiniPanel title="Lead scored" value="Hot · Ready to book" />
        <MiniPanel title="Appointment" value="Thu 2:30 PM confirmed" />
        <MiniPanel title="Follow-up" value="Quote sent · Day 3 nurture" />
      </div>
    </motion.div>
  );
}

function FlowArrow() {
  return (
    <div className="hidden items-center justify-center md:flex" aria-hidden>
      <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
        <path
          d="M0 6h24M24 6l-4-4M24 6l-4 4"
          stroke="rgba(0,212,255,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function MiniPanel({ title, value }: { title: string; value: string }) {
  return (
    <div className="glass rounded-lg px-3 py-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
        {title}
      </p>
      <p className="mt-0.5 text-xs text-heading">{value}</p>
    </div>
  );
}
