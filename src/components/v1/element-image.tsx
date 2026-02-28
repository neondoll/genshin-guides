import { type CSSProperties, type FC } from "react";

import { Skeleton } from "../ui/skeleton";
import { useElement } from "@/store/features/elements";
import { type Element } from "@/types/elements.types";

interface ElementImagePropsTemplate {
  className?: string;
  elementId: Element["id"];
  style?: CSSProperties;
}

interface ElementImageProps extends ElementImagePropsTemplate {
  elementImage: Element["image"];
  elementName: Element["name"];
}

type ElementImageLoadingProps = ElementImagePropsTemplate;

export const ElementImage: FC<ElementImageProps> = ({ className, elementImage, elementName, style }) => {
  return (
    <img alt={elementName} className={className} draggable={false} src={elementImage} style={style} />
  );
};
export const ElementImageLoading: FC<ElementImageLoadingProps> = ({ className, elementId, style }) => {
  const { element, loading } = useElement(elementId);

  if (loading) {
    return <Skeleton className={className} style={style} />;
  }

  return (
    <img
      alt={element?.name ?? `element-${elementId}`}
      className={className}
      draggable={false}
      src={element?.image}
      style={style}
    />
  );
};
