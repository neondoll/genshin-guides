import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats, StatsCrit } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.ALBEDO, best: true },
    { type: "character", id: CharacterIds.ARATAKI_ITTO, best: true },
    { type: "character", id: CharacterIds.CHIORI, best: true },
    { type: "character", id: CharacterIds.NOELLE, best: true },
  ],
  preferredStats: {
    sands: [Stats.DEF_PERCENTAGE],
    goblet: [Stats.DEF_PERCENTAGE, Stats.GEO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ENERGY_RECHARGE, Stats.DEF_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
