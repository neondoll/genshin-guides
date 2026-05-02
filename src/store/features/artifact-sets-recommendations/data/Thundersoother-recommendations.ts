import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.THUNDERSOOTHER,
  carriers: [{ type: "other", title: ":(" }],
  preferredStats: {
    sands: [],
    goblet: [],
    circlet: [],
    additional: [],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
