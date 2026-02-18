import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.KUKI_SHINOBU, best: true },
    { type: "character", name: CharacterNames.RAIDEN_SHOGUN, best: true },
    { type: "character", name: CharacterNames.THOMA, best: true },
    { type: "other", title: `Драйверы ${CharacterNames.NILOU} отрядов` },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ELEMENTAL_MASTERY],
    circlet: [Stats.ELEMENTAL_MASTERY],
    additional: [Stats.ELEMENTAL_MASTERY],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
