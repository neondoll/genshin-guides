import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.EMILIE, best: true },
    { type: "character", name: CharacterNames.GANYU, best: true },
    { type: "character", name: CharacterNames.KINICH, best: true },
    { type: "character", name: CharacterNames.MUALANI, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ATK_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
