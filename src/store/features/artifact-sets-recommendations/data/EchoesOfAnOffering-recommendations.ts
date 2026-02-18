import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CLORINDE, best: true },
    { type: "character", name: CharacterNames.KAMISATO_AYATO, best: true },
    { type: "character", name: CharacterNames.SKIRK, best: true },
    { type: "character", name: CharacterNames.YOIMIYA, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
