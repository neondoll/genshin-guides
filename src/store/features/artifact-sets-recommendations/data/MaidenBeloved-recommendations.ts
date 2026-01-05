import type { ArtifactSetRecommendations } from "../types";
import { VideoSourceIds } from "../../video-sources";
import { Stats } from "@/types/base.types";

export default {
  carriers: [{ type: "other", title: "Вообще хиллеры, но не стоит" }],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE],
    circlet: [Stats.CRIT_RATE, Stats.HEALING_BONUS, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
