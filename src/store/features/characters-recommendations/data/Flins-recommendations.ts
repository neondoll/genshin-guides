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
      sands: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.ATK_PERCENTAGE, notes: ["от 2000"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 150"] },
        { name: Stats.ENERGY_RECHARGE },
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] },
        // Криты > Атака > Мастерство
      ],
    },
  },
  attackCombinations: {
    Отряд: ["Батарейка", "Гидро перс", "Саппорт", "Флинс"],
    Попроще: ["Навык (Вход в стойку)", "Навык (Особый)", "Ульта (Без анимации)", "Атаки (Ждем откат)", "Навык (Особый)", "Ульта (Без анимации)"],
    Посложнее: ["Навык (Вход в стойку)", "Навык (Особый)", "1 Атака (Получаем энергию)", "Ульта (Без анимации)", "4 Атаки - рывок (повторить 2 раза) (Ждем откат)", "Навык (Особый)", "Ульта (Без анимации)"],
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
          { type: "character", id: CharacterIds.FLINS, artifactSetIds: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING] },
          {
            type: "character",
            id: CharacterIds.INEFFA,
            artifactSetIds: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON],
          },
          { type: "character", id: CharacterIds.COLUMBINA, artifactSetIds: [ArtifactSetIds.SILKEN_MOONS_SERENADE] },
          { type: "character", id: CharacterIds.SUCROSE, artifactSetIds: [ArtifactSetIds.VIRIDESCENT_VENERER] },
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
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.BLOODSOAKED_RUINS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_AnimeCool,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_MironMinMax,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_0_xPandaChannelx,
    VideoSourceIds.GUIDE_TO_FLINS_IN_6_4_AnimeCool,
  ],
  weapons: [
    { id: WeaponIds.BLOODSOAKED_RUINS, best: true, r: 1, percent: 1.30, notes: ["Лучшее решение"] },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.19, notes: ["Доп. МС полезен"] },
    { id: WeaponIds.FRACTURED_HALO, percent: 1.16 },
    { id: WeaponIds.STAFF_OF_HOMA, percent: 1.14 },
    { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.13 },
    { id: WeaponIds.ENGULFING_LIGHTNING, percent: 1.13, notes: ["Обычный взрыв стихий"] },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.13 },
    { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.12 },
    { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.11 },
    { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.09, notes: ["С щитом"] },
    { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.08 },
    { id: WeaponIds.CALAMITY_QUELLER, percent: 1.06 },
    { id: WeaponIds.SKYWARD_SPINE, percent: 1.05, notes: ["Обычный взрыв стихий"] },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.05 },
    { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.05 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.01 },
    { id: WeaponIds.FAVONIUS_LANCE, percent: 1.01, notes: ["Обычный взрыв стихий"] },
    { id: WeaponIds.PROSPECTORS_SHOVEL, percent: 1.00 },
    { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.98 },
    { id: WeaponIds.KITAIN_CROSS_SPEAR, percent: 0.94 },
    { id: WeaponIds.FAVONIUS_LANCE, postfix: "с обыч. ротацией", percent: 0.84 },
  ],
} as CharacterRecommendations;
