import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.WANDERERS_TROUPE,
  carriers: [
    { type: "character", id: CharacterIds.GANYU, best: true },
    { type: "character", id: CharacterIds.KLEE, best: true },
    { type: "character", id: CharacterIds.SETHOS, best: true },
    { type: "character", id: CharacterIds.TIGHNARI, best: true },
    { type: "character", id: CharacterIds.YANFEI, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ELEMENTAL_MASTERY, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
