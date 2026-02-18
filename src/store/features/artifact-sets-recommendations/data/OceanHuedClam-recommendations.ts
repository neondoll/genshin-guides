import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.BARBARA, best: true },
    { type: "character", name: CharacterNames.SANGONOMIYA_KOKOMI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE],
    circlet: [Stats.HEALING_BONUS, Stats.HP_PERCENTAGE],
    additional: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
