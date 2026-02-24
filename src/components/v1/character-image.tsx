import { type FC, useMemo } from "react";

import ImageWithFallback from "../image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { CharacterIcons, useCharacter } from "@/store/features/characters";
import { type CharacterName } from "@/types/characters.types";
import { RarityGradients } from "@/types/rarities.types";

const CharacterImage: FC<{ className?: string; name: CharacterName }> = ({ className, name }) => {
  const { character, loading } = useCharacter(name);

  const fallbackSrc = useMemo(() => CharacterIcons[name], [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={name}
      className={cn(RarityGradients[character?.rarity ?? 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={character?.images.mihoyo_icon ?? fallbackSrc}
    />
  );
};

export default CharacterImage;
