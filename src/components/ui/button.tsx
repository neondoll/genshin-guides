import type { ButtonProps } from "@primereact/types/primitive/button";
import type { VariantProps } from "class-variance-authority";
import { Button as PRButton } from "primereact/button";

import { buttonVariants } from "./button-variants";
import { cn } from "@/lib/utils";

function Button({
  className,
  iconOnly,
  raised,
  rounded,
  severity,
  size = "normal",
  variant,
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants>) {
  return (
    <PRButton
      className={cn(buttonVariants({ variant, size, severity, raised, rounded, iconOnly, className }))}
      iconOnly={iconOnly}
      raised={raised}
      rounded={rounded}
      severity={severity}
      size={size}
      variant={variant}
      {...props}
    />
  );
}

export { Button };
