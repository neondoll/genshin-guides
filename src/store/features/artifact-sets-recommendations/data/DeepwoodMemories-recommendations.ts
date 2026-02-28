import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats, StatsElementDmgBonus } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.BAIZHU, best: true },
    { type: "character", id: CharacterIds.KIRARA, best: true },
    { type: "character", id: CharacterIds.LAUMA, best: true },
    { type: "character", id: CharacterIds.NAHIDA, best: true },
    { type: "character", id: CharacterIds.XINGQIU, best: true },
    { type: "character", id: CharacterIds.YAOYAO, best: true },
    { type: "character", id: CharacterIds.ZHONGLI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
