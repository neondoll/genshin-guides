import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING], best: true }],
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
        { type: "element", id: ElementNames.HYDRO },
        { type: "element", id: ElementNames.GEO },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weaponId: WeaponIds.HARBINGER_OF_DAWN,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.COLUMBINA_HYPOSELENIA,
            c: 0,
            weaponId: WeaponIds.SACRIFICIAL_JADE,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weaponId: WeaponIds.DRAGONS_BANE,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.INEFFA,
            c: 0,
            weaponId: WeaponIds.DEATHMATCH,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
        ], // Лучший отряд, Инеффа даёт щит
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weaponId: WeaponIds.FLUTE_OF_EZPITZAL,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.COLUMBINA_HYPOSELENIA,
            c: 0,
            weaponId: WeaponIds.SACRIFICIAL_JADE,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weaponId: WeaponIds.DRAGONS_BANE,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.GOROU,
            c: 6,
            weaponId: WeaponIds.FAVONIUS_WARBOW,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.INSTRUCTOR],
          },
        ], // На Коломбину можно поставить Янтарь для выживаемости (лечение)
        [
          {
            type: "character",
            id: CharacterIds.ZIBAI,
            c: 0,
            weaponId: WeaponIds.FLUTE_OF_EZPITZAL,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.AINO,
            c: 6,
            weaponId: WeaponIds.FAVONIUS_GREATSWORD,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.ILLUGA,
            c: 6,
            weaponId: WeaponIds.DRAGONS_BANE,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.WANDERERS_TROUPE, ArtifactSetIds.GILDED_DREAMS],
          },
          {
            type: "character",
            id: CharacterIds.GOROU,
            c: 6,
            weaponId: WeaponIds.FAVONIUS_WARBOW,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.INSTRUCTOR],
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
  signatureWeaponIds: [WeaponIds.LIGHTBEARING_MOONSHARD],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9-10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6-10" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_ZIBAI_IN_6_3_AnimeCool, VideoSourceIds.GUIDE_TO_ZIBAI_IN_6_3_MironMinMax],
  weapons: [
    { id: WeaponIds.LIGHTBEARING_MOONSHARD, best: "Лучшее оружие", percent: 1.2351 },
    { id: WeaponIds.URAKU_MISUGIRI, percent: 1.1248 },
    { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, percent: 1.0723 },
    { id: WeaponIds.HARBINGER_OF_DAWN, r: 5, percent: 1.0667 },
    { id: WeaponIds.PEAK_PATROL_SONG, percent: 1.0525 },
    { id: WeaponIds.SPLENDOR_OF_TRANQUIL_WATERS, percent: 1.0357 },
    { id: WeaponIds.HARAN_GEPPAKU_FUTSU, percent: 1.0076 },
    { id: WeaponIds.FLUTE_OF_EZPITZAL, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { id: WeaponIds.PRIMORDIAL_JADE_CUTTER, percent: 0.9935 },
    { id: WeaponIds.THE_BLACK_SWORD, r: 5, percent: 0.9863 },
    { id: WeaponIds.ABSOLUTION, percent: 0.9760 },
    { id: WeaponIds.MISTSPLITTER_REFORGED, percent: 0.9753 },
    { id: WeaponIds.ATHAME_ARTIS, percent: 0.9734 },
    { id: WeaponIds.WOLF_FANG, r: 5, percent: 0.9708 },
    { id: WeaponIds.THE_BLACK_SWORD, r: 1, percent: 0.9705 },
    { id: WeaponIds.WOLF_FANG, r: 1, percent: 0.9625 },
    { id: WeaponIds.CINNABAR_SPINDLE, r: 5, percent: 0.9616 },
    { id: WeaponIds.AZURELIGHT, percent: 0.9373 },
    { id: WeaponIds.TOUKABOU_SHIGURE, r: 5, percent: 0.9185 },
    { id: WeaponIds.BLACKCLIFF_LONGSWORD, postfix: "без стаков", percent: 0.9172 },
    { id: WeaponIds.FREEDOM_SWORN, percent: 0.9155 },
  ],
} as CharacterRecommendations;
