import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ type: "complete", id: ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING, best: true }],
    stats: {
      sands: [{ name: Stats.DEF_PERCENTAGE }],
      goblet: [{ name: Stats.DEF_PERCENTAGE }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.DEF_PERCENTAGE, notes: ["Приоритетно", "от 2000"] },
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Специально не искать", "от 150"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Специально не искать"] },
      ],
    },
  },
  attackCombinations: [
    "Способности отряда",
    "Навык (Вход в стойку)",
    "4 Обычные атаки (Копим заряды Сияния)",
    "Навык (Особенный)",
    "4 Обычные атаки (Копим заряды Сияния)",
    "Навык (Особенный)",
    "4 Обычные атаки (Копим заряды Сияния)",
    "Навык (Особенный)",
    "Взрыв стихий",
  ],
  constellationOrSignatureWeapon: "С1 < Сигна < С2",
  detachments: [
    {
      template: [
        { type: "character", id: CharacterIds.ZIBAI },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.GEO },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weapon: WeaponNames.HARBINGER_OF_DAWN,
            weaponR: 5,
            artifacts: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.COLUMBINA_HYPOSELENIA,
            c: 0,
            weapon: WeaponNames.SACRIFICIAL_JADE,
            weaponR: 1,
            artifacts: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weapon: WeaponNames.DRAGONS_BANE,
            weaponR: 5,
            artifacts: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.INEFFA,
            c: 0,
            weapon: WeaponNames.DEATHMATCH,
            weaponR: 1,
            artifacts: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
        ], // Лучший отряд, Инеффа даёт щит
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weapon: WeaponNames.FLUTE_OF_EZPITZAL,
            weaponR: 5,
            artifacts: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.COLUMBINA_HYPOSELENIA,
            c: 0,
            weapon: WeaponNames.SACRIFICIAL_JADE,
            weaponR: 1,
            artifacts: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weapon: WeaponNames.DRAGONS_BANE,
            weaponR: 5,
            artifacts: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.GOROU,
            c: 6,
            weapon: WeaponNames.FAVONIUS_WARBOW,
            weaponR: 5,
            artifacts: [ArtifactSetIds.INSTRUCTOR],
          },
        ], // На Коломбину можно поставить Янтарь для выживаемости (лечение)
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weapon: WeaponNames.FLUTE_OF_EZPITZAL,
            weaponR: 5,
            artifacts: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.AINO,
            c: 6,
            weapon: WeaponNames.FAVONIUS_GREATSWORD,
            weaponR: 5,
            artifacts: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weapon: WeaponNames.DRAGONS_BANE,
            weaponR: 5,
            artifacts: [ArtifactSetIds.WANDERERS_TROUPE, ArtifactSetIds.GILDED_DREAMS],
          },
          {
            type: "character",
            id: CharacterIds.GOROU,
            c: 6,
            weapon: WeaponNames.FAVONIUS_WARBOW,
            weaponR: 5,
            artifacts: [ArtifactSetIds.INSTRUCTOR],
          },
        ], // Если нет Коломбины, Айно будет достойной альтернативой
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
          { type: "character", id: CharacterIds.ILLUGA },
          { type: "character", id: CharacterIds.ZHONGLI },
        ], // Чжун Ли добавит отряду выживаемости
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "element", name: ElementNames.HYDRO },
          { type: "character", id: CharacterIds.ALBEDO },
          { type: "character", id: CharacterIds.MONA },
        ], // Вариант для игры с Альбедо и Моной (ведьмовство)
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "element", name: ElementNames.HYDRO },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "character", id: CharacterIds.FURINA },
        ], // Отряд с лечением, четвёртый слот не должен быть Гео/Анемо/Дендро для работы Шилонен С0
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "element", name: ElementNames.HYDRO },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "element", name: ElementNames.GEO },
        ], // Шилонен С2 работает даже в отрядах с тремя Гео
        [
          { type: "character", id: CharacterIds.ZIBAI },
          { type: "character", id: CharacterIds.AINO },
          { type: "character", id: CharacterIds.ILLUGA },
          { type: "character", id: CharacterIds.SUCROSE },
        ], // Отряды из эпических героев
      ],
    },
  ],
  keyConstellations: [1, 2, 6],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.LIGHTBEARING_MOONSHARD],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9-10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6-10" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_ZIBAI_IN_6_3_AnimeCool, VideoSourceIds.GUIDE_TO_ZIBAI_IN_6_3_MironMinMax],
  weapons: [
    { name: WeaponNames.LIGHTBEARING_MOONSHARD, best: "Лучшее оружие", percent: 1.2351 },
    { name: WeaponNames.URAKU_MISUGIRI, percent: 1.1248 },
    { name: WeaponNames.LIGHT_OF_FOLIAR_INCISION, percent: 1.0723 },
    { name: WeaponNames.HARBINGER_OF_DAWN, r: 5, percent: 1.0667 },
    { name: WeaponNames.PEAK_PATROL_SONG, percent: 1.0525 },
    { name: WeaponNames.SPLENDOR_OF_TRANQUIL_WATERS, percent: 1.0357 },
    { name: WeaponNames.HARAN_GEPPAKU_FUTSU, percent: 1.0076 },
    { name: WeaponNames.FLUTE_OF_EZPITZAL, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { name: WeaponNames.PRIMORDIAL_JADE_CUTTER, percent: 0.9935 },
    { name: WeaponNames.THE_BLACK_SWORD, r: 5, percent: 0.9863 },
    { name: WeaponNames.ABSOLUTION, percent: 0.9760 },
    { name: WeaponNames.MISTSPLITTER_REFORGED, percent: 0.9753 },
    { name: WeaponNames.ATHAME_ARTIS, percent: 0.9734 },
    { name: WeaponNames.WOLF_FANG, r: 5, percent: 0.9708 },
    { name: WeaponNames.THE_BLACK_SWORD, r: 1, percent: 0.9705 },
    { name: WeaponNames.WOLF_FANG, r: 1, percent: 0.9625 },
    { name: WeaponNames.CINNABAR_SPINDLE, r: 5, percent: 0.9616 },
    { name: WeaponNames.AZURELIGHT, percent: 0.9373 },
    { name: WeaponNames.TOUKABOU_SHIGURE, r: 5, percent: 0.9185 },
    { name: WeaponNames.BLACKCLIFF_LONGSWORD, postfix: "без стаков", percent: 0.9172 },
    { name: WeaponNames.FREEDOM_SWORN, percent: 0.9155 },
  ],
} as CharacterRecommendations;
