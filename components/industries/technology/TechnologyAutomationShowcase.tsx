"use client";

import { useState } from "react";
import { MessageSquare, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import type { TechnologyAutomationModules } from "@/content/industries/technology-automation-modules";
import { WorkflowHubMock } from "@/components/automation/WorkflowHubMock";
import { FollowUpTimelineMock } from "@/components/automation/FollowUpTimelineMock";
import { SmsConversationMock } from "@/components/automation/SmsConversationMock";
import { cn } from "@/lib/utils";

export function TechnologyAutomationShowcase({
  content,
}: {
  content: TechnologyAutomationModules["showcase"];
}) {
  const [activePanel, setActivePanel] = useState<"workflow" | "nurture" | "sms">("workflow");

  return (
    <Section surface>
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} lede={content.lede} />

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {(
            [
              { id: "workflow" as const, label: "Workflow", icon: Workflow },
              { id: "nurture" as const, label: "Nurture Sequence", icon: Workflow },
              { id: "sms" as const, label: "Demo Response", icon: MessageSquare },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePanel(id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                activePanel === id
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : "border-white/10 text-muted hover:border-white/20 hover:text-body",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-bg shadow-[0_0_60px_rgba(0,212,255,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,212,255,0.12),transparent)]" />

          <div className="relative border-b border-white/10 bg-elevated px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="mx-auto rounded-md bg-white/5 px-4 py-1 text-[10px] text-muted">
                clearpath.io · automation hub
              </span>
            </div>
          </div>

          <div className="relative bg-white p-5 sm:p-8 [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_h4]:!text-black">
            {activePanel === "workflow" && (
              <WorkflowHubMock
                nodes={[...content.workflow.nodes]}
                metrics={[...content.workflow.metrics]}
              />
            )}

            {activePanel === "nurture" && (
              <FollowUpTimelineMock
                steps={[...content.timeline.steps]}
                title={content.timeline.title}
                subtitle={content.timeline.subtitle}
              />
            )}

            {activePanel === "sms" && (
              <SmsConversationMock messages={[...content.sms.messages]} />
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
