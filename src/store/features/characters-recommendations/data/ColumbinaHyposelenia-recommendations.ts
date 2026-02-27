import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", id: ArtifactSetIds.SILKEN_MOONS_SERENADE, best: true },
      {
        type: "complete",
        id: ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON,
        best: "Является лучшим выбором с Инеффой для помощи с врагами Нод-Края",
      },
      { type: "complete", id: ArtifactSetIds.TENACITY_OF_THE_MILLELITH },
    ],
    stats: {
      sands: [{ name: Stats.HP_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.HP_PERCENTAGE, notes: ["Приоритетно"] }, { name: Stats.HYDRO_DMG_BONUS }],
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
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS}`,
      template: [
        { type: "character", id: CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.SUCROSE },
        ],
      ],
    },
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.NEFER}`,
      template: [
        { type: "character", id: CharacterIds.NEFER },
        { type: "character", id: CharacterIds.LAUMA },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.NAHIDA },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.DIONA },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
        ],
      ],
    },
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.ZIBAI}`,
      template: [
        { type: "character", id: CharacterIds.ZIBAI },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Герой" },
        { type: "character", id: CharacterIds.ILLUGA },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.GOROU },
          { type: "character", id: CharacterIds.ILLUGA },
        ],
      ],
    },
    {
      description: "Помощь с врагами Нод-Края",
      template: [
        { type: "other", title: "Герой" },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.CLORINDE },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.RAIDEN_SHOGUN },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.DURIN },
        ],
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.IANSAN },
        ],
        [
          { type: "character", id: CharacterIds.NAVIA },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "character", id: CharacterIds.FURINA },
        ],
        [
          { type: "character", id: CharacterIds.ARATAKI_ITTO },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.NEUVILLETTE },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.LAUMA },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.BENNETT },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.YELAN },
        ],
        [
          { type: "character", id: CharacterIds.HU_TAO },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.YELAN },
        ],
      ],
    },
    {
      description: "Гидро аппликация (не Нод-Край герои)",
      template: [
        { type: "character", id: CharacterIds.ARLECCHINO },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
      ],
    },
  ],
  keyConstellations: [2, 6],
  recommendedLevel: "90/90",
  signatureWeaponNames: [WeaponNames.NOCTURNES_CURTAIN_CALL],
  talents: [
    { type: "combat1", priority: "При необходимости", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_COLUMBINA_HYPOSELENIA_IN_6_3_AnimeCool,
    VideoSourceIds.GUIDE_TO_COLUMBINA_HYPOSELENIA_IN_6_3_MironMinMax,
  ],
  weapons: {
    "Лунный Заряд": [
      {
        name: WeaponNames.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.06,
        notes: ["Лучшее решение в любом случае"],
      },
      {
        name: WeaponNames.SACRIFICIAL_JADE,
        r: 5,
        percent: 1.01,
        notes: ["Неплох на пробудах, но не даёт восстановление"],
      },
      {
        name: WeaponNames.FAVONIUS_CODEX,
        best: "Лучшее доступное оружие",
        r: 5,
        percent: 1.00,
        notes: ["Самое удобное решение"],
      },
      { name: WeaponNames.RELIQUARY_OF_TRUTH, percent: 0.99 },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 0.99 },
      { name: WeaponNames.PROTOTYPE_AMBER, percent: 0.98, notes: ["Удобное решение, плюс даёт лечение"] },
      { name: WeaponNames.SURFS_UP, percent: 0.98 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 0.98 },
      { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.97 },
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, percent: 0.97 },
      { name: WeaponNames.JADEFALLS_SPLENDOR, percent: 0.97 },
      { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5, percent: 0.96 },
      { name: WeaponNames.EVERLASTING_MOONGLOW, percent: 0.96 },
    ],
    "Лунная Бутонизация": [
      {
        name: WeaponNames.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.08,
        notes: ["Лучшее решение в любом случае"],
      },
      {
        name: WeaponNames.SACRIFICIAL_JADE,
        r: 5,
        percent: 1.03,
        notes: ["Неплох на пробудах, но не даёт восстановление"],
      },
      { name: WeaponNames.RELIQUARY_OF_TRUTH, percent: 1.02 },
      { name: WeaponNames.SURFS_UP, percent: 1.02 },
      { name: WeaponNames.NIGHTWEAVERS_LOOKING_GLASS, percent: 1.02 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.02 },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 1.01 },
      {
        name: WeaponNames.PROTOTYPE_AMBER,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Удобное решение, плюс даёт лечение"],
      },
      {
        name: WeaponNames.FAVONIUS_CODEX,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Самое удобное решение"],
      },
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, percent: 1.00 },
      { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.99 },
      { name: WeaponNames.JADEFALLS_SPLENDOR, percent: 0.98 },
      { name: WeaponNames.EVERLASTING_MOONGLOW, percent: 0.98 },
    ],
    "Лунная кристаллизация": [
      {
        name: WeaponNames.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.11,
        notes: ["Лучшее решение в любом случае"],
      },
      {
        name: WeaponNames.SACRIFICIAL_JADE,
        r: 5,
        percent: 1.04,
        notes: ["Неплох на пробудах, но не даёт восстановление"],
      },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 1.01 },
      { name: WeaponNames.RELIQUARY_OF_TRUTH, percent: 1.01 },
      { name: WeaponNames.SURFS_UP, percent: 1.01 },
      {
        name: WeaponNames.PROTOTYPE_AMBER,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Удобное решение, плюс даёт лечение"],
      },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.00 },
      { name: WeaponNames.FAVONIUS_CODEX, percent: 0.99, notes: ["Самое удобное решение"] },
      { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.98 },
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, percent: 0.98 },
      { name: WeaponNames.JADEFALLS_SPLENDOR, percent: 0.98 },
      { name: WeaponNames.EVERLASTING_MOONGLOW, percent: 0.97 },
      { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5, percent: 0.96 },
    ],
    "Основной ДД": [
      {
        name: WeaponNames.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.21,
        notes: ["Лучшее решение в любом случае"],
      },
      { name: WeaponNames.RELIQUARY_OF_TRUTH, percent: 1.14 },
      { name: WeaponNames.SURFS_UP, percent: 1.07 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.06 },
      { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.01 },
      {
        name: WeaponNames.SACRIFICIAL_JADE,
        r: 5,
        percent: 1.00,
        notes: ["Неплох на пробудах, но не даёт восстановление"],
      },
      { name: WeaponNames.DAWNING_FROST, r: 5, percent: 1.00 },
      { name: WeaponNames.NIGHTWEAVERS_LOOKING_GLASS, percent: 0.99 },
      { name: WeaponNames.BLACKMARROW_LANTERN, r: 5, percent: 0.97 },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 0.97 },
      { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.97 },
      { name: WeaponNames.PROTOTYPE_AMBER, r: 5, percent: 0.96, notes: ["Удобное решение, плюс даёт лечение"] },
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, percent: 0.96 },
    ],
  },
} as CharacterRecommendations;
