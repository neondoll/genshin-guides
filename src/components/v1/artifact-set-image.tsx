import { type CSSProperties, type FC, useMemo } from "react";

import ImageWithFallback from "../image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { ArtifactSetIcons, useArtifactSet } from "@/store/features/artifact-sets";
import { type ArtifactSetName } from "@/types/artifact-sets.types";
import { type Rarity, RarityGradients } from "@/types/rarities.types";

const ArtifactSetImage: FC<{
  className?: string;
  name: ArtifactSetName;
  style?: CSSProperties;
}> = ({ className, name, style }) => {
  const { artifactSet, loading } = useArtifactSet(name);

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

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} style={style} />;
  }

  return (
    <ImageWithFallback
      alt={name}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={src ?? fallbackSrc}
      style={style}
    />
  );
};

export default ArtifactSetImage;
