import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";
import { formatPercent } from "@/utils/format";

export default {
  artifacts: {
    sets: [
      { type: "complete", id: ArtifactSetIds.EMBLEM_OF_SEVERED_FATE, best: true },
      { type: "complete", id: ArtifactSetIds.NOBLESSE_OBLIGE },
    ],
    stats: {
      sands: [
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.525)] },
        { name: Stats.ENERGY_RECHARGE, notes: [formatPercent(0.410)] },
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.030)] },
      ],
      goblet: [
        { name: Stats.HYDRO_DMG_BONUS, notes: [formatPercent(0.844)] },
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.108)] },
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.025)] },
      ],
      circlet: [
        { name: Stats.CRIT_RATE, notes: [formatPercent(0.650)] },
        { name: Stats.CRIT_DMG, notes: [formatPercent(0.258)] },
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.055)] },
      ],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["от 1400"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["от 220%"] },
      ],
    },
  },
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 10", overallLevel: 8 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "6 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [{ name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
