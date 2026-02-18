import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.ALBEDO, best: true },
    { type: "character", name: CharacterNames.ARATAKI_ITTO, best: true },
    { type: "character", name: CharacterNames.CHIORI, best: true },
    { type: "character", name: CharacterNames.NOELLE, best: true },
  ],
  preferredStats: {
    sands: [Stats.DEF_PERCENTAGE],
    goblet: [Stats.DEF_PERCENTAGE, Stats.GEO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ENERGY_RECHARGE, Stats.DEF_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
