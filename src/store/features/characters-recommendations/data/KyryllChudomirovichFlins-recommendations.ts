import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING], best: true },
      { ids: [ArtifactSetIds.MARECHAUSSEE_HUNTER] },
      { ids: [ArtifactSetIds.THUNDERING_FURY] },
      { ids: [ArtifactSetIds.GILDED_DREAMS] },
    ],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ELEMENTAL_MASTERY }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.ATK_PERCENTAGE, notes: ["от 2000"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 150"] },
        { name: Stats.ENERGY_RECHARGE },
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] },
      ],
    },
  },
  attackCombinations: {
    "Базовая": ["E", "1 удар", "E", "Q", "Бьём", "E", "Q", "Бьём(ситуативно)"], /* ~120% Восст. энергии */
    "С большим взрывом стихий": ["E", "1 удар", "Q", "1 удар", "E", "Бьём", "Q", "Бьём", "E", "Q", "Бьём(ситуативно)"], /* ~170% Восст. энергии */
    "Промежуточная": ["E", "1 удар", "Q", "1 удар", "E", "Бьём", "E", "Q", "Бьём(ситуативно)"], /* ~135% Восст. энергии */
    "Отряд": ["Батарейка", "Гидро перс", "Саппорт", "Флинс"],
  },
  constellationOrSignatureWeapon: "C1 > Сигна",
  detachments: [
    {
      template: [
        { type: "character", id: CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "other", title: "Нод-Край персонаж" },
        { type: "element", id: ElementIds.ELECTRO },
        { type: "element", id: ElementIds.HYDRO },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS },
          { type: "character", id: CharacterIds.INEFFA },
          { type: "character", id: CharacterIds.AINO },
          { type: "character", id: CharacterIds.SUCROSE },
        ],
      ],
    },
  ],
  keyConstellations: [1, 2],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.BLOODSOAKED_RUINS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_AnimeCool,
    VideoSourceIds.GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_MironMinMax,
    VideoSourceIds.GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_xPandaChannelx,
  ],
  weapons: [
    { id: WeaponIds.BLOODSOAKED_RUINS, best: true, percent: 1.30 },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.19 },
    { id: WeaponIds.FRACTURED_HALO, percent: 1.16 },
    { id: WeaponIds.STAFF_OF_HOMA, percent: 1.14 },
    { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.13 },
    { id: WeaponIds.ENGULFING_LIGHTNING, postfix: "с полн.ультой", percent: 1.13 },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.13 },
    { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.12 },
    { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.11 },
    { id: WeaponIds.VORTEX_VANQUISHER, postfix: "щит", percent: 1.09 },
    { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.08 },
    { id: WeaponIds.CALAMITY_QUELLER, percent: 1.06 },
    { id: WeaponIds.SKYWARD_SPINE, postfix: "с полн.ультой", percent: 1.05 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.05 },
    { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.05 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.01 },
    { id: WeaponIds.FAVONIUS_LANCE, postfix: "с полн.ультой", percent: 1.01 },
    { id: WeaponIds.PROSPECTORS_SHOVEL, percent: 1.00 },
    { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.98 },
    { id: WeaponIds.KITAIN_CROSS_SPEAR, percent: 0.94 },
    { id: WeaponIds.FAVONIUS_LANCE, postfix: "с обыч. ротацией", percent: 0.84 },
  ],
} as CharacterRecommendations;
