import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT } from "@/types/base.types";

export default {
  characters: [
    { name: CharacterNames.ALBEDO },
    { name: CharacterNames.NINGGUANG, best: true },
    { name: CharacterNames.NOELLE, best: true },
    { name: CharacterNames.YUN_JIN },
    { name: CharacterNames.ZHONGLI, best: true },
  ],
  preferredStats: {
    sands: [Stats.DEF_PERCENTAGE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.DEF_PERCENTAGE, Stats.HP_PERCENTAGE],
    circlet: [...STATS_CRIT, Stats.HP_PERCENTAGE],
    additional: [...STATS_CRIT, Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS],
} as ArtifactSetRecommendations;
