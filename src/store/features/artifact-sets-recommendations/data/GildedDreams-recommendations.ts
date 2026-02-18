import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.ALHAITHAM, best: true },
    { type: "character", name: CharacterNames.HU_TAO, best: true },
    { type: "character", name: CharacterNames.INEFFA, best: true },
    { type: "character", name: CharacterNames.LAUMA, best: true },
    { type: "character", name: CharacterNames.KUKI_SHINOBU, best: true },
    { type: "character", name: CharacterNames.RAIDEN_SHOGUN, best: true },
    { type: "character", name: CharacterNames.TIGHNARI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    circlet: [Stats.ELEMENTAL_MASTERY, ...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
