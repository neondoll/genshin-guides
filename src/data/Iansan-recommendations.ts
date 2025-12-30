import { ArtifactSetNames } from "@/store/features/artifact-sets";
import { CharacterRoleIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      {
        type: "complete",
        name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY,
        best: true,
        notes: [
          "Лучший набор для Иансан, так как восстановит ей энергию и увеличит элементальный урон основного персонажа.",
          "Стоит учитывать, что лучше всего комплект работает в команде с персонажами из Натлана.",
        ],
      },
      {
        type: "complete",
        name: ArtifactSetNames.NOBLESSE_OBLIGE,
        notes: [
          "Увеличит урон взрыва стихии Иансан и силу атаки отряду.",
          "Рекомендуется использовать, если другие члены отряда не носят данный комплект.",
        ],
      },
    ],
    stats: {
      sands: [{ name: "Сила атаки %" }, { name: "Восст. энергии" }],
      goblet: [{ name: "Сила атаки %" }],
      circlet: [{ name: "Сила атаки %" }],
      additional: [
        { name: "Восст. энергии", notes: ["Приоритетно", "от 160%"] },
        { name: "Сила атаки %", notes: ["от 2000", "2556 для 10 Ур. Взрыва стихии", "3000 для 13 Ур. Взрыва стихии"] },
        { name: "Шанс крит. попадания" },
        { name: "Крит. урон" },
      ],
    },
  },
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: "1 - 6" },
    { type: "combat2", priority: "Не качаем", referenceLevel: "1 - 6" },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  weapons: [
    { name: WeaponNames.SKYWARD_SPINE },
    { name: WeaponNames.TAMAYURATEI_NO_OHANASHI },
    { name: WeaponNames.FAVONIUS_LANCE },
  ],
} as CharacterRecommendations;
