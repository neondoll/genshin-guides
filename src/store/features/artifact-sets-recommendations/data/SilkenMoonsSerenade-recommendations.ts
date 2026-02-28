import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats, StatsElementDmgBonus } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.AINO, best: true },
    { type: "other", title: "Любой персонаж в отряде с героями из Нод-Края" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
