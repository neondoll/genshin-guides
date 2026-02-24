import { type FC, useMemo } from "react";

import ImageWithFallback from "../image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { ArtifactSetIcons, useArtifactSet } from "@/store/features/artifact-sets";
import { type ArtifactSetName } from "@/types/artifact-sets.types";
import { type Rarity, RarityGradients } from "@/types/rarities.types";

const ArtifactSetSandsImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet, loading } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => ArtifactSetIcons[name]?.sands, [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.sands?.name ?? `${name} (sands)`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.images.mihoyo_sands ?? fallbackSrc}
    />
  );
};

export default ArtifactSetSandsImage;
