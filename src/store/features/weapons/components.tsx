import type { FC } from "react";

import { useWeapon } from "./hooks";
import { WeaponIcons } from "./icons";
import type { WeaponName } from "./types";
import ImageWithFallback from "@/components/image-with-fallback";
import { cn } from "@/lib/utils";
import { RARITY_GRADIENTS } from "@/types/base.types";

export const WeaponImage: FC<{ className?: string; name: WeaponName }> = ({ className, name }) => {
  const { weapon } = useWeapon(name);

  return weapon && (
    <ImageWithFallback
      alt={weapon.name}
      className={cn(RARITY_GRADIENTS[weapon.rarity || 0], className)}
      draggable={false}
      fallbackSrc={WeaponIcons[name]}
      src={weapon.images.mihoyo_icon}
    />
  );
};
