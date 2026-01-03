import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { ElementNames } from "../../elements";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

const GameVariants = {
  WHEN_PLAYING_THROUGH_ELEMENTAL_BURST: "При игре через взрыв стихий Хаос: Разрушение",
  WHEN_PLAYING_THROUGH_NORMAL_ATTACK: "При игре через обычные атаки",
} as const;

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.MARECHAUSSEE_HUNTER, best: "Лучше при игре от обычных атак" },
      {
        type: "complete",
        name: ArtifactSetNames.FINALE_OF_THE_DEEP_GALLERIES,
        best: "Лучше при игре от взрыва стихий",
      },
    ],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [
        { name: Stats.CRYO_DMG_BONUS, notes: ["Лучше"] },
        { name: Stats.ATK_PERCENTAGE, notes: [`Можно поставить, если в отряде ${CharacterNames.FURINA}`] },
      ],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        {
          name: Stats.CRIT_RATE,
          notes: [
            "В обычной ситуации от 65% до 85%",
            `При использовании полного комплекта ${ArtifactSetNames.MARECHAUSSEE_HUNTER} не должно быть больше 64%, но так как Скирк играет минимум с 2 крио персонажами, то не должно быть больше 39%`,
          ],
        },
        { name: Stats.CRIT_DMG, notes: ["от 160%"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["от 2000"] },
      ],
    },
  },
  attackCombinations: {
    [GameVariants.WHEN_PLAYING_THROUGH_NORMAL_ATTACK]: ["Отряд", "Обычный элем. навык (E)", "Взрыв стихии (Q)", "10 обычных атак", "Заряженная атака", "8 обычных атак"],
    [GameVariants.WHEN_PLAYING_THROUGH_ELEMENTAL_BURST]: ["Отряд", "Заряженный элем. навык (hold E)", "Взрыв стихии (Q)"],
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  detachments: [
    {
      template: [
        { type: "character", name: CharacterNames.SKIRK },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.CRYO },
        { type: "other", title: `${ElementNames.HYDRO}/${ElementNames.CRYO} персонаж` },
      ],
      variants: [
        [
          { type: "character", name: CharacterNames.SKIRK },
          { type: "character", name: CharacterNames.FURINA },
          { type: "character", name: CharacterNames.ESCOFFIER },
          { type: "other", title: `${ElementNames.HYDRO}/${ElementNames.CRYO} персонаж` },
        ],
      ],
    },
  ],
  keyConstellations: [1, 2, 5, 6],
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.AZURELIGHT],
  talents: {
    [GameVariants.WHEN_PLAYING_THROUGH_NORMAL_ATTACK]: [
      { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
      { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
      { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
    ],
    [GameVariants.WHEN_PLAYING_THROUGH_ELEMENTAL_BURST]: [
      { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
      { type: "combat2", priority: "Не качаем", referenceLevel: 1 },
      { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
    ],
  },
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_SKIRK_IN_5_7_AnimeCool,
    VideoSourceIds.GUIDE_TO_SKIRK_IN_5_7_MironMinMax,
    VideoSourceIds.GUIDE_TO_SKIRK_IN_5_7_xPandaChannelx,
  ],
  weapons: [
    { name: WeaponNames.AZURELIGHT, best: "Лучшее оружие", percent: 1.4256 },
    { name: WeaponNames.HARAN_GEPPAKU_FUTSU, percent: 1.2239 },
    { name: WeaponNames.PRIMORDIAL_JADE_CUTTER, percent: 1.2238 },
    { name: WeaponNames.CALAMITY_OF_ESHU, postfix: "щит", percent: 1.1844 },
    { name: WeaponNames.MISTSPLITTER_REFORGED, percent: 1.1639 },
    { name: WeaponNames.SUMMIT_SHAPER, postfix: "щит", percent: 1.1500 },
    { name: WeaponNames.ABSOLUTION, percent: 1.1291 },
    { name: WeaponNames.URAKU_MISUGIRI, percent: 1.1264 },
    { name: WeaponNames.LIGHT_OF_FOLIAR_INCISION, percent: 1.1176 },
    { name: WeaponNames.SPLENDOR_OF_TRANQUIL_WATERS, percent: 1.1023 },
    { name: WeaponNames.THE_BLACK_SWORD, percent: 1.0728 },
    { name: WeaponNames.FINALE_OF_THE_DEEP, best: "Лучшее доступное оружие", percent: 1.0000 },
    { name: WeaponNames.BLACKCLIFF_LONGSWORD, percent: 0.9451 },
  ],
} as CharacterRecommendations;
