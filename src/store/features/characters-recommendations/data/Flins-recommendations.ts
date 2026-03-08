import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] }],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["Приоритетно", "от 2000"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Без сигны ~125%", "С сигной ~110%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Специально не собирать", "от 150"] },
        // Криты > Атака > Мастерство
      ],
    },
  },
  attackCombinations: {
    "Обычная ротация": ["Навык (Вход в стойку)", "Навык (Особый)", "Взрыв стихий (Особый)", "Атаки (Ждем откат)", "Навык (Особый)", "Взрыв стихий (Особый)"],
    "Ротация посложнее": ["Навык (Вход в стойку)", "Навык (Особый)", "1 Атака (Получаем энергию)", "Взрыв стихий (Особый)", "4 Атаки - рывок (повторить 2 раза) (Ждем откат)", "Навык (Особый)", "Взрыв стихий (Особый)"],
  },
  constellationOrSignatureWeapon: "C1 > C2 > Сигна",
  detachments: [
    {
      template: [
        { type: "character", id: CharacterIds.FLINS },
        { type: "element", id: ElementIds.HYDRO },
        { type: "element", id: ElementIds.ELECTRO },
        { type: "other", title: "Герой" },
      ],
      variants: [
        [
          {
            type: "character",
            id: CharacterIds.FLINS,
            c: 0,
            weaponId: WeaponIds.BLOODSOAKED_RUINS,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING],
          },
          {
            type: "character",
            id: CharacterIds.INEFFA,
            c: 0,
            weaponId: WeaponIds.FRACTURED_HALO,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          {
            type: "character",
            id: CharacterIds.COLUMBINA,
            c: 0,
            weaponId: WeaponIds.NOCTURNES_CURTAIN_CALL,
            weaponR: 1,
            artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE],
          },
          {
            type: "character",
            id: CharacterIds.SUCROSE,
            c: 6,
            weaponId: WeaponIds.WANDERING_EVENSTAR,
            weaponR: 2,
            artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER],
          },
        ],
        [
          { type: "character", id: CharacterIds.FLINS, artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] },
          {
            type: "character",
            id: CharacterIds.INEFFA,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          { type: "character", id: CharacterIds.COLUMBINA, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.JAHODA, artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER] },
        ],
        [
          { type: "character", id: CharacterIds.FLINS, artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] },
          { type: "character", id: CharacterIds.FISCHL, artifactSetIds: [ArtifactSetIds.GOLDEN_TROUPE] },
          { type: "character", id: CharacterIds.AINO, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.SUCROSE, artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER] },
        ],
        [
          { type: "character", id: CharacterIds.FLINS, artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] },
          { type: "character", id: CharacterIds.FISCHL, artifactSetIds: [ArtifactSetIds.GOLDEN_TROUPE] },
          { type: "character", id: CharacterIds.AINO, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.JAHODA, artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER] },
        ],
        // Оророн | Иансан - Церемония древней знати
        // Шилонен - Церемония древней знати | Инструктор
        // Кокоми - Стойкость Миллелита | Серенада шёлковой луны
        // Фурина | Е Лань - Серенада шёлковой луны | Церемония древней знати
      ],
    },
  ],
  keyConstellations: [1, 2],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.BLOODSOAKED_RUINS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 9" },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "9 - 10" },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_AnimeCool,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_MironMinMax,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_xPandaChannelx,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_4_AnimeCool,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_4_MironMinMax,
  ],
  weapons: [
    { id: WeaponIds.BLOODSOAKED_RUINS, best: "Лучшее решение", percent: 1.2475 },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.1311, notes: ["Доп. МС полезен"] },
    { id: WeaponIds.FRACTURED_HALO, percent: 1.1305 },
    { id: WeaponIds.STAFF_OF_HOMA, percent: 1.1148 },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.1129 },
    { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.1031, notes: ["С щитом"] },
    { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.0870 },
    { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.0855 },
    { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.0695 },
    { id: WeaponIds.CALAMITY_QUELLER, percent: 1.0673 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0252 },
    { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.0235 },
    { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.0018 },
    { id: WeaponIds.PROSPECTORS_SHOVEL, best: "Лучшее доступное решение", r: 5, percent: 1.0000 },
    { id: WeaponIds.MISSIVE_WINDSPEAR, r: 5, percent: 0.9953 },
    { id: WeaponIds.SACRIFICERS_STAFF, r: 5, percent: 0.9866 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.9846 },
    { id: WeaponIds.SKYWARD_SPINE, percent: 0.9681 },
    { id: WeaponIds.TAMAYURATEI_NO_OHANASHI, r: 5, percent: 0.9652 },
    { id: WeaponIds.ENGULFING_LIGHTNING, percent: 0.9591 },
    { id: WeaponIds.SACRIFICERS_STAFF, r: 1, percent: 0.9478 },
  ],
} as CharacterRecommendations;
