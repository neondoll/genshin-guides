import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.GOROU, best: true },
    { type: "character", name: CharacterNames.MIKA, best: true },
    { type: "other", title: "Любой персонаж, независящий от своих статов" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.DEF_PERCENTAGE, Stats.ENERGY_RECHARGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.DEF_PERCENTAGE],
    circlet: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.DEF_PERCENTAGE],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
