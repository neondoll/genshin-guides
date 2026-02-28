import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.XINYAN, best: true },
    { type: "other", title: ":(" },
  ],
  preferredStats: { sands: [], goblet: [], circlet: [], additional: [] },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
