import { type FC } from "react";

import { Skeleton } from "../ui/skeleton";
import { useElement } from "@/store/features/elements";
import { type ElementName } from "@/types/elements.types";

const ElementImage: FC<{ className?: string; name: ElementName }> = ({ className, name }) => {
  const { element, loading } = useElement(name);

  if (loading) {
    return <Skeleton className={className} />;
  }

  return <img alt={name} className={className} draggable={false} src={element?.images.wikia} />;
};

export default ElementImage;
