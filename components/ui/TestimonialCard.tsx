import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
  /** @deprecated All cards use the homepage review style */
  featured?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative mx-auto flex w-full max-w-2xl flex-col rounded-3xl bg-transparent p-8",
        "md:max-w-3xl md:p-12 lg:max-w-4xl",
        className,
      )}
    >
      <div className="mb-8 flex items-start justify-between gap-6 md:mb-10">
        <div className="flex gap-1 pt-1" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-[#60d8b8] text-[#60d8b8] md:h-6 md:w-6"
              strokeWidth={0}
            />
          ))}
        </div>
        <Quote
          className="h-16 w-16 shrink-0 text-[#60d8b8]/30 md:h-20 md:w-20 lg:h-24 lg:w-24"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>

      <blockquote className="font-serif text-xl italic leading-[1.75] text-heading md:text-2xl md:leading-[1.8] lg:text-[1.75rem] lg:leading-[1.85]">
        {testimonial.quote}
      </blockquote>

      <hr className="my-8 border-0 border-t border-white/10 md:my-10" />

      <figcaption>
        <div className="text-lg font-bold text-heading md:text-xl">
          {testimonial.company}
        </div>
        {testimonial.role ? (
          <div className="mt-1.5 text-base text-body md:text-[1.0625rem]">
            {testimonial.role}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
