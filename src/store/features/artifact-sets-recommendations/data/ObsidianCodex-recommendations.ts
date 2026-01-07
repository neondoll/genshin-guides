import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { ElementNames } from "../../elements";
import { VideoSourceIds } from "../../video-sources";
import { Stats, STATS_CRIT, STATS_ELEMENT_DMG_BONUS } from "@/types/base.types";

export default {
  carriers: [
    { type: "character", name: CharacterNames.CHASCA, best: true },
    { type: "character", name: CharacterNames.KINICH, best: true },
    { type: "character", name: CharacterNames.MAVUIKA, best: true },
    { type: "character", name: CharacterNames.MUALANI, best: true },
    { type: "character", name: CharacterNames.VARESA, best: true },
    { type: "traveler", elementName: ElementNames.PYRO, best: true },
  ],
  preferredStats: {
    sands: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE],
    goblet: [Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...STATS_ELEMENT_DMG_BONUS],
    circlet: [...STATS_CRIT],
    additional: [Stats.ATK_PERCENTAGE, Stats.ELEMENTAL_MASTERY, Stats.HP_PERCENTAGE, ...STATS_CRIT],
  },
  videoSourceIds: [VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025],
} as ArtifactSetRecommendations;
