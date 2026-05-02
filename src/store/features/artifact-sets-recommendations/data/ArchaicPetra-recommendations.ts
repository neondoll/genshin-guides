import { ArtifactSetIds } from "@/types/artifact-sets";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: ArtifactSetIds.ARCHAIC_PETRA,
  carriers: [
    { type: "character", id: CharacterIds.ALBEDO, best: true },
    { type: "character", id: CharacterIds.NINGGUANG, best: true },
    { type: "character", id: CharacterIds.ZHONGLI, best: true },
    { type: "other", title: "Любой, если в отряде есть Гео" },
  ],
  preferredStats: {
    sands: [Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
