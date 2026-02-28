import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds, CharacterNames } from "@/types/characters.types";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.GAMING, best: true },
    { type: "character", id: CharacterIds.LYNEY, best: true },
    { type: "character", id: CharacterIds.NEUVILLETTE, best: true },
    { type: "character", id: CharacterIds.WRIOTHESLEY, best: true },
    { type: "other", title: `Любые дамагеры с ${CharacterNames.FURINA}` },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.ATK_PERCENTAGE, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2023, VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
