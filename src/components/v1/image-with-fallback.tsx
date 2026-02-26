import { type ComponentProps, type FC, useEffect, useState } from "react";

interface ImageWithFallbackProps extends ComponentProps<"img"> {
  fallbackSrc?: string;
}

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({ alt, fallbackSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};
