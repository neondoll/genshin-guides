import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.GANYU, best: true },
    { type: "character", name: CharacterNames.KLEE, best: true },
    { type: "character", name: CharacterNames.SETHOS, best: true },
    { type: "character", name: CharacterNames.TIGHNARI, best: true },
    { type: "character", name: CharacterNames.YANFEI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ELEMENTAL_MASTERY, ...STATS_ELEMENT_DMG_BONUS],
    circlet: [...STATS_CRIT],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, ...STATS_CRIT],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
