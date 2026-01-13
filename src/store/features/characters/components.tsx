import { type FC, useMemo } from "react";

import { useCharacter } from "./hooks";
import { CharacterIcons } from "./icons";
import type { CharacterName } from "./types";
import ImageWithFallback from "@/components/image-with-fallback";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { RARITY_GRADIENTS } from "@/types/base.types";

export const CharacterImage: FC<{ className?: string; name: CharacterName }> = ({ className, name }) => {
  const { character, loading } = useCharacter(name);

  const fallbackSrc = useMemo(() => CharacterIcons[name], [name]);

  if (loading) {
    return <Skeleton className={cn(RARITY_GRADIENTS[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={name}
      className={cn(RARITY_GRADIENTS[character?.rarity || 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={character?.images.mihoyo_icon || fallbackSrc}
    />
  );
};
