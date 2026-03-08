import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.VIRIDESCENT_VENERER], notes: ["если играем из кармана"] },
      { ids: [ArtifactSetIds.DESERT_PAVILION_CHRONICLE], notes: ["если играем на поле"] },
    ],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [{ name: Stats.ANEMO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE, notes: ["140%-160%"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Если нет Легендарного лука: С1 < Сигна\nЕсли есть Легендарный лук: С1 > Сигна",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.ELEGY_FOR_THE_END, WeaponIds.SKYWARD_HARP, WeaponIds.THE_DAYBREAK_CHRONICLES],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 8" },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_VENTI_IN_6_2,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: {
    "если играем на поле": [
      { id: WeaponIds.THE_DAYBREAK_CHRONICLES, best: "Лучшее решение", r: 1, percent: 1.239 },
      { id: WeaponIds.POLAR_STAR, r: 1, percent: 1.162, notes: ["Нужно сделать быструю заряженную атаку"] },
      { id: WeaponIds.THUNDERING_PULSE, r: 1, percent: 1.149 },
      { id: WeaponIds.AQUA_SIMULACRA, r: 1, percent: 1.112 },
      { id: WeaponIds.SKYWARD_HARP, r: 1, percent: 1.106 },
      { id: WeaponIds.THE_FIRST_GREAT_MAGIC, r: 1, percent: 1.096 },
      { id: WeaponIds.HUNTERS_PATH, r: 1, percent: 1.032 },
      { id: WeaponIds.AMOS_BOW, r: 1, percent: 1.004 },
      { id: WeaponIds.RUST, best: "Лучшее эпическое решение", r: 5, percent: 1.000 },
      { id: WeaponIds.SONG_OF_STILLNESS, r: 5, percent: 0.969, notes: ["Нужно получить лечение"] },
      { id: WeaponIds.SLINGSHOT, r: 5, percent: 0.960 },

    ],
    "если играем из кармана": [
      { id: WeaponIds.ELEGY_FOR_THE_END, best: "Лучшее решение", r: 1 },
      { id: WeaponIds.THE_STRINGLESS, r: 5 },
      { id: WeaponIds.FAVONIUS_WARBOW, best: "Лучшее доступное решение", r: 5 },
    ],
  },
} as CharacterRecommendations;
