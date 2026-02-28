import { ArtifactSetIds, ArtifactSetNames } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.LONG_NIGHTS_OATH], best: true }, { ids: [ArtifactSetIds.OBSIDIAN_CODEX] }],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [
        {
          name: Stats.ELECTRO_DMG_BONUS,
          notes: [`Лучше в подавляющем числе случаев (Особенно если стоит ${ArtifactSetNames.OBSIDIAN_CODEX})`],
        },
        { name: Stats.ATK_PERCENTAGE },
      ],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["от 180%"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["от 1800"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["110% - 115%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 150 (при игре через реакцию Вегетация)"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Однозначно Сигна",
  detachments: [
    {
      description: "Реакция Перегрузка",
      template: [
        { type: "character", id: CharacterIds.VARESA },
        { type: "character", id: CharacterIds.CHEVREUSE },
        { type: "element", id: ElementIds.PYRO },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.DURIN },
          { type: "character", id: CharacterIds.IANSAN },
          { type: "character", id: CharacterIds.CHEVREUSE },
        ],
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.MAVUIKA },
          { type: "character", id: CharacterIds.IANSAN },
          { type: "character", id: CharacterIds.CHEVREUSE },
        ],
      ],
      best: true,
    },
    {
      template: [{ type: "character", id: CharacterIds.VARESA }],
      variants: [
        [
          { type: "character", id: CharacterIds.VARESA },
          { type: "character", id: CharacterIds.FURINA },
          { type: "character", id: CharacterIds.IANSAN },
          { type: "character", id: CharacterIds.XIANYUN },
        ],
      ],
    },
  ],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.VIViD_NOTIONS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_VARESA_IN_6_2_AnimeCool, VideoSourceIds.GUIDE_TO_VARESA_IN_6_2_MironMinMax],
  weapons: {
    [ArtifactSetIds.LONG_NIGHTS_OATH]: [
      { id: WeaponIds.VIViD_NOTIONS, best: "Лучшее оружие", percent: 1.3014 },
      { id: WeaponIds.KAGURAS_VERITY, percent: 1.0724 },
      { id: WeaponIds.CRANES_ECHOING_CALL, percent: 1.0575 },
      { id: WeaponIds.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 1.0563 },
      { id: WeaponIds.CASHFLOW_SUPERVISION, percent: 1.0553 },
      { id: WeaponIds.SURFS_UP, percent: 1.0303 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0292 },
      { id: WeaponIds.TULAYTULLAHS_REMEMBRANCE, percent: 1.0087 },
      { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.SKYWARD_ATLAS, percent: 0.9707 },
      { id: WeaponIds.MEMORY_OF_DUST, percent: 0.9569 },
      { id: WeaponIds.THE_WIDSITH, r: 1, percent: 0.9509 },
    ],
    [ArtifactSetIds.OBSIDIAN_CODEX]: [
      { id: WeaponIds.VIViD_NOTIONS, best: "Лучшее оружие", percent: 1.2568 },
      { id: WeaponIds.CRANES_ECHOING_CALL, percent: 1.0871 },
      { id: WeaponIds.KAGURAS_VERITY, percent: 1.0648 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, percent: 1.0055 },
      { id: WeaponIds.SURFS_UP, percent: 1.0046 },
      { id: WeaponIds.TULAYTULLAHS_REMEMBRANCE, percent: 1.0032 },
      { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.SKYWARD_ATLAS, percent: 0.9937 },
      { id: WeaponIds.MEMORY_OF_DUST, percent: 0.9721 },
      { id: WeaponIds.CASHFLOW_SUPERVISION, percent: 0.9714 },
      { id: WeaponIds.THE_WIDSITH, r: 1, percent: 0.9443 },
      { id: WeaponIds.FLOWING_PURITY, r: 5, percent: 0.9429 },
    ],
  },
} as CharacterRecommendations;
