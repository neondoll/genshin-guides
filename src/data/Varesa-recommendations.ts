import { ArtifactSetNames, CharacterRoleIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.LONG_NIGHTS_OATH },
      { type: "complete", name: ArtifactSetNames.OBSIDIAN_CODEX },
    ],
    stats: {
      sands: [{ name: "Сила атаки %" }],
      goblet: [
        { name: "Бонус Электро урона", notes: ["Лучше с Цаплей всегда"] },
        { name: "Сила атаки %", notes: ["Лучше с Фуриной или в сете на планжи"] },
      ],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Сила атаки %", notes: ["от 1800"] },
        { name: "Шанс крит. попадания", notes: ["от 60%"] },
        { name: "Крит. урон", notes: ["от 180%"] },
        { name: "Восст. энергии", notes: ["115% - 135% для Взрыва стихии"] },
        { name: "Мастерство стихий", notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Однозначно Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.VIViD_NOTIONS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [],
  weapons: [
    { name: WeaponNames.VIViD_NOTIONS, best: "Лучшее оружие", percent: 1.28 },
    { name: WeaponNames.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 1.06 },
    { name: WeaponNames.KAGURAS_VERITY, percent: 1.05 },
    { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.04 },
    { name: WeaponNames.CASHFLOW_SUPERVISION, percent: 1.04 },
    { name: WeaponNames.SURFS_UP, percent: 1.03 },
    { name: WeaponNames.THE_WIDSITH, r: 5, percent: 1.00 },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 5, percent: 0.92 },
    { name: WeaponNames.FLOWING_PURITY, r: 5, percent: 0.92 },
  ],
} as CharacterRecommendations;
