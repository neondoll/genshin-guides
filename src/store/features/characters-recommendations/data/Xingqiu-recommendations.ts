import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { formatPercent } from "@/utils/format";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, best: true },
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
    ],
    stats: {
      sands: [
        { name: "Сила атаки %", notes: [formatPercent(0.525)] },
        { name: "Восст. энергии", notes: [formatPercent(0.410)] },
        { name: "HP %", notes: [formatPercent(0.030)] },
      ],
      goblet: [
        { name: "Бонус Гидро урона", notes: [formatPercent(0.844)] },
        { name: "Сила атаки %", notes: [formatPercent(0.108)] },
        { name: "HP %", notes: [formatPercent(0.025)] },
      ],
      circlet: [
        { name: "Шанс крит. попадания", notes: [formatPercent(0.650)] },
        { name: "Крит. урон", notes: [formatPercent(0.258)] },
        { name: "Сила атаки %", notes: [formatPercent(0.055)] },
      ],
      additional: [
        { name: "Шанс крит. попадания", notes: ["Приоритетно", "от 60%"] },
        { name: "Крит. урон", notes: ["Приоритетно", "от 120%"] },
        { name: "Сила атаки %", notes: ["от 1400"] },
        { name: "Восст. энергии", notes: ["от 220%"] },
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
