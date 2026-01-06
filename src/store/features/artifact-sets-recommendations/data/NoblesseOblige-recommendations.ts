import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { Stats } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.BENNETT, best: true },
    { type: "character", name: CharacterNames.CHARLOTTE, best: true },
    { type: "character", name: CharacterNames.CHEVREUSE, best: true },
    { type: "character", name: CharacterNames.DIONA, best: true },
    { type: "character", name: CharacterNames.MONA, best: true },
    { type: "character", name: CharacterNames.ROSARIA, best: true },
    { type: "character", name: CharacterNames.XIANYUN, best: true },
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
