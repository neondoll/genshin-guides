import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.ALBEDO, best: true },
    { type: "character", name: CharacterNames.ARATAKI_ITTO, best: true },
    { type: "character", name: CharacterNames.CHIORI, best: true },
    { type: "character", name: CharacterNames.NOELLE, best: true },
  ],
  preferredStats: {
    sands: [Stats.DEF_PERCENTAGE],
    goblet: [Stats.DEF_PERCENTAGE, Stats.GEO_DMG_BONUS],
    circlet: [...STATS_CRIT],
    additional: [Stats.ENERGY_RECHARGE, Stats.DEF_PERCENTAGE, ...STATS_CRIT],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
