import { type CSSProperties, type FC, useMemo } from "react";

import { ImageWithFallback } from "./image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { useWeapon, WeaponImages } from "@/store/features/weapons";
import { RarityGradients } from "@/types/rarities.types";
import { type Weapon } from "@/types/weapons.types";

interface WeaponImagePropsTemplate {
  className?: string;
  style?: CSSProperties;
  weaponId: Weapon["id"];
}

interface WeaponImageProps extends WeaponImagePropsTemplate {
  weaponImage: Weapon["image"];
  weaponName: Weapon["name"];
  weaponRarity: Weapon["rarity"];
}

type WeaponImageLoadingProps = WeaponImagePropsTemplate;

export const WeaponImage: FC<WeaponImageProps> = ({
  className,
  style,
  weaponId,
  weaponImage,
  weaponName,
  weaponRarity,
}) => {
  const fallbackSrc = useMemo(() => WeaponImages[weaponId], [weaponId]);

  return (
    <ImageWithFallback
      alt={weaponName}
      className={cn(RarityGradients[weaponRarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={weaponImage ?? fallbackSrc}
      style={style}
    />
  );
};
export const WeaponImageLoading: FC<WeaponImageLoadingProps> = ({ className, style, weaponId }) => {
  const { loading, weapon } = useWeapon(weaponId);

  const fallbackSrc = useMemo(() => WeaponImages[weaponId], [weaponId]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} style={style} />;
  }

  return (
    <ImageWithFallback
      alt={weapon?.name ?? `weapon-${weaponId}`}
      className={cn(RarityGradients[weapon?.rarity ?? 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={weapon?.image ?? fallbackSrc}
      style={style}
    />
  );
};
