import { type CSSProperties, type FC, useMemo } from "react";

import { ImageWithFallback } from "./image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { CharacterImages, useCharacter } from "@/store/features/characters";
import { type Character } from "@/types/characters.types";
import { RarityGradients } from "@/types/rarities.types";

interface CharacterImagePropsTemplate {
  characterId: Character["id"];
  className?: string;
  style?: CSSProperties;
}

interface CharacterImageProps extends CharacterImagePropsTemplate {
  characterImage: Character["image"];
  characterName: Character["name"];
  characterRarity: Character["rarity"];
}

type CharacterImageLoadingProps = CharacterImagePropsTemplate;

export const CharacterImage: FC<CharacterImageProps> = ({
  characterId,
  characterImage,
  characterName,
  characterRarity,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => CharacterImages[characterId], [characterId]);

  return (
    <ImageWithFallback
      alt={characterName}
      className={cn(RarityGradients[characterRarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={characterImage ?? fallbackSrc}
      style={style}
    />
  );
};
export const CharacterImageLoading: FC<CharacterImageLoadingProps> = ({ characterId, className, style }) => {
  const { character, loading } = useCharacter(characterId);

  const fallbackSrc = useMemo(() => CharacterImages[characterId], [characterId]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} style={style} />;
  }

  return (
    <ImageWithFallback
      alt={character?.name ?? `character-${characterId}`}
      className={cn(RarityGradients[character?.rarity ?? 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={character?.image ?? fallbackSrc}
      style={style}
    />
  );
};
