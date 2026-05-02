import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.HEART_OF_DEPTH,
  carriers: [
    { type: "character", id: CharacterIds.KAMISATO_AYATO, best: true },
    { type: "character", id: CharacterIds.TARTAGLIA, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.HYDRO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
