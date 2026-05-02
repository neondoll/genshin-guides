import { ArtifactSetIds } from "@/types/artifact-sets";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: ArtifactSetIds.BLOODSTAINED_CHIVALRY,
  carriers: [
    { type: "character", id: CharacterIds.XINYAN, best: true },
    { type: "other", title: ":(" },
  ],
  preferredStats: { sands: [], goblet: [], circlet: [], additional: [] },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
