import type { CharacterId } from "./characters.types";
import type { ElementName } from "./elements.types";
import type { Stat } from "./stats.types";
import type { VideoSourceId } from "./video-sources.types";

interface ArtifactSetCarrierRecommendationTemplate {
  best?: boolean;
  notes?: string[];
}

interface ArtifactSetCarrierCharacterRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "character";
  id: CharacterId;
}

interface ArtifactSetCarrierOtherRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "other";
  title: string;
}

interface ArtifactSetCarrierTravelerRecommendation extends ArtifactSetCarrierRecommendationTemplate {
  type: "traveler";
  elementName: ElementName;
}

export interface ArtifactSetRecommendations {
  carriers: Array<ArtifactSetCarrierCharacterRecommendation | ArtifactSetCarrierOtherRecommendation | ArtifactSetCarrierTravelerRecommendation>;
  preferredStats?: Record<"sands" | "goblet" | "circlet" | "additional", Stat[]>;
  videoSourceIds: VideoSourceId[];
}
