import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats, StatsCrit } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.ALHAITHAM, best: true },
    { type: "character", id: CharacterIds.HU_TAO, best: true },
    { type: "character", id: CharacterIds.INEFFA, best: true },
    { type: "character", id: CharacterIds.LAUMA, best: true },
    { type: "character", id: CharacterIds.KUKI_SHINOBU, best: true },
    { type: "character", id: CharacterIds.RAIDEN_SHOGUN, best: true },
    { type: "character", id: CharacterIds.TIGHNARI, best: true },
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
