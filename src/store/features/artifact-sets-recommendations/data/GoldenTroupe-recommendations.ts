import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterNames } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.ALBEDO, best: true },
    { type: "character", name: CharacterNames.CHIORI, best: true },
    { type: "character", name: CharacterNames.ESCOFFIER, best: true },
    { type: "character", name: CharacterNames.FISCHL, best: true },
    { type: "character", name: CharacterNames.FURINA, best: true },
    { type: "character", name: CharacterNames.NAHIDA, best: true },
    { type: "character", name: CharacterNames.YAE_MIKO, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.DEF_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.DEF_PERCENTAGE, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.DEF_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
