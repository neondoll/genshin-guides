import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds, CharacterNames } from "@/types/characters";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.LONG_NIGHTS_OATH,
  carriers: [
    { type: "character", id: CharacterIds.GAMING, best: true },
    { type: "character", id: CharacterIds.VARESA, best: true },
    { type: "character", id: CharacterIds.XIAO, best: true },
    { type: "other", title: `Дамагеры с ${CharacterNames.XIANYUN}` },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY],
    goblet: [Stats.ATK_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
