import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING,
  carriers: [
    { type: "character", id: CharacterIds.FLINS, best: true },
    { type: "character", id: CharacterIds.LAUMA, best: true },
    { type: "character", id: CharacterIds.NEFER, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
