import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.MAIDEN_BELOVED,
  carriers: [{ type: "other", title: "Вообще хиллеры, но не стоит" }],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE],
    circlet: [Stats.CRIT_RATE, Stats.HEALING_BONUS, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
