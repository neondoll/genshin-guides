import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps extends ComponentProps<"span">, VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

/* eslint-disable-next-line react-refresh/only-export-components */
export const badgeVariants = cva(
  [
    "inline-flex overflow-hidden shrink-0 gap-1 justify-center items-center px-2 py-0.5 w-fit text-xs font-medium",
    "whitespace-nowrap rounded-full border transition-[color,box-shadow] focus-visible:border-ring",
    "focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "[&>svg]:size-3 [&>svg]:pointer-events-none dark:aria-invalid:ring-destructive/40",
  ],
  {
    defaultVariants: { variant: "default" },
    variants: {
      variant: {
        default: "text-primary-foreground bg-primary border-transparent [a&]:hover:bg-primary/90",
        destructive: [
          "text-white bg-destructive border-transparent focus-visible:ring-destructive/20 [a&]:hover:bg-destructive/90",
          "dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        ],
        outline: "text-foreground [a&]:hover:text-accent-foreground [a&]:hover:bg-accent",
        secondary: "text-secondary-foreground bg-secondary border-transparent [a&]:hover:bg-secondary/90",
      },
    },
  },
);

export function Badge({ asChild = false, className, variant, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return <Comp className={cn(badgeVariants({ className, variant }))} data-slot="badge" {...props} />;
}
