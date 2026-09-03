"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CampaignFaqItem } from "@/content/campaigns/campaign-faq";

export function CampaignFAQClient({ items }: { items: CampaignFaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-elevated/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${baseId}-faq-${index}`;
        const panelId = `${baseId}-faq-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-heading transition-colors hover:text-accent"
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-body"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
