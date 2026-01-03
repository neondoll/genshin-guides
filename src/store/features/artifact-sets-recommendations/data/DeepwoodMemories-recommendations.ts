import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  characters: [
    { name: CharacterNames.BAIZHU, best: true },
    { name: CharacterNames.NAHIDA, best: true },
    { name: CharacterNames.YAOYAO, best: true },
    { name: CharacterNames.ZHONGLI, best: true },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [...STATS_ELEMENT_DMG_BONUS, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    circlet: [...STATS_CRIT, Stats.ELEMENTAL_MASTERY],
    additional: [...STATS_CRIT, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS],
} as ArtifactSetRecommendations;
