import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

const GameVariants = { DPS: "Основной урон", SUPPORT: "Поддержка" } as const;

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.OBSIDIAN_CODEX, best: true },
      { type: "complete", name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY },
    ],
    stats: {
      sands: [
        {
          name: "Сила атаки %",
          notes: [
            "Гиперкерри | Перегрузка - Всегда",
            `Пар | Таяние - Лучше, если в отряде есть инструктор и отсутствует ${CharacterNames.BENNETT} или ${CharacterNames.IANSAN}`,
            `${GameVariants.SUPPORT} - Всегда`,
          ],
        },
        {
          name: "Мастерство стихий",
          notes: [
            `Пар | Таяние - Всегда, если есть в команде ${CharacterNames.BENNETT} или ${CharacterNames.IANSAN} и мало МС в доп. статах`,
          ],
        },
      ],
      goblet: [{ name: "Бонус Пиро урона" }],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Сила атаки %" },
        { name: "Шанс крит. попадания" },
        { name: "Крит. урон" },
        { name: "Мастерство стихий", notes: ["Если играем в Пар | Таяние"] },
      ],
    },
  },
  attackCombinations: {
    [`${GameVariants.DPS}: База`]: ["Взрыв стихий (Q)", "7 секунд заряженные атаки (на взрыве стихий останется 9 секунд перезарядки)"],
    [`${GameVariants.DPS}: H1C`]: ["Взрыв стихий (Q)", "6 раз (1 тик заряженной атаки > рывок), на последний раз делается не рывок, а просто отпускается заряженная атака"],
    [`${GameVariants.DPS}: Таяние (1 уровень)`]: ["Взрыв стихий (Q) [Таяние]", "ждем", "Заряженная атака (1 [Таяние], 2, 3, 4 [Таяние], 5, 6, 7, 8 тиков)", "финальный удар"],
    [`${GameVariants.DPS}: Таяние (2 уровень)`]: ["Взрыв стихий (Q) [Таяние]", "ждем", "Заряженная атака (1 [Таяние], 2, 3, 4 [Таяние] тика)", "прыжок", "Заряженная атака (1 [Таяние], 2, 3, (взрыв стихии закончился) 4 [Таяние] тика)"],
    [`${GameVariants.DPS}: Таяние (3 уровень)`]: ["Взрыв стихий (Q) [Таяние]", "ждем", "Заряженная атака (1 [Таяние], 2, 3, 4 [Таяние] тика)", "прыжок", "Заряженная атака (1 [Таяние], 2, 3, 4 [Таяние] тика) (взрыв стихии закончился)"],
    [`${GameVariants.DPS}: Таяние (4 уровень)`]: ["Взрыв стихий (Q) [Таяние]", "ждем", "Заряженная атака (1 [Таяние], 2, 3 тика, финальный удар [Таяние])", "рывок", "Заряженная атака (1, 2 [Таяние], 3 тика, финальный удар [Таяние])"],
    [GameVariants.SUPPORT]: ["Взрыв стихий (Q)"],
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  keyConstellations: [2, 4],
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.A_THOUSAND_BLAZING_SUNS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON, VideoSourceIds.GUIDE_TO_MAVUIKA],
  weapons: {
    "Пар | Таяние": [
      { name: WeaponNames.A_THOUSAND_BLAZING_SUNS, best: "Лучшее оружие", r: 1, percent: 1.3504 },
      { name: WeaponNames.SERPENT_SPINE, r: 5, percent: 1.1990 },
      { name: WeaponNames.BEACON_OF_THE_REED_SEA, r: 1, percent: 1.1761 },
      { name: WeaponNames.REDHORN_STONETHRESHER, r: 1, percent: 1.1582 },
      { name: WeaponNames.VERDICT, r: 1, percent: 1.1546 },
      { name: WeaponNames.SERPENT_SPINE, r: 1, percent: 1.1255 },
      { name: WeaponNames.WOLFS_GRAVESTONE, r: 1, percent: 1.0832 },
      { name: WeaponNames.THE_UNFORGED, r: 1, percent: 1.0785 },
      { name: WeaponNames.FANG_OF_THE_MOUNTAIN_KING, r: 1, percent: 1.0487 },
      { name: WeaponNames.SONG_OF_BROKEN_PINES, r: 1, percent: 1.0404 },
      { name: WeaponNames.MAKHAIRA_AQUAMARINE, r: 5, percent: 1.0012 },
      { name: WeaponNames.MAILED_FLOWER, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.AKUOUMARU, r: 5, percent: 0.9980 },
      { name: WeaponNames.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, r: 5, percent: 0.9970 },
      { name: WeaponNames.TALKING_STICK, r: 5, percent: 0.9928 },
      { name: WeaponNames.BLACKCLIFF_SLASHER, best: "Лучшее доступное оружие", r: 5, percent: 0.9881 },
      { name: WeaponNames.SKYWARD_PRIDE, r: 1, percent: 0.9833 },
      { name: WeaponNames.LUXURIOUS_SEA_LORD, r: 5, percent: 0.9780 },
      { name: WeaponNames.PROTOTYPE_ARCHAIC, r: 5, percent: 0.9621 },
      { name: WeaponNames.TIDAL_SHADOW, r: 5, percent: 0.9413 },
    ],
    "Гиперкерри | Перегрузка": [
      { name: WeaponNames.A_THOUSAND_BLAZING_SUNS, best: "Лучшее оружие", r: 1, percent: 1.3218 },
      { name: WeaponNames.SERPENT_SPINE, r: 5, percent: 1.1805 },
      { name: WeaponNames.BEACON_OF_THE_REED_SEA, r: 1, percent: 1.1546 },
      { name: WeaponNames.REDHORN_STONETHRESHER, r: 1, percent: 1.1541 },
      { name: WeaponNames.VERDICT, r: 1, percent: 1.1437 },
      { name: WeaponNames.SERPENT_SPINE, r: 1, percent: 1.1083 },
      { name: WeaponNames.FANG_OF_THE_MOUNTAIN_KING, r: 1, percent: 1.0624 },
      { name: WeaponNames.SONG_OF_BROKEN_PINES, r: 1, percent: 1.0426 },
      { name: WeaponNames.WOLFS_GRAVESTONE, r: 1, percent: 1.0418 },
      { name: WeaponNames.SKYWARD_PRIDE, r: 1, percent: 1.0088 },
      { name: WeaponNames.TIDAL_SHADOW, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.BLACKCLIFF_SLASHER, r: 5, percent: 0.9997 },
      { name: WeaponNames.TALKING_STICK, r: 5, percent: 0.9879 },
      { name: WeaponNames.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, r: 5, percent: 0.9642 },
      { name: WeaponNames.PROTOTYPE_ARCHAIC, r: 5, percent: 0.9508 },
      { name: WeaponNames.LUXURIOUS_SEA_LORD, r: 5, percent: 0.9195 },
    ],
  },
} as CharacterRecommendations;
