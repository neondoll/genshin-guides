import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";
import { formatPercent } from "@/utils/format";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, best: true },
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
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
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [{ name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
