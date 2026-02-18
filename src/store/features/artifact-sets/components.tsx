import { type FC, useMemo } from "react";

import { useArtifactSet } from "./hooks";
import { ArtifactSetIcons } from "./icons";
import ImageWithFallback from "@/components/image-with-fallback";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { type ArtifactSetName } from "@/types/artifact-sets.types";
import { type Rarity, RarityGradients } from "@/types/rarities.types";

export const ArtifactSetCircletImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet, loading } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => ArtifactSetIcons[name]?.circlet, [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.circlet?.name ?? `${name} (circlet)`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.images.mihoyo_circlet ?? fallbackSrc}
    />
  );
};
export const ArtifactSetFlowerImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet, loading } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => ArtifactSetIcons[name]?.flower, [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.flower?.name ?? `${name} (flower)`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.images.mihoyo_flower ?? fallbackSrc}
    />
  );
};
export const ArtifactSetGobletImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet, loading } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => ArtifactSetIcons[name]?.goblet, [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.goblet?.name ?? `${name} (goblet)`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.images.mihoyo_goblet ?? fallbackSrc}
    />
  );
};
export const ArtifactSetImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
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
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={name}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={src ?? fallbackSrc}
    />
  );
};
export const ArtifactSetPlumeImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
  const { artifactSet, loading } = useArtifactSet(name);

  const fallbackSrc = useMemo(() => ArtifactSetIcons[name]?.plume, [name]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.plume?.name ?? `${name} (plume)`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.images.mihoyo_plume ?? fallbackSrc}
    />
  );
};
export const ArtifactSetSandsImage: FC<{ className?: string; name: ArtifactSetName }> = ({ className, name }) => {
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
