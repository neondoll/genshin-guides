import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE], best: true },
      {
        ids: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
        best: "Является лучшим выбором с Инеффой для помощи с врагами Нод-Края",
      },
      { ids: [ArtifactSetIds.TENACITY_OF_THE_MILLELITH] },
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
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.FLINS}`,
      template: [
        { type: "character", id: CharacterIds.FLINS },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.FLINS },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.SUCROSE },
        ],
      ],
    },
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.NEFER}`,
      template: [
        { type: "character", id: CharacterIds.NEFER },
        { type: "character", id: CharacterIds.LAUMA },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.NAHIDA },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.DIONA },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
        ],
      ],
    },
    {
      description: `Увеличение урона героев Нод-Края: ${CharacterIds.ZIBAI}`,
      template: [
        { type: "character", id: CharacterIds.ZIBAI },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "other", title: "Герой" },
        { type: "character", id: CharacterIds.ILLUGA },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.GOROU },
          { type: "character", id: CharacterIds.ILLUGA },
        ],
      ],
    },
    {
      description: "Помощь с врагами Нод-Края",
      template: [
        { type: "other", title: "Герой" },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.CLORINDE },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.RAIDEN_SHOGUN },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.DURIN },
        ],
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.IANSAN },
        ],
        [
          { type: "character", id: CharacterIds.NAVIA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "character", id: CharacterIds.FURINA },
        ],
        [
          { type: "character", id: CharacterIds.ARATAKI_ITTO },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.NEUVILLETTE },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.LAUMA },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.XILONEN },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.BENNETT },
        ],
        [
          { type: "character", id: CharacterIds.ARLECCHINO },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.YELAN },
        ],
        [
          { type: "character", id: CharacterIds.HU_TAO },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.YELAN },
        ],
      ],
    },
    {
      description: "Гидро аппликация (не Нод-Край герои)",
      template: [
        { type: "character", id: CharacterIds.ARLECCHINO },
        { type: "character", id: CharacterIds.COLUMBINA },
      ],
    },
  ],
  keyConstellations: [2, 6],
  recommendedLevel: "90/90",
  signatureWeaponIds: [WeaponIds.NOCTURNES_CURTAIN_CALL],
  talents: [
    { type: "combat1", priority: "При необходимости", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  videoSourceIds:
    [
      VideoSourceIds.GUIDE_TO_COLUMBINA_IN_6_3_AnimeCool,
      VideoSourceIds.GUIDE_TO_COLUMBINA_IN_6_3_MironMinMax,
    ],
  weapons: {
    "Лунный Заряд": [
      {
        id: WeaponIds.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.06,
        notes: ["Лучшее решение в любом случае"],
      },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 1.01, notes: ["Неплох на пробудах, но не даёт восстановление"] },
      {
        id: WeaponIds.FAVONIUS_CODEX,
        best: "Лучшее доступное оружие",
        r: 5,
        percent: 1.00,
        notes: ["Самое удобное решение"],
      },
      { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 0.99 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 0.99 },
      { id: WeaponIds.PROTOTYPE_AMBER, percent: 0.98, notes: ["Удобное решение, плюс даёт лечение"] },
      { id: WeaponIds.SURFS_UP, percent: 0.98 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 0.98 },
      { id: WeaponIds.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.97 },
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 0.97 },
      { id: WeaponIds.JADEFALLS_SPLENDOR, percent: 0.97 },
      { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5, percent: 0.96 },
      { id: WeaponIds.EVERLASTING_MOONGLOW, percent: 0.96 },
    ],
    "Лунная Бутонизация": [
      {
        id: WeaponIds.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.08,
        notes: ["Лучшее решение в любом случае"],
      },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 1.03, notes: ["Неплох на пробудах, но не даёт восстановление"] },
      { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 1.02 },
      { id: WeaponIds.SURFS_UP, percent: 1.02 },
      { id: WeaponIds.NIGHTWEAVERS_LOOKING_GLASS, percent: 1.02 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.02 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 1.01 },
      {
        id: WeaponIds.PROTOTYPE_AMBER,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Удобное решение, плюс даёт лечение"],
      },
      {
        id: WeaponIds.FAVONIUS_CODEX,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Самое удобное решение"],
      },
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 1.00 },
      { id: WeaponIds.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.99 },
      { id: WeaponIds.JADEFALLS_SPLENDOR, percent: 0.98 },
      { id: WeaponIds.EVERLASTING_MOONGLOW, percent: 0.98 },
    ],
    "Лунная кристаллизация": [
      {
        id: WeaponIds.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.11,
        notes: ["Лучшее решение в любом случае"],
      },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 1.04, notes: ["Неплох на пробудах, но не даёт восстановление"] },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 1.01 },
      { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 1.01 },
      { id: WeaponIds.SURFS_UP, percent: 1.01 },
      {
        id: WeaponIds.PROTOTYPE_AMBER,
        best: "Лучшее доступное оружие",
        percent: 1.00,
        notes: ["Удобное решение, плюс даёт лечение"],
      },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.00 },
      { id: WeaponIds.FAVONIUS_CODEX, percent: 0.99, notes: ["Самое удобное решение"] },
      { id: WeaponIds.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.98 },
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 0.98 },
      { id: WeaponIds.JADEFALLS_SPLENDOR, percent: 0.98 },
      { id: WeaponIds.EVERLASTING_MOONGLOW, percent: 0.97 },
      { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5, percent: 0.96 },
    ],
    "Основной ДД": [
      {
        id: WeaponIds.NOCTURNES_CURTAIN_CALL,
        best: "Лучшее оружие",
        percent: 1.21,
        notes: ["Лучшее решение в любом случае"],
      },
      { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 1.14 },
      { id: WeaponIds.SURFS_UP, percent: 1.07 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.06 },
      { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.01 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 1.00, notes: ["Неплох на пробудах, но не даёт восстановление"] },
      { id: WeaponIds.DAWNING_FROST, r: 5, percent: 1.00 },
      { id: WeaponIds.NIGHTWEAVERS_LOOKING_GLASS, percent: 0.99 },
      { id: WeaponIds.BLACKMARROW_LANTERN, r: 5, percent: 0.97 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 0.97 },
      { id: WeaponIds.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.97 },
      { id: WeaponIds.PROTOTYPE_AMBER, r: 5, percent: 0.96, notes: ["Удобное решение, плюс даёт лечение"] },
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 0.96 },
    ],
  },
} as CharacterRecommendations;
