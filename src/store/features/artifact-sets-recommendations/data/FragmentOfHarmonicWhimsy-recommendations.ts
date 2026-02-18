import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.ARLECCHINO, best: true },
    { type: "character", name: CharacterNames.CLORINDE, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.ELECTRO_DMG_BONUS, Stats.PYRO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
