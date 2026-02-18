import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.EULA, best: true },
    { type: "character", name: CharacterNames.FREMINET, best: true },
    { type: "other", title: "Любой физ по рофлу" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.PHYSICAL_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
