import type { ArtifactSetId } from "./artifact-sets";
import type { CharacterId } from "./characters";
import type { ElementName } from "./elements";
import type { Stat } from "./stats";
import type { VideoSourceId } from "./video-sources";

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
  id: ArtifactSetId;
  carriers?: Array<ArtifactSetCarrierCharacterRecommendation | ArtifactSetCarrierOtherRecommendation | ArtifactSetCarrierTravelerRecommendation>;
  preferredStats?: Record<"sands" | "goblet" | "circlet" | "additional", Stat[]>;
  videoSourceIds?: VideoSourceId[];
}
