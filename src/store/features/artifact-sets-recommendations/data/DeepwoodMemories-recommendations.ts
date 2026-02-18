import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.BAIZHU, best: true },
    { type: "character", name: CharacterNames.KIRARA, best: true },
    { type: "character", name: CharacterNames.LAUMA, best: true },
    { type: "character", name: CharacterNames.NAHIDA, best: true },
    { type: "character", name: CharacterNames.XINGQIU, best: true },
    { type: "character", name: CharacterNames.YAOYAO, best: true },
    { type: "character", name: CharacterNames.ZHONGLI, best: true },
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
