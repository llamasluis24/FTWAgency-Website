import Image from "next/image";
import { cn } from "@/lib/utils";
import { visitRiversideImages } from "@/content/case-studies/visit-riverside";

const HEIGHT = {
  xs: 22,
  sm: 28,
  md: 36,
  lg: 44,
} as const;

export function VisitRiversideLogo({
  size = "sm",
  className,
  priority,
}: {
  size?: keyof typeof HEIGHT;
  className?: string;
  priority?: boolean;
}) {
  const height = HEIGHT[size];

  return (
    <Image
      src={visitRiversideImages.logo}
      alt="Visit Riverside California"
      width={476}
      height={186}
      priority={priority}
      className={cn("w-auto object-contain object-left", className)}
      style={{ height }}
    />
  );
}
