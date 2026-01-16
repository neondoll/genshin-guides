import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("bg-accent rounded-md animate-pulse", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
