import type { FC } from "react";

import { useElement } from "./hooks";
import type { ElementName } from "./types";

export const ElementImage: FC<{ className?: string; name: ElementName }> = ({ className, name }) => {
  const { element } = useElement(name);

  return element && (
    <img alt={element.name} className={className} draggable={false} src={element.images.wikia} />
  );
};
