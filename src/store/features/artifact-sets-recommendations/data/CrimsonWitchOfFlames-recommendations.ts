import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  characters: [
    { name: CharacterNames.DILUC, best: true },
    { name: CharacterNames.HU_TAO, best: true },
    { name: CharacterNames.KLEE, best: true },
    { name: CharacterNames.YANFEI },
    { name: CharacterNames.YOIMIYA },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [...STATS_ELEMENT_DMG_BONUS, Stats.ATK_PERCENTAGE],
    circlet: [...STATS_CRIT],
    additional: [...STATS_CRIT, Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS],
} as ArtifactSetRecommendations;
