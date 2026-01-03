import type { CharacterName } from "../characters";
import type { VideoSourceId } from "../video-sources";
import type { Stat } from "@/types/base.types";

export interface ArtifactSetRecommendations {
  characters: Array<{ name: CharacterName; best?: boolean; notes?: string[] }>;
  preferredStats: Record<"sands" | "goblet" | "circlet" | "additional", Stat[]>;
  videoSourceIds: VideoSourceId[];
}
