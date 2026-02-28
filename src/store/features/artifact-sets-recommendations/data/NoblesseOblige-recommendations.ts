import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.BENNETT, best: true },
    { type: "character", id: CharacterIds.CHARLOTTE, best: true },
    { type: "character", id: CharacterIds.CHEVREUSE, best: true },
    { type: "character", id: CharacterIds.DIONA, best: true },
    { type: "character", id: CharacterIds.MONA, best: true },
    { type: "character", id: CharacterIds.ROSARIA, best: true },
    { type: "character", id: CharacterIds.XIANYUN, best: true },
    { type: "other", title: "Любой саппорт, использующий взрыв стихий" },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.HP_PERCENTAGE],
    circlet: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.HP_PERCENTAGE],
    additional: [Stats.ATK_PERCENTAGE, Stats.CRIT_RATE, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
