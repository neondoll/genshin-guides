import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.OCEAN_HUED_CLAM,
  carriers: [
    { type: "character", id: CharacterIds.BARBARA, best: true },
    { type: "character", id: CharacterIds.SANGONOMIYA_KOKOMI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE],
    circlet: [Stats.HEALING_BONUS, Stats.HP_PERCENTAGE],
    additional: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
