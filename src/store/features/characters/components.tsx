import type { FC } from "react";

import { useCharacter } from "./hooks";
import { CharacterIcons } from "./icons";
import type { CharacterName } from "./types";
import ImageWithFallback from "@/components/image-with-fallback";
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { cn } from "@/lib/utils";

export const CharacterImage: FC<{ className?: string; name: CharacterName }> = ({ className, name }) => {
  const { character } = useCharacter(name);

  return character && (
    <ImageWithFallback
      alt={character.name}
      className={cn(RARITY_GRADIENTS[character.rarity || 0], className)}
      draggable={false}
      fallbackSrc={CharacterIcons[name]}
      src={character.images.mihoyo_icon}
    />
  );
};
