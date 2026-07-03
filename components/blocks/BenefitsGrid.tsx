import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section, Container } from "@/components/layout/Section";
import { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { IconPoint } from "@/lib/schemas";

export function BenefitsGrid({
  benefits,
  title = "What You *Get*",
  eyebrow = "Benefits",
  surface = true,
  iconTone = "accent",
}: {
  benefits: IconPoint[];
  title?: string;
  eyebrow?: string;
  surface?: boolean;
  iconTone?: "accent" | "ftw-green";
}) {
  const iconBg = iconTone === "ftw-green" ? "bg-[#60d8b8]/10" : "bg-accent/10";
  const iconColor = iconTone === "ftw-green" ? "text-[#60d8b8]" : "text-accent";

  return (
    <Section surface={surface}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <RevealItem key={benefit.title} className="card-surface card-hover p-6">
              <span className={cn("mb-4 flex h-11 w-11 items-center justify-center rounded-xl", iconBg)}>
                <Icon name={benefit.icon} className={cn("h-5 w-5", iconColor)} />
              </span>
              <h3 className="font-display text-base font-semibold text-heading">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{benefit.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
