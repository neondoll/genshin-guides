import { ArtifactSetIds } from "@/types/artifact-sets";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: ArtifactSetIds.BLIZZARD_STRAYER,
  carriers: [
    { type: "character", id: CharacterIds.GANYU, best: true },
    { type: "character", id: CharacterIds.KAMISATO_AYAKA, best: true },
    { type: "character", id: CharacterIds.KAEYA, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE],
    goblet: [Stats.CRYO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
