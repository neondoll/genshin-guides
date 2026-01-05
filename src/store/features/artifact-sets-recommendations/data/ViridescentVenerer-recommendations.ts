import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.JEAN, best: true },
    { type: "character", name: CharacterNames.KAEDEHARA_KAZUHA, best: true },
    { type: "character", name: CharacterNames.SUCROSE, best: true },
    { type: "other", title: "Любой Анемо" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    circlet: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
