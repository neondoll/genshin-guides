import type { FC } from "react";

import { CHARACTER_MIHOYO_ICONS } from "./enums";
import { cn } from "@/lib/utils";
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { useCharacter } from "./hooks";
import ImageWithFallback from "@/components/image-with-fallback";

export const CharacterImage: FC<{ className?: string; name: string }> = ({ className, name }) => {
  const { character } = useCharacter(name);

  return character && (
    <ImageWithFallback
      alt={character.name}
      className={cn(RARITY_GRADIENTS[character.rarity || 0], className)}
      draggable={false}
      fallbackSrc={CHARACTER_MIHOYO_ICONS[name]}
      src={character.images.mihoyo_icon}
    />
  );
};
