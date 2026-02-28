import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE], best: true },
      { ids: [ArtifactSetIds.NOBLESSE_OBLIGE] },
      { ids: [ArtifactSetIds.INSTRUCTOR] },
      { ids: [ArtifactSetIds.GILDED_DREAMS] },
    ],
    stats: {
      sands: [{ name: Stats.ENERGY_RECHARGE }, { name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.ELEMENTAL_MASTERY }],
      additional: [
        { name: Stats.ENERGY_RECHARGE, notes: ["от 160%", "~200%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 500"] },
      ],
    },
  },
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "1 - 6", overallLevel: 1 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "1 - 6", overallLevel: 1 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_AINO_IN_6_0, VideoSourceIds.TALENT_GAINS_HYDRO],
  weapons: [
    { id: WeaponIds.FLAME_FORGED_INSIGHT },
    { id: WeaponIds.MASTER_KEY },
    { id: WeaponIds.MAKHAIRA_AQUAMARINE },
    { id: WeaponIds.FAVONIUS_GREATSWORD },
    { id: WeaponIds.SACRIFICIAL_GREATSWORD },
  ],
} as CharacterRecommendations;
