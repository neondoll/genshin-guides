import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { Stats, StatsCrit } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.DILUC, best: true },
    { type: "character", name: CharacterNames.GAMING, best: true },
    { type: "character", name: CharacterNames.HU_TAO, best: true },
    { type: "character", name: CharacterNames.KLEE, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.PYRO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
