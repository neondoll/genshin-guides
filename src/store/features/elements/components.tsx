import type { FC } from "react";

import { useElement } from "./hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { type ElementName } from "@/types/elements.types";

export const ElementImage: FC<{ className?: string; name: ElementName }> = ({ className, name }) => {
  const { element, loading } = useElement(name);

  if (loading) {
    return <Skeleton className={className} />;
  }

  return <img alt={name} className={className} draggable={false} src={element?.images.wikia} />;
};
