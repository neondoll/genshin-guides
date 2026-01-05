import { type FC, useMemo } from "react";

import { useArtifactSet } from "./hooks";
import { ArtifactSetIcons } from "./icons";
import type { ArtifactSetName } from "./types";
import ImageWithFallback from "@/components/image-with-fallback";
import { cn } from "@/lib/utils";
import { type Rarity, RARITY_GRADIENTS } from "@/types/base.types";

export const ArtifactSetCircletImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  return artifactSet?.circlet && (
    <ImageWithFallback
      alt={artifactSet.circlet.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={ArtifactSetIcons[name]?.circlet}
      src={artifactSet.images.mihoyo_circlet}
    />
  );
};
export const ArtifactSetFlowerImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  return artifactSet?.flower && (
    <ImageWithFallback
      alt={artifactSet.flower.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={ArtifactSetIcons[name]?.flower}
      src={artifactSet.images.mihoyo_flower}
    />
  );
};
export const ArtifactSetGobletImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  return artifactSet?.goblet && (
    <ImageWithFallback
      alt={artifactSet.goblet.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={ArtifactSetIcons[name]?.goblet}
      src={artifactSet.images.mihoyo_goblet}
    />
  );
};
export const ArtifactSetImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => {
    const images = ArtifactSetIcons[name];

    if (!images) {
      return undefined;
    }

    return images.flower || images.plume || images.sands || images.goblet || images.circlet;
  }, [name]);
  const src = useMemo(() => {
    if (!artifactSet) {
      return undefined;
    }

    return artifactSet.images.mihoyo_flower
      || artifactSet.images.mihoyo_plume
      || artifactSet.images.mihoyo_sands
      || artifactSet.images.mihoyo_goblet
      || artifactSet.images.mihoyo_circlet;
  }, [artifactSet]);

  return artifactSet && (
    <ImageWithFallback
      alt={artifactSet.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={src}
    />
  );
};
export const ArtifactSetPlumeImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  return artifactSet?.plume && (
    <ImageWithFallback
      alt={artifactSet.plume.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={ArtifactSetIcons[name]?.plume}
      src={artifactSet.images.mihoyo_plume}
    />
  );
};
export const ArtifactSetSandsImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  return artifactSet?.sands && (
    <ImageWithFallback
      alt={artifactSet.sands.name}
      className={cn(RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0], className)}
      draggable={false}
      fallbackSrc={ArtifactSetIcons[name]?.sands}
      src={artifactSet.images.mihoyo_sands}
    />
  );
};
