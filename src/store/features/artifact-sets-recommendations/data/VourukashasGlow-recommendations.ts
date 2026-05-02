import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { Stats, StatsCrit } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.VOURUKASHAS_GLOW,
  carriers: [{ type: "character", id: CharacterIds.DEHYA, best: true }],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.PYRO_DMG_BONUS],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
