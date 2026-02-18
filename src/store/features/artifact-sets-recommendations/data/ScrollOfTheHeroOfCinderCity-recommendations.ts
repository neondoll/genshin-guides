import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { ElementNames } from "@/types/elements.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CHEVREUSE, best: true },
    { type: "character", name: CharacterNames.CITLALI, best: true },
    { type: "character", name: CharacterNames.IANSAN, best: true },
    { type: "character", name: CharacterNames.MAVUIKA, best: true },
    { type: "character", name: CharacterNames.ORORON, best: true },
    { type: "character", name: CharacterNames.XILONEN, best: true },
    { type: "traveler", elementName: ElementNames.PYRO, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
