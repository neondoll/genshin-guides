import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.KUKI_SHINOBU, best: true },
    { type: "character", id: CharacterIds.RAIDEN_SHOGUN, best: true },
    { type: "character", id: CharacterIds.THOMA, best: true },
    { type: "other", title: `Драйверы ${CharacterIds.NILOU} отрядов` },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ELEMENTAL_MASTERY],
    circlet: [Stats.ELEMENTAL_MASTERY],
    additional: [Stats.ELEMENTAL_MASTERY],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
