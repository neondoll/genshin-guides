import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CLORINDE, best: true },
    { type: "character", name: CharacterNames.CYNO, best: true },
    { type: "character", name: CharacterNames.KEQING, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ATK_PERCENTAGE, Stats.ELECTRO_DMG_BONUS, Stats.ELEMENTAL_MASTERY],
    circlet: [...STATS_CRIT],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, ...STATS_CRIT],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
