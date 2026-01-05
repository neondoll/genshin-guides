import type { ArtifactSetRecommendations } from "../types";
import { VideoSourceIds } from "../../video-sources";

export default {
  carriers: [{ type: "other", title: ":(" }],
  preferredStats: {
    sands: [],
    goblet: [],
    circlet: [],
    additional: [],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
