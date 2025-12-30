import { type FC, useMemo } from "react";

import { useArtifactSet } from "./hooks";
import { ArtifactSetIcons } from "./icons";
import type { ArtifactSetName } from "./types";
import ImageWithFallback from "@/components/image-with-fallback";
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { cn } from "@/lib/utils";
import type { Rarity } from "@/types/base.types";

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
