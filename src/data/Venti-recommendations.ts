import { ArtifactSetNames } from "@/store/features/artifact-sets";
import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.VIRIDESCENT_VENERER, notes: ["если играем из кармана"] },
      { type: "complete", name: ArtifactSetNames.DESERT_PAVILION_CHRONICLE, notes: ["если играем на поле"] },
    ],
    stats: {
      sands: [{ name: "Сила атаки %" }],
      goblet: [{ name: "Бонус Анемо урона" }],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Шанс крит. попадания" },
        { name: "Крит. урон" },
        { name: "Сила атаки %" },
        { name: "Восст. энергии", notes: ["140%-160%"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Если нет Легендарного лука: С1 < Сигна\nЕсли есть Легендарный лук: С1 > Сигна",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.ELEGY_FOR_THE_END, WeaponNames.SKYWARD_HARP, WeaponNames.THE_DAYBREAK_CHRONICLES],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_VENTI_IN_6_2,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: {
    "если играем на поле": [
      { name: WeaponNames.THE_DAYBREAK_CHRONICLES, best: "Лучшее оружие", r: 1, percent: 1.239 },
      { name: WeaponNames.POLAR_STAR, r: 1, percent: 1.162, notes: ["Нужно сделать быструю заряженную атаку"] },
      { name: WeaponNames.THUNDERING_PULSE, r: 1, percent: 1.149 },
      { name: WeaponNames.AQUA_SIMULACRA, r: 1, percent: 1.112 },
      { name: WeaponNames.SKYWARD_HARP, r: 1, percent: 1.106 },
      { name: WeaponNames.THE_FIRST_GREAT_MAGIC, r: 1, percent: 1.096 },
      { name: WeaponNames.HUNTERS_PATH, r: 1, percent: 1.032 },
      { name: WeaponNames.AMOS_BOW, r: 1, percent: 1.004 },
      { name: WeaponNames.RUST, best: "Лучшее эпическое решение", r: 5, percent: 1.000 },
      { name: WeaponNames.SONG_OF_STILLNESS, r: 5, percent: 0.969, notes: ["Нужно получить лечение"] },
      { name: WeaponNames.SLINGSHOT, r: 5, percent: 0.960 },

    ],
    "если играем из кармана": [
      { name: WeaponNames.ELEGY_FOR_THE_END, best: "Лучшее оружие", r: 1 },
      { name: WeaponNames.THE_STRINGLESS, r: 5 },
      { name: WeaponNames.FAVONIUS_WARBOW, best: "Лучшее доступное оружие", r: 5 },
    ],
  },
} as CharacterRecommendations;
