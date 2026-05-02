import { type FC, useState } from "react";

import type { ImageWithFallbackProps } from "./image-with-fallback.types";

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({ alt, fallbackSrc, src, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setHasError(false);
  }

  return (
    <img
      alt={alt}
      onError={() => setHasError(true)}
      src={hasError ? fallbackSrc : src}
      {...props}
    />
  );
};
