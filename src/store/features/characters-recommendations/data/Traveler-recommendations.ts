import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { type ElementId, ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  [ElementIds.ANEMO]: {
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
      { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
      { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее решение", r: 5 },
    ],
  },
  [ElementIds.DENDRO]: {
    recommendedLevel: "90/90",
    videoSourceIds: [
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
    ],
    weapons: [
      { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
      { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее решение", r: 5 },
    ],
  },
  [ElementIds.ELECTRO]: {
    videoSourceIds: [
      VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
      VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    ],
    weapons: [
      { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
      { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее решение", r: 5 },
    ],
  },
  [ElementIds.GEO]: {
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
      { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
      { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее решение", r: 5 },
    ],
  },
  [ElementIds.HYDRO]: {
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
      { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
      { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее решение", r: 5 },
    ],
  },
  [ElementIds.PYRO]: {
    artifacts: {
      sets: {
        "для игры из кармана": [
          { ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY] },
          { ids: [ArtifactSetIds.TENACITY_OF_THE_MILLELITH] },
          { ids: [ArtifactSetIds.INSTRUCTOR] },
        ],
        "для игры на поле": [
          { ids: [ArtifactSetIds.OBSIDIAN_CODEX], percent: 1.000 },
          { ids: [ArtifactSetIds.GILDED_DREAMS], percent: 0.884 },
          { ids: [ArtifactSetIds.GLADIATORS_FINALE, ArtifactSetIds.SHIMENAWAS_REMINISCENCE], percent: 0.839 },
          { ids: [ArtifactSetIds.GLADIATORS_FINALE, ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES], percent: 0.827 },
          { ids: [ArtifactSetIds.OBSIDIAN_CODEX, ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES], percent: 0.819 },
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
        { id: WeaponIds.FREEDOM_SWORN },
        { id: WeaponIds.FAVONIUS_SWORD },
        { id: WeaponIds.SACRIFICIAL_SWORD },
      ],
      "для игры на поле": [
        { id: WeaponIds.MISTSPLITTER_REFORGED, percent: 1.240 },
        { id: WeaponIds.HARAN_GEPPAKU_FUTSU, percent: 1.172 },
        { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, percent: 1.168 },
        { id: WeaponIds.PRIMORDIAL_JADE_CUTTER, percent: 1.164 },
        { id: WeaponIds.URAKU_MISUGIRI, percent: 1.126 },
        { id: WeaponIds.THE_BLACK_SWORD, r: 5, percent: 1.000 },
        { id: WeaponIds.WOLF_FANG, r: 5, percent: 0.986 },
        { id: WeaponIds.IRON_STING, r: 5, percent: 0.976 },
        { id: WeaponIds.KAGOTSURUBE_ISSHIN, r: 1, percent: 0.966 },
        { id: WeaponIds.THE_BLACK_SWORD, r: 1, percent: 0.954 },
        { id: WeaponIds.WOLF_FANG, r: 1, percent: 0.950 },
        { id: WeaponIds.IRON_STING, r: 1, percent: 0.938 },
      ],
    },
  },
} as Record<Exclude<ElementId, typeof ElementIds.CRYO>, CharacterRecommendations>;
