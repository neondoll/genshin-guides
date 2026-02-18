import { VideoSourceIds } from "@/types/video-sources.types";
import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { ElementNames } from "@/types/elements.types";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CHASCA, best: true },
    { type: "character", name: CharacterNames.KINICH, best: true },
    { type: "character", name: CharacterNames.MAVUIKA, best: true },
    { type: "character", name: CharacterNames.MUALANI, best: true },
    { type: "character", name: CharacterNames.VARESA, best: true },
    { type: "traveler", elementName: ElementNames.PYRO, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
