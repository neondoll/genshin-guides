import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats, StatsCrit } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.WANDERER, best: true },
    { type: "character", id: CharacterIds.XIAO, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.ANEMO_DMG_BONUS, Stats.ATK_PERCENTAGE],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
