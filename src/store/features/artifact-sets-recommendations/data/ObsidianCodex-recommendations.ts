import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { ElementNames } from "@/types/elements";
import { Stats, StatsCrit, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.OBSIDIAN_CODEX,
  carriers: [
    { type: "character", id: CharacterIds.CHASCA, best: true },
    { type: "character", id: CharacterIds.KINICH, best: true },
    { type: "character", id: CharacterIds.MAVUIKA, best: true },
    { type: "character", id: CharacterIds.MUALANI, best: true },
    { type: "character", id: CharacterIds.VARESA, best: true },
    { type: "traveler", elementName: ElementNames.PYRO, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [...StatsCrit],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsCrit],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
