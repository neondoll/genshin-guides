import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CITLALI, best: true },
    { type: "character", name: CharacterNames.KIRARA, best: true },
    { type: "character", name: CharacterNames.ZHONGLI, best: true },
    { type: "other", title: "Любой персонаж, независящий от своих статов" },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    circlet: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
