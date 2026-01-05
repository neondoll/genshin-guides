import type { CharacterName } from "../characters";
import type { VideoSourceId } from "../video-sources";
import type { Stat } from "@/types/base.types";

interface ArtifactSetCarrierCharacterRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "character";
  name: CharacterName;
}

interface ArtifactSetCarrierOtherRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "other";
  title: string;
}

interface ArtifactSetCarrierRecommendationTemplate {
  best?: boolean;
  notes?: string[];
}

export interface ArtifactSetRecommendations {
  carriers: Array<ArtifactSetCarrierCharacterRecommendation | ArtifactSetCarrierOtherRecommendation>;
  preferredStats: Record<"sands" | "goblet" | "circlet" | "additional", Stat[]>;
  videoSourceIds: VideoSourceId[];
}
