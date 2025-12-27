import { ArtifactSetNames, CharacterNames, CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.LONG_NIGHTS_OATH, best: true },
      { type: "complete", name: ArtifactSetNames.OBSIDIAN_CODEX },
    ],
    stats: {
      sands: [{ name: "Сила атаки %" }],
      goblet: [
        {
          name: "Бонус Электро урона",
          notes: [`Лучше в подавляющем числе случаев (Особенно если стоит ${ArtifactSetNames.OBSIDIAN_CODEX})`],
        },
        { name: "Сила атаки %" },
      ],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Шанс крит. попадания", notes: ["от 60%"] },
        { name: "Крит. урон", notes: ["от 180%"] },
        { name: "Сила атаки %", notes: ["от 1800"] },
        { name: "Восст. энергии", notes: ["110% - 115%"] },
        { name: "Мастерство стихий", notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Однозначно Сигна",
  detachments: [
    {
      template: [CharacterNames.VARESA, CharacterNames.CHEVREUSE, "Пиро персонаж", "Полезный персонаж"],
      variants: [
        [CharacterNames.VARESA, CharacterNames.DURIN, CharacterNames.IANSAN, CharacterNames.CHEVREUSE],
        [CharacterNames.VARESA, CharacterNames.MAVUIKA, CharacterNames.IANSAN, CharacterNames.CHEVREUSE],
      ],
      best: true,
    },
    {
      template: [CharacterNames.VARESA, "", "", ""],
      variants: [[CharacterNames.VARESA, CharacterNames.FURINA, CharacterNames.IANSAN, CharacterNames.XIANYUN]],
    },
  ],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.VIViD_NOTIONS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_VARESA_IN_6_2],
  weapons: {
    [ArtifactSetNames.LONG_NIGHTS_OATH]: [
      { name: WeaponNames.VIViD_NOTIONS, best: "Лучшее оружие", percent: 1.3014 },
      { name: WeaponNames.KAGURAS_VERITY, percent: 1.0724 },
      { name: WeaponNames.CRANES_ECHOING_CALL, percent: 1.0575 },
      { name: WeaponNames.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 1.0563 },
      { name: WeaponNames.CASHFLOW_SUPERVISION, percent: 1.0553 },
      { name: WeaponNames.SURFS_UP, percent: 1.0303 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0292 },
      { name: WeaponNames.TULAYTULLAHS_REMEMBRANCE, percent: 1.0087 },
      { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.SKYWARD_ATLAS, percent: 0.9707 },
      { name: WeaponNames.MEMORY_OF_DUST, percent: 0.9569 },
      { name: WeaponNames.THE_WIDSITH, r: 1, percent: 0.9509 },
    ],
    [ArtifactSetNames.OBSIDIAN_CODEX]: [
      { name: WeaponNames.VIViD_NOTIONS, best: "Лучшее оружие", percent: 1.2568 },
      { name: WeaponNames.CRANES_ECHOING_CALL, percent: 1.0871 },
      { name: WeaponNames.KAGURAS_VERITY, percent: 1.0648 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0055 },
      { name: WeaponNames.SURFS_UP, percent: 1.0046 },
      { name: WeaponNames.TULAYTULLAHS_REMEMBRANCE, percent: 1.0032 },
      { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.SKYWARD_ATLAS, percent: 0.9937 },
      { name: WeaponNames.MEMORY_OF_DUST, percent: 0.9721 },
      { name: WeaponNames.CASHFLOW_SUPERVISION, percent: 0.9714 },
      { name: WeaponNames.THE_WIDSITH, r: 1, percent: 0.9443 },
      { name: WeaponNames.FLOWING_PURITY, r: 5, percent: 0.9429 },
    ],
  },
} as CharacterRecommendations;
