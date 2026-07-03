import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  surface = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  surface?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", surface && "bg-surface", className)}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
