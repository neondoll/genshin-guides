import { ArtifactSetNames } from "@/types/artifact-sets.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { type ElementName, ElementNames } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  [ElementNames.ANEMO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [
      VideoSourceIds.TALENT_GAINS_ANEMO,
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    ],
    weapons: [
      { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 },
      { name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 },
    ],
  },
  [ElementNames.DENDRO]: {
    recommendedLevel: "90/90",
    videoSourceIds: [
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
    ],
    weapons: [
      { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 },
      { name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 },
    ],
  },
  [ElementNames.ELECTRO]: {
    videoSourceIds: [
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    ],
    weapons: [
      { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 },
      { name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 },
    ],
  },
  [ElementNames.GEO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [
      VideoSourceIds.TALENT_GAINS_GEO,
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    ],
    weapons: [
      { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 },
      { name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 },
    ],
  },
  [ElementNames.HYDRO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [
      VideoSourceIds.TALENT_GAINS_HYDRO,
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    ],
    weapons: [
      { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее оружие", r: 5 },
      { name: WeaponNames.SACRIFICIAL_SWORD, best: "Лучшее оружие", r: 5 },
    ],
  },
  [ElementNames.PYRO]: {
    artifacts: {
      sets: {
        "для игры из кармана": [
          { type: "complete", name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY },
          { type: "complete", name: ArtifactSetNames.TENACITY_OF_THE_MILLELITH },
          { type: "complete", name: ArtifactSetNames.INSTRUCTOR },
        ],
        "для игры на поле": [
          { type: "complete", name: ArtifactSetNames.OBSIDIAN_CODEX, percent: 1.000 },
          { type: "complete", name: ArtifactSetNames.GILDED_DREAMS, percent: 0.884 },
          {
            type: "combined",
            names: [ArtifactSetNames.GLADIATORS_FINALE, ArtifactSetNames.SHIMENAWAS_REMINISCENCE],
            percent: 0.839,
          },
          {
            type: "combined",
            names: [ArtifactSetNames.GLADIATORS_FINALE, ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES],
            percent: 0.827,
          },
          {
            type: "combined",
            names: [ArtifactSetNames.OBSIDIAN_CODEX, ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES],
            percent: 0.819,
          },

        ],
      },
      stats: {
        sands: [{ name: Stats.ATK_PERCENTAGE }],
        goblet: [{ name: Stats.PYRO_DMG_BONUS }, { name: Stats.ATK_PERCENTAGE }],
        circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
        additional: [
          { name: Stats.CRIT_RATE },
          { name: Stats.CRIT_DMG },
          { name: Stats.ATK_PERCENTAGE },
          { name: Stats.ENERGY_RECHARGE, notes: ["Намеренно собирать не нужно"] },
          { name: Stats.ATK },
        ],
      },
    },
    talents: [
      { type: "combat1", priority: "В первую очередь", recommendedLevel: "1 - 9", overallLevel: 1 },
      { type: "combat2", priority: "По необходимости", recommendedLevel: "1 - 8", overallLevel: 1 },
      { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8", overallLevel: 1 },
    ],
    videoSourceIds: [VideoSourceIds.GUIDE_TO_TRAVELER_PYRO, VideoSourceIds.TALENT_GAINS_PYRO],
    weapons: {
      "для игры из кармана": [
        { name: WeaponNames.FREEDOM_SWORN },
        { name: WeaponNames.FAVONIUS_SWORD },
        { name: WeaponNames.SACRIFICIAL_SWORD },
      ],
      "для игры на поле": [
        { name: WeaponNames.MISTSPLITTER_REFORGED, percent: 1.240 },
        { name: WeaponNames.HARAN_GEPPAKU_FUTSU, percent: 1.172 },
        { name: WeaponNames.LIGHT_OF_FOLIAR_INCISION, percent: 1.168 },
        { name: WeaponNames.PRIMORDIAL_JADE_CUTTER, percent: 1.164 },
        { name: WeaponNames.URAKU_MISUGIRI, percent: 1.126 },
        { name: WeaponNames.THE_BLACK_SWORD, r: 5, percent: 1.000 },
        { name: WeaponNames.WOLF_FANG, r: 5, percent: 0.986 },
        { name: WeaponNames.IRON_STING, r: 5, percent: 0.976 },
        { name: WeaponNames.KAGOTSURUBE_ISSHIN, r: 1, percent: 0.966 },
        { name: WeaponNames.THE_BLACK_SWORD, r: 1, percent: 0.954 },
        { name: WeaponNames.WOLF_FANG, r: 1, percent: 0.950 },
        { name: WeaponNames.IRON_STING, r: 1, percent: 0.938 },
      ],
    },
  },
} as Record<Exclude<ElementName, typeof ElementNames.CRYO>, CharacterRecommendations>;
