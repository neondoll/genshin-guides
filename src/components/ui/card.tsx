import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6 py-6 text-card-foreground bg-card rounded-xl border shadow-sm", className)}
      data-slot="card"
      {...props}
    />
  );
}

export function CardAction({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("col-start-2 row-span-2 row-start-1 justify-self-end self-start", className)}
      data-slot="card-action"
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("px-6", className)} data-slot="card-content"{...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("text-sm text-muted-foreground", className)} data-slot="card-description" {...props} />;
}

export function CardFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center px-6 [.border-t]:pt-6", className)} data-slot="card-footer" {...props} />
  );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn([
        "grid grid-rows-[auto_auto] auto-rows-min gap-2 items-start px-6",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto] @container/card-header [.border-b]:pb-6",
        className,
      ])}
      data-slot="card-header"
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("font-semibold leading-none", className)} data-slot="card-title" {...props} />;
}
