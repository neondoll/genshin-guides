import { ArtifactSetNames } from "@/store/features/artifact-sets";
import { CharacterRoleIds } from "@/store/features/character-roles";
import { WeaponNames } from "@/store/features/weapons";
import { VideoSourceIds } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE, best: true },
      { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE },
    ],
    stats: {
      sands: [{ name: "Восст. энергии" }, { name: "HP %" }, { name: "Сила атаки %" }],
      goblet: [{ name: "HP %" }, { name: "Сила атаки %" }, { name: "Бонус Пиро урона" }],
      circlet: [{ name: "Бонус лечения" }, { name: "HP %" }, { name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "HP %", notes: ["Приоритетно", "от 25000"] },
        { name: "Восст. энергии", notes: ["Приоритетно", "от 220%"] },
        {
          name: "Шанс крит. попадания",
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { name: "Крит. урон", notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
      ],
    },
  },
  keyConstellations: [6],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.MISTSPLITTER_REFORGED, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.AQUILA_FAVONIA, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SKYWARD_BLADE, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SAPWOOD_BLADE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
