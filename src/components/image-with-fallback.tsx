import { type ComponentProps, type FC, useState } from "react";

interface ImageWithFallbackProps extends ComponentProps<"img"> {
  fallbackSrc?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ alt, fallbackSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
