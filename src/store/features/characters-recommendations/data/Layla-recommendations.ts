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
      { type: "complete", name: ArtifactSetNames.TENACITY_OF_THE_MILLELITH, best: true },
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
      { type: "complete", name: ArtifactSetNames.BLIZZARD_STRAYER },
    ],
    stats: {
      sands: [
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.907)] },
        { name: Stats.ENERGY_RECHARGE, notes: [formatPercent(0.051)] },
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.025)] },
      ],
      goblet: [
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.902)] },
        { name: Stats.CRYO_DMG_BONUS, notes: [formatPercent(0.058)] },
        { name: Stats.ATK_PERCENTAGE, notes: [formatPercent(0.015)] },
      ],
      circlet: [
        { name: Stats.HP_PERCENTAGE, notes: [formatPercent(0.860)] },
        { name: Stats.CRIT_RATE, notes: [formatPercent(0.080)] },
        { name: Stats.CRIT_DMG, notes: [formatPercent(0.035)] },
      ],
      additional: [
        { name: Stats.HP_PERCENTAGE, notes: ["Приоритетно", "от 25000"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["от 120%"] },
        { name: Stats.CRIT_RATE, notes: ["от 50%"] },
        { name: Stats.CRIT_DMG, notes: ["от 120%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 250 (только при игре через реакции)"] },
      ],
    },
  },
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [{ name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
