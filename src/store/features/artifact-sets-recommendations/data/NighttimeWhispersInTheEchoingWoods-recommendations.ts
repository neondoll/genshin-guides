import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS,
  carriers: [
    { type: "character", id: CharacterIds.NAVIA, best: true },
    { type: "character", id: CharacterIds.NINGGUANG, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.GEO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
