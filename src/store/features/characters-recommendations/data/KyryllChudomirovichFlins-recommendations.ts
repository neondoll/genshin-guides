import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { ElementNames } from "../../elements";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.NIGHT_OF_THE_SKYS_UNVEILING, best: true },
      { type: "complete", name: ArtifactSetNames.MARECHAUSSEE_HUNTER },
      { type: "complete", name: ArtifactSetNames.THUNDERING_FURY },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
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
        { type: "character", name: CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "other", title: "Нод-Край персонаж" },
        { type: "element", name: ElementNames.ELECTRO },
        { type: "element", name: ElementNames.HYDRO },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS },
          { type: "character", name: CharacterNames.INEFFA },
          { type: "character", name: CharacterNames.AINO },
          { type: "character", name: CharacterNames.SUCROSE },
        ],
      ],
    },
  ],
  keyConstellations: [1, 2],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.BLOODSOAKED_RUINS],
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
    { name: WeaponNames.BLOODSOAKED_RUINS, best: true, percent: 1.30 },
    { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.19 },
    { name: WeaponNames.FRACTURED_HALO, percent: 1.16 },
    { name: WeaponNames.STAFF_OF_HOMA, percent: 1.14 },
    { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.13 },
    { name: WeaponNames.ENGULFING_LIGHTNING, postfix: "с полн.ультой", percent: 1.13 },
    { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.13 },
    { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.12 },
    { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.11 },
    { name: WeaponNames.VORTEX_VANQUISHER, postfix: "щит", percent: 1.09 },
    { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.08 },
    { name: WeaponNames.CALAMITY_QUELLER, percent: 1.06 },
    { name: WeaponNames.SKYWARD_SPINE, postfix: "с полн.ультой", percent: 1.05 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.05 },
    { name: WeaponNames.DEATHMATCH, r: 1, percent: 1.05 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.01 },
    { name: WeaponNames.FAVONIUS_LANCE, postfix: "с полн.ультой", percent: 1.01 },
    { name: WeaponNames.PROSPECTORS_SHOVEL, percent: 1.00 },
    { name: WeaponNames.MISSIVE_WINDSPEAR, percent: 0.98 },
    { name: WeaponNames.KITAIN_CROSS_SPEAR, percent: 0.94 },
    { name: WeaponNames.FAVONIUS_LANCE, postfix: "с обыч. ротацией", percent: 0.84 },
  ],
} as CharacterRecommendations;
