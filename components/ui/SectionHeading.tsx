import { cn } from "@/lib/utils";
import { AccentText } from "./AccentText";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
        <AccentText text={title} />
      </h2>
      {lede && <p className="mt-4 text-lg text-body">{lede}</p>}
    </Reveal>
  );
}
