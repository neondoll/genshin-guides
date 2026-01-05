import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CITLALI, best: true },
    { type: "character", name: CharacterNames.FURINA, best: true },
    { type: "character", name: CharacterNames.LAYLA, best: true },
    { type: "character", name: CharacterNames.MONA, best: true },
    { type: "character", name: CharacterNames.SANGONOMIYA_KOKOMI, best: true },
    { type: "character", name: CharacterNames.ZHONGLI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE, ...STATS_ELEMENT_DMG_BONUS],
    circlet: [Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
