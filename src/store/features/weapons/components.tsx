import type { FC } from "react";

import { cn } from "@/lib/utils";
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { useWeapon } from "./hooks";
import { WEAPON_MIHOYO_ICONS } from "./emuns";
import ImageWithFallback from "@/components/image-with-fallback";

export const WeaponImage: FC<{ className?: string; name: string }> = ({ className, name }) => {
  const { weapon } = useWeapon(name);

  return weapon && (
    <ImageWithFallback
      alt={weapon.name}
      className={cn(RARITY_GRADIENTS[weapon.rarity || 0], className)}
      draggable={false}
      fallbackSrc={WEAPON_MIHOYO_ICONS[name]}
      src={weapon.images.mihoyo_icon}
    />
  );
};
