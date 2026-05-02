import { ArtifactSetIds } from "@/types/artifact-sets";
import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { ElementIds } from "@/types/elements";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.LAUMA,
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON, ArtifactSetIds.GILDED_DREAMS], best: true },
      { ids: [ArtifactSetIds.DEEPWOOD_MEMORIES] },
      { ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
    ],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY, notes: ["Лучше"] }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.ELEMENTAL_MASTERY }],
      additional: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Приоритетно", "~ 1100"] },
        {
          name: Stats.ENERGY_RECHARGE,
          notes: ["Приоритетно", "От 150% в комфортных отрядах", "До 250% в некомфортных отрядах", "Среднее значение 170% - 180%"],
        },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
    },
  },
  attackCombinations: {
    "В одну цель": ["Взрыв стихий", "к концу бонуса", "Элем. навык"],
    "В несколько целей": ["Элем. навык (Долгое нажатие)", "Взрыв стихий"],
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  detachments: [
    {
      description: "Лунная бутонизация",
      template: [
        { type: "character", id: CharacterIds.NEFER },
        { type: "character", id: CharacterIds.LAUMA },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.NEFER, artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] },
          {
            type: "character",
            id: CharacterIds.LAUMA,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON, ArtifactSetIds.GILDED_DREAMS],
          },
          { type: "character", id: CharacterIds.COLUMBINA, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.NAHIDA, artifactSetIds: [ArtifactSetIds.DEEPWOOD_MEMORIES] },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.BAIZHU },
        ],
        [
          { type: "character", id: CharacterIds.NEFER },
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.INEFFA },
        ],
      ],
    },
    {
      description: "Бутонизация| Цветение | Вегетация",
      template: [
        { type: "character", id: CharacterIds.LAUMA },
        { type: "element", id: ElementIds.HYDRO },
        { type: "other", title: "Лопающий бутоны персонаж" },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.XINGQIU },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
          { type: "character", id: CharacterIds.NAHIDA },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.XINGQIU },
          { type: "character", id: CharacterIds.RAIDEN_SHOGUN },
          { type: "character", id: CharacterIds.NAHIDA },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.XINGQIU },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
          { type: "character", id: CharacterIds.ALHAITHAM },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.FURINA },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
          { type: "character", id: CharacterIds.ALHAITHAM },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.XINGQIU },
          { type: "character", id: CharacterIds.KUKI_SHINOBU },
          { type: "character", id: CharacterIds.YELAN },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.SANGONOMIYA_KOKOMI },
          { type: "character", id: CharacterIds.NILOU },
          { type: "character", id: CharacterIds.NAHIDA },
        ],
      ],
    },
    {
      description: "Коляска",
      template: [{ type: "character", id: CharacterIds.LAUMA }],
      variants: [
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.FURINA },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.NEUVILLETTE },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.IANSAN },
          { type: "character", id: CharacterIds.BENNETT },
          { type: "character", id: CharacterIds.KINICH },
        ],
        [
          { type: "character", id: CharacterIds.LAUMA },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "character", id: CharacterIds.MAVUIKA },
          { type: "character", id: CharacterIds.MUALANI },
        ],
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.NIGHTWEAVERS_LOOKING_GLASS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "8 - 10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "8 - 10" },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_AnimeCool,
    VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_MironMinMax,
    VideoSourceIds.GUIDE_TO_LAUMA_IN_6_5_MironMinMax,
  ],
  weapons: [
    { id: WeaponIds.NIGHTWEAVERS_LOOKING_GLASS, best: "Лучшее решение", percent: 1.0791 },
    { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, percent: 1.0449 },
    { id: WeaponIds.STARCALLERS_WATCH, percent: 1.0239 },
    { id: WeaponIds.SUNNY_MORNING_SLEEP_IN, percent: 1.0176 },
    { id: WeaponIds.ETHERLIGHT_SPINDLELUTE, best: "Лучшее эвентовое решение", r: 5, percent: 1.0037 },
    { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 1.0014 },
    { id: WeaponIds.BLACKMARROW_LANTERN, best: "Лучшее доступное решение", r: 5, percent: 1.0000 },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS, r: 5, percent: 0.9926 },
    { id: WeaponIds.WANDERING_EVENSTAR, r: 5, percent: 0.9884 },
    { id: WeaponIds.MAGIC_GUIDE, percent: 0.9864 },
    { id: WeaponIds.WANDERING_EVENSTAR, r: 1, percent: 0.9855 },
    { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 0.9838 },
    { id: WeaponIds.NOCTURNES_CURTAIN_CALL, percent: 0.9806 },
    { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 0.9753 },
    { id: WeaponIds.THE_WIDSITH, r: 5, percent: 0.9746 },
  ],
} as CharacterRecommendations;
