import type { ComponentProps } from "react";

export interface ImageWithFallbackProps extends ComponentProps<"img"> {
  fallbackSrc?: string;
}
