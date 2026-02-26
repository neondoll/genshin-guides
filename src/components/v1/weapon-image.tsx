import { type CSSProperties, type FC, useMemo } from "react";

import { ImageWithFallback } from "./image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { useWeapon, WeaponIcons } from "@/store/features/weapons";
import { RarityGradients } from "@/types/rarities.types";
import { type WeaponName } from "@/types/weapons.types";

interface WeaponImageProps {
  className?: string;
  name: WeaponName;
  style?: CSSProperties;
}

export const WeaponImage: FC<WeaponImageProps> = ({ className, name, style }) => {
  const { loading, weapon } = useWeapon(name);

  const fallbackSrc = useMemo(() => WeaponIcons[name], [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} style={style} />;
  }

  return (
    <ImageWithFallback
      alt={name}
      className={cn(RarityGradients[weapon?.rarity ?? 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={weapon?.images.mihoyo_icon ?? fallbackSrc}
      style={style}
    />
  );
};
