import { ArtifactSetIds } from "@/types/artifact-sets";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: ArtifactSetIds.ECHOES_OF_AN_OFFERING,
  carriers: [
    { type: "character", id: CharacterIds.CLORINDE, best: true },
    { type: "character", id: CharacterIds.KAMISATO_AYATO, best: true },
    { type: "character", id: CharacterIds.SKIRK, best: true },
    { type: "character", id: CharacterIds.YOIMIYA, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
