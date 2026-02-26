import { type CSSProperties, type FC } from "react";

import { Skeleton } from "../ui/skeleton";
import { useElement } from "@/store/features/elements";
import { type ElementName } from "@/types/elements.types";

interface ElementImageProps {
  className?: string;
  name: ElementName;
  style?: CSSProperties;
}

export const ElementImage: FC<ElementImageProps> = ({ className, name, style }) => {
  const { element, loading } = useElement(name);

  if (loading) {
    return <Skeleton className={className} style={style} />;
  }

  return <img alt={name} className={className} draggable={false} src={element?.images.wikia} style={style} />;
};
