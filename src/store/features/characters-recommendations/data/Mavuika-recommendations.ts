import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

const GameVariants = { DPS: "Основной урон", SUPPORT: "Поддержка" } as const;

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.OBSIDIAN_CODEX], best: true },
      { ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY] },
    ],
    stats: {
      sands: [
        {
          name: Stats.ATK_PERCENTAGE,
          notes: [
            "Гиперкерри | Перегрузка - Всегда",
            `Пар | Таяние - Лучше, если в отряде есть инструктор и отсутствует ${CharacterIds.BENNETT} или ${CharacterIds.IANSAN}`,
            `${GameVariants.SUPPORT} - Всегда`,
          ],
        },
        {
          name: Stats.ELEMENTAL_MASTERY,
          notes: [
            `Пар | Таяние - Всегда, если есть в команде ${CharacterIds.BENNETT} или ${CharacterIds.IANSAN} и мало МС в доп. статах`,
          ],
        },
      ],
      goblet: [{ name: Stats.PYRO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Если играем в Пар | Таяние"] },
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
  signatureWeaponIds: [WeaponIds.A_THOUSAND_BLAZING_SUNS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 10", overallLevel: 10 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_MAVUIKA,
    VideoSourceIds.TALENT_GAINS_PYRO,
  ],
  weapons: {
    "Пар | Таяние": [
      { id: WeaponIds.A_THOUSAND_BLAZING_SUNS, best: "Лучшее оружие", r: 1, percent: 1.3504 },
      { id: WeaponIds.SERPENT_SPINE, r: 5, percent: 1.1990 },
      { id: WeaponIds.BEACON_OF_THE_REED_SEA, r: 1, percent: 1.1761 },
      { id: WeaponIds.REDHORN_STONETHRESHER, r: 1, percent: 1.1582 },
      { id: WeaponIds.VERDICT, r: 1, percent: 1.1546 },
      { id: WeaponIds.SERPENT_SPINE, r: 1, percent: 1.1255 },
      { id: WeaponIds.WOLFS_GRAVESTONE, r: 1, percent: 1.0832 },
      { id: WeaponIds.THE_UNFORGED, r: 1, percent: 1.0785 },
      { id: WeaponIds.FANG_OF_THE_MOUNTAIN_KING, r: 1, percent: 1.0487 },
      { id: WeaponIds.SONG_OF_BROKEN_PINES, r: 1, percent: 1.0404 },
      { id: WeaponIds.MAKHAIRA_AQUAMARINE, r: 5, percent: 1.0012 },
      { id: WeaponIds.MAILED_FLOWER, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.AKUOUMARU, r: 5, percent: 0.9980 },
      { id: WeaponIds.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, r: 5, percent: 0.9970 },
      { id: WeaponIds.TALKING_STICK, r: 5, percent: 0.9928 },
      { id: WeaponIds.BLACKCLIFF_SLASHER, best: "Лучшее доступное оружие", r: 5, percent: 0.9881 },
      { id: WeaponIds.SKYWARD_PRIDE, r: 1, percent: 0.9833 },
      { id: WeaponIds.LUXURIOUS_SEA_LORD, r: 5, percent: 0.9780 },
      { id: WeaponIds.PROTOTYPE_ARCHAIC, r: 5, percent: 0.9621 },
      { id: WeaponIds.TIDAL_SHADOW, r: 5, percent: 0.9413 },
    ],
    "Гиперкерри | Перегрузка": [
      { id: WeaponIds.A_THOUSAND_BLAZING_SUNS, best: "Лучшее оружие", r: 1, percent: 1.3218 },
      { id: WeaponIds.SERPENT_SPINE, r: 5, percent: 1.1805 },
      { id: WeaponIds.BEACON_OF_THE_REED_SEA, r: 1, percent: 1.1546 },
      { id: WeaponIds.REDHORN_STONETHRESHER, r: 1, percent: 1.1541 },
      { id: WeaponIds.VERDICT, r: 1, percent: 1.1437 },
      { id: WeaponIds.SERPENT_SPINE, r: 1, percent: 1.1083 },
      { id: WeaponIds.FANG_OF_THE_MOUNTAIN_KING, r: 1, percent: 1.0624 },
      { id: WeaponIds.SONG_OF_BROKEN_PINES, r: 1, percent: 1.0426 },
      { id: WeaponIds.WOLFS_GRAVESTONE, r: 1, percent: 1.0418 },
      { id: WeaponIds.SKYWARD_PRIDE, r: 1, percent: 1.0088 },
      { id: WeaponIds.TIDAL_SHADOW, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.BLACKCLIFF_SLASHER, r: 5, percent: 0.9997 },
      { id: WeaponIds.TALKING_STICK, r: 5, percent: 0.9879 },
      { id: WeaponIds.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, r: 5, percent: 0.9642 },
      { id: WeaponIds.PROTOTYPE_ARCHAIC, r: 5, percent: 0.9508 },
      { id: WeaponIds.LUXURIOUS_SEA_LORD, r: 5, percent: 0.9195 },
    ],
  },
} as CharacterRecommendations;
