import { type FC, useMemo } from "react";

import type { Rarity } from "@/types/base.types";
import { cn } from "@/lib/utils";
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { useArtifactSet } from "./hooks";
import ImageWithFallback from "@/components/image-with-fallback";
import { ARTIFACT_SET_MIHOYO_ICONS } from "@/store/features/artifact-sets/enums.ts";

export const ArtifactSetImage: FC<{ className?: string; name: string }> = ({ className, name }) => {
  const { artifactSet } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => {
    const images = ARTIFACT_SET_MIHOYO_ICONS[name];

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
