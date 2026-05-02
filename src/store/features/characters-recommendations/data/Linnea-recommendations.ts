import { ArtifactSetIds } from "@/types/artifact-sets";
import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { ElementIds } from "@/types/elements";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.LINNEA,
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON], best: true },
      { ids: [ArtifactSetIds.HUSK_OF_OPULENT_DREAMS] },
      { ids: [ArtifactSetIds.GOLDEN_TROUPE] },
      { ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY] },
    ],
    stats: {
      sands: [
        { name: Stats.DEF_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE, notes: ["если требуется ульта по откату"] },
      ],
      goblet: [{ name: Stats.DEF_PERCENTAGE }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно"] },
        { name: Stats.DEF_PERCENTAGE, notes: ["Приоритетно"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Хорошо, если есть, но специально не искать"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  detachments: [
    {
      description: "Премиум",
      template: [
        { type: "character", id: CharacterIds.ZIBAI },
        { type: "character", id: CharacterIds.LINNEA },
        { type: "element", id: ElementIds.HYDRO },
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
            id: CharacterIds.COLUMBINA,
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
            id: CharacterIds.LINNEA,
            c: 0,
            weaponId: WeaponIds.THE_STRINGLESS,
            weaponR: 5,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
        ],
        [
          { type: "character", id: CharacterIds.ZIBAI, c: 0 },
          { type: "character", id: CharacterIds.AINO, c: 6, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.GOROU, c: 6, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.LINNEA, c: 0 },
        ],
      ],
    },
    {
      description: "Коляски",
      template: [
        { type: "other", title: "Колясочник" },
        { type: "character", id: CharacterIds.COLUMBINA },
        { type: "character", id: CharacterIds.LINNEA },
        { type: "other", title: "Полезный персонаж" },
      ],
      variants: [
        [
          { type: "character", id: CharacterIds.NEUVILLETTE },
          { type: "character", id: CharacterIds.COLUMBINA },
          { type: "character", id: CharacterIds.XILONEN },
          { type: "character", id: CharacterIds.LINNEA },
        ],
      ],
    },
    {
      description: "Без концепции",
      template: [
        { type: "character", id: CharacterIds.LINNEA },
        { type: "element", id: ElementIds.HYDRO },
      ],
    },
  ],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.GOLDEN_FROSTBOUND_OATH],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 8" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_LINNEA_IN_6_5_MironMinMax],
  weapons: [
    { id: WeaponIds.GOLDEN_FROSTBOUND_OATH, best: "Лучшее решение", percent: 1.1224 },
    { id: WeaponIds.AQUA_SIMULACRA, percent: 1.0254 },
    { id: WeaponIds.ELEGY_FOR_THE_END, percent: 1.0205 },
    { id: WeaponIds.HUNTERS_PATH, percent: 1.0160 },
    { id: WeaponIds.POLAR_STAR, percent: 1.0118 },
    { id: WeaponIds.THUNDERING_PULSE, percent: 1.0070 },
    { id: WeaponIds.ASTRAL_VULTURES_CRIMSON_PLUMAGE, percent: 1.0054 },
    { id: WeaponIds.SKYWARD_HARP, percent: 1.0027 },
    { id: WeaponIds.SLINGSHOT, best: "Лучшее доступное решение", percent: 1.0000 },
    { id: WeaponIds.THE_VIRIDESCENT_HUNT, percent: 0.9981 },
    { id: WeaponIds.THE_STRINGLESS, r: 5, percent: 0.9953 },
    { id: WeaponIds.THE_DAYBREAK_CHRONICLES, percent: 0.9951 },
    { id: WeaponIds.BLACKCLIFF_WARBOW, percent: 0.9941 },
    { id: WeaponIds.SCION_OF_THE_BLAZING_SUN, percent: 0.9910 },
    { id: WeaponIds.CLOUDFORGED, r: 5, percent: 0.9898 },
  ],
} as CharacterRecommendations;
