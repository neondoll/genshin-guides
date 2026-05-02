import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.SONG_OF_DAYS_PAST,
  carriers: [
    { type: "character", id: CharacterIds.BAIZHU, best: true },
    { type: "character", id: CharacterIds.CHARLOTTE, best: true },
    { type: "character", id: CharacterIds.CHEVREUSE, best: true },
    { type: "character", id: CharacterIds.XIANYUN, best: true },
    { type: "character", id: CharacterIds.YAOYAO, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.HP_PERCENTAGE],
    circlet: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
