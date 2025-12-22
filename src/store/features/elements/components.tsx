import type { FC } from "react";

import { useElement } from "@/store/features/elements/hooks";

export const ElementImage: FC<{ className?: string; name: string }> = ({ className, name }) => {
  const { element } = useElement(name);

  return element && (
    <img alt={element.name} className={className} draggable={false} src={element.images.wikia} />
  );
};
