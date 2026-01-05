import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.EULA, best: true },
    { type: "character", name: CharacterNames.FREMINET },
    { type: "character", name: CharacterNames.RAZOR },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [...STATS_ELEMENT_DMG_BONUS, Stats.ATK_PERCENTAGE],
    circlet: [...STATS_CRIT],
    additional: [...STATS_CRIT, Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023],
} as ArtifactSetRecommendations;
