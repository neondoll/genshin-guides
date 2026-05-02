import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds, CharacterNames } from "@/types/characters";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.VERMILLION_HEREAFTER,
  carriers: [
    { type: "character", id: CharacterIds.XIAO, best: true },
    { type: "other", title: `Атк дамагеры с ${CharacterNames.FURINA}` },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
