import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/* eslint-disable-next-line react-refresh/only-export-components */
export const buttonVariants = cva(
  [
    "inline-flex shrink-0 gap-2 justify-center items-center text-sm font-medium whitespace-nowrap rounded-md",
    "outline-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "disabled:opacity-50 disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "[&_svg]:shrink-0 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "dark:aria-invalid:ring-destructive/40",
  ],
  {
    defaultVariants: { size: "default", variant: "default" },
    variants: {
      size: {
        "default": "px-4 py-2 h-9 has-[>svg]:px-3",
        "icon": "size-9",
        "icon-lg": "size-10",
        "icon-sm": "size-8",
        "lg": "px-6 h-10 rounded-md has-[>svg]:px-4",
        "sm": "gap-1.5 px-3 h-8 rounded-md has-[>svg]:px-2.5",
      },
      variant: {
        default: "text-primary-foreground bg-primary hover:bg-primary/90",
        destructive: [
          "text-white bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60",
          "dark:focus-visible:ring-destructive/40",
        ],
        ghost: "hover:text-accent-foreground hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        outline: [
          "bg-background border shadow-xs hover:text-accent-foreground hover:bg-accent dark:bg-input/30",
          "dark:border-input dark:hover:bg-input/50",
        ],
        secondary: "text-secondary-foreground bg-secondary hover:bg-secondary/80",
      },
    },
  },
);

export function Button({ asChild = false, className, size, variant, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return <Comp className={cn(buttonVariants({ className, size, variant }))} data-slot="button" {...props} />;
}
