import type { CharacterName } from "../characters";
import type { ElementName } from "../elements";
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

interface ArtifactSetCarrierTravelerRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "traveler";
  elementName: ElementName;
}

interface ArtifactSetCarrierRecommendationTemplate {
  best?: boolean;
  notes?: string[];
}

export interface ArtifactSetRecommendations {
  carriers: Array<ArtifactSetCarrierCharacterRecommendation | ArtifactSetCarrierOtherRecommendation | ArtifactSetCarrierTravelerRecommendation>;
  preferredStats: Record<"sands" | "goblet" | "circlet" | "additional", Stat[]>;
  videoSourceIds: VideoSourceId[];
}
