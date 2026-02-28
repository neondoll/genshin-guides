import { type CSSProperties, type FC, useMemo } from "react";

import { ImageWithFallback } from "./image-with-fallback";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { ArtifactSetImages, useArtifactSet } from "@/store/features/artifact-sets";
import { type ArtifactSet, type ArtifactSetDetail } from "@/types/artifact-sets.types";
import { type Rarity, RarityGradients } from "@/types/rarities.types";

interface ArtifactSetImagePropsTemplate {
  artifactSetId: ArtifactSet["id"];
  className?: string;
  style?: CSSProperties;
}

interface ArtifactSetDetailImageProps extends ArtifactSetImagePropsTemplate {
  artifactSetDetail: ArtifactSetDetail;
  artifactSetRarityList: ArtifactSet["rarityList"];
}

interface ArtifactSetImageProps extends ArtifactSetImagePropsTemplate {
  artifactSetImage: ArtifactSet["image"];
  artifactSetName: ArtifactSet["name"];
  artifactSetRarityList: ArtifactSet["rarityList"];
}

type ArtifactSetImageLoadingProps = ArtifactSetImagePropsTemplate;

export const ArtifactSetCircletImage: FC<ArtifactSetDetailImageProps> = ({
  artifactSetDetail,
  artifactSetId,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => ArtifactSetImages[artifactSetId]?.circlet, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetDetail.name}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetDetail.image ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetFlowerImage: FC<ArtifactSetDetailImageProps> = ({
  artifactSetDetail,
  artifactSetId,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => ArtifactSetImages[artifactSetId]?.flower, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetDetail.name}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetDetail.image ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetGobletImage: FC<ArtifactSetDetailImageProps> = ({
  artifactSetDetail,
  artifactSetId,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => ArtifactSetImages[artifactSetId]?.goblet, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetDetail.name}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetDetail.image ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetImage: FC<ArtifactSetImageProps> = ({
  artifactSetId,
  artifactSetImage,
  artifactSetName,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => {
    const images = ArtifactSetImages[artifactSetId];

    if (!images) {
      return undefined;
    }

    return images.flower || images.plume || images.sands || images.goblet || images.circlet;
  }, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetName}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetImage ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetImageLoading: FC<ArtifactSetImageLoadingProps> = ({ artifactSetId, className, style }) => {
  const { artifactSet, loading } = useArtifactSet(artifactSetId);

  const fallbackSrc = useMemo(() => {
    const images = ArtifactSetImages[artifactSetId];

    if (!images) {
      return undefined;
    }

    return images.flower || images.plume || images.sands || images.goblet || images.circlet;
  }, [artifactSetId]);

  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} style={style} />;
  }

  return (
    <ImageWithFallback
      alt={artifactSet?.name ?? `artifact-set-${artifactSetId}`}
      className={cn(RarityGradients[artifactSet ? Math.max(...artifactSet.rarityList) as Rarity : 0], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSet?.image ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetPlumeImage: FC<ArtifactSetDetailImageProps> = ({
  artifactSetDetail,
  artifactSetId,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => ArtifactSetImages[artifactSetId]?.plume, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetDetail.name}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetDetail.image ?? fallbackSrc}
      style={style}
    />
  );
};
export const ArtifactSetSandsImage: FC<ArtifactSetDetailImageProps> = ({
  artifactSetDetail,
  artifactSetId,
  artifactSetRarityList,
  className,
  style,
}) => {
  const fallbackSrc = useMemo(() => ArtifactSetImages[artifactSetId]?.sands, [artifactSetId]);

  return (
    <ImageWithFallback
      alt={artifactSetDetail.name}
      className={cn(RarityGradients[Math.max(...artifactSetRarityList) as Rarity], className)}
      draggable={false}
      fallbackSrc={fallbackSrc}
      src={artifactSetDetail.image ?? fallbackSrc}
      style={style}
    />
  );
};
