import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.SILKEN_MOONS_SERENADE, best: true },
      {
        type: "complete",
        name: ArtifactSetNames.AUBADE_OF_MORNINGSTAR_AND_MOON,
        best: "Является лучшим выбором с Инеффой для помощи с врагами Нод-Края",
      },
    ],
    stats: {
      sands: [{ name: Stats.HP_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.HP_PERCENTAGE }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.ENERGY_RECHARGE, notes: ["Приоритетно"] },
        { name: Stats.HP_PERCENTAGE, notes: ["Приоритетно"] },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ELEMENTAL_MASTERY },
      ],
    },
  },
  attackCombinations: ["Элем. навык (Накладывает статус; Наносит урон)", "Взрыв стихий (Даёт бонус урона)", "Отряд"],
  constellationOrSignatureWeapon: "С1 < Сигна",
  detachments: [
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS}`,
      template: [
        { type: "character", name: CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "character", name: CharacterNames.INEFFA },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS },
          { type: "character", name: CharacterNames.INEFFA },
          { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
          { type: "character", name: CharacterNames.SUCROSE },
        ],
      ],
    },
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterNames.NEFER}`,
      template: [
        { type: "character", name: CharacterNames.NEFER },
        { type: "character", name: CharacterNames.LAUMA },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.NEFER },
          { type: "character", name: CharacterNames.LAUMA },
          { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
          { type: "character", name: CharacterNames.NAHIDA },
        ],
        [
          { type: "character", name: CharacterNames.NEFER },
          { type: "character", name: CharacterNames.LAUMA },
          { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
          { type: "character", name: CharacterNames.DIONA },
        ],
        [
          { type: "character", name: CharacterNames.NEFER },
          { type: "character", name: CharacterNames.LAUMA },
          { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
          { type: "character", name: CharacterNames.KUKI_SHINOBU },
        ],
      ],
    },
    {
      description: "Помощь с врагами Нод-Края", template: [
        { type: "other", title: "Герой" },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
        { type: "character", name: CharacterNames.INEFFA },
        { type: "other", title: "Герой" },
      ],
    },
    {
      description: "Гидро аппликация (не Нод-Край герои)",
      template: [
        { type: "character", name: CharacterNames.ARLECCHINO },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
      ],
    },
  ],
  keyConstellations: [2, 6],
  signatureWeaponNames: [WeaponNames.NOCTURNES_CURTAIN_CALL],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_COLUMBINA_HYPOSELENIA_IN_6_3_AnimeCool],
  weapons: [
    { name: WeaponNames.NOCTURNES_CURTAIN_CALL, best: "Лучшее оружие", r: 1, notes: ["Лучшее решение в любом случае"] },
    { name: WeaponNames.FAVONIUS_CODEX, r: 5, notes: ["Самое удобное решение"] },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 5, notes: ["Неплох на пробудах, но не даёт восстановление"] },
    { name: WeaponNames.PROTOTYPE_AMBER, r: 5, notes: ["Удобное решение, плюс даёт лечение"] },
  ],
} as CharacterRecommendations;
