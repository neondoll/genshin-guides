import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

const GameVariants = {
  WHEN_PLAYING_THROUGH_ELEMENTAL_BURST: "При игре через взрыв стихий Хаос: Разрушение",
  WHEN_PLAYING_THROUGH_NORMAL_ATTACK: "При игре через обычные атаки",
} as const;

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.MARECHAUSSEE_HUNTER], best: "Лучше при игре от обычных атак" },
      { ids: [ArtifactSetIds.FINALE_OF_THE_DEEP_GALLERIES], best: "Лучше при игре от взрыва стихий" },
    ],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [
        { name: Stats.CRYO_DMG_BONUS, notes: ["Лучше"] },
        { name: Stats.ATK_PERCENTAGE, notes: [`Можно поставить, если в отряде ${CharacterIds.FURINA}`] },
      ],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        {
          name: Stats.CRIT_RATE,
          notes: [
            "В обычной ситуации от 65% до 85%",
            `При использовании полного комплекта ${ArtifactSetIds.MARECHAUSSEE_HUNTER} не должно быть больше 64%, но так как Скирк играет минимум с 2 крио персонажами, то не должно быть больше 39%`,
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
        { type: "character", id: CharacterIds.SKIRK },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.CRYO },
        { type: "other", title: `${ElementNames.HYDRO}/${ElementNames.CRYO} персонаж` },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.SKIRK },
          { type: "character", id: CharacterIds.FURINA },
          { type: "character", id: CharacterIds.ESCOFFIER },
          { type: "other", title: `${ElementNames.HYDRO}/${ElementNames.CRYO} персонаж` },
        ],
      ],
    },
  ],
  keyConstellations: [1, 2, 5, 6],
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.AZURELIGHT],
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
    { id: WeaponIds.AZURELIGHT, best: "Лучшее решение", percent: 1.4256 },
    { id: WeaponIds.HARAN_GEPPAKU_FUTSU, percent: 1.2239 },
    { id: WeaponIds.PRIMORDIAL_JADE_CUTTER, percent: 1.2238 },
    { id: WeaponIds.CALAMITY_OF_ESHU, postfix: "щит", percent: 1.1844 },
    { id: WeaponIds.MISTSPLITTER_REFORGED, percent: 1.1639 },
    { id: WeaponIds.SUMMIT_SHAPER, postfix: "щит", percent: 1.1500 },
    { id: WeaponIds.ABSOLUTION, percent: 1.1291 },
    { id: WeaponIds.URAKU_MISUGIRI, percent: 1.1264 },
    { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, percent: 1.1176 },
    { id: WeaponIds.SPLENDOR_OF_TRANQUIL_WATERS, percent: 1.1023 },
    { id: WeaponIds.THE_BLACK_SWORD, percent: 1.0728 },
    { id: WeaponIds.FINALE_OF_THE_DEEP, best: "Лучшее доступное решение", percent: 1.0000 },
    { id: WeaponIds.BLACKCLIFF_LONGSWORD, percent: 0.9451 },
  ],
} as CharacterRecommendations;
