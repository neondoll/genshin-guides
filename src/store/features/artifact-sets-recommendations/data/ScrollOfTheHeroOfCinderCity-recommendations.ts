import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { ElementNames } from "@/types/elements";
import { Stats, StatsElementDmgBonus } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { ArtifactSetIds } from "@/types/artifact-sets.ts";

export default {
  id: ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY,
  carriers: [
    { type: "character", id: CharacterIds.CHEVREUSE, best: true },
    { type: "character", id: CharacterIds.CITLALI, best: true },
    { type: "character", id: CharacterIds.IANSAN, best: true },
    { type: "character", id: CharacterIds.MAVUIKA, best: true },
    { type: "character", id: CharacterIds.ORORON, best: true },
    { type: "character", id: CharacterIds.XILONEN, best: true },
    { type: "traveler", elementName: ElementNames.PYRO, best: true },
    { type: "other", title: "..." },
  ],
  preferredStats: {
    sands: [Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...StatsElementDmgBonus],
    circlet: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    additional: [Stats.CRIT_RATE, Stats.ELEMENTAL_MASTERY, Stats.ENERGY_RECHARGE, Stats.HP_PERCENTAGE],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
