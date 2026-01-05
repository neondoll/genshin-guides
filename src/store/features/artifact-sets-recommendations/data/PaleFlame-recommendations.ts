import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.EULA, best: true },
    { type: "character", name: CharacterNames.FREMINET, best: true },
    { type: "other", title: "Любой физ по рофлу" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.PHYSICAL_DMG_BONUS],
    circlet: [...STATS_CRIT],
    additional: [Stats.ATK_PERCENTAGE, ...STATS_CRIT],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
