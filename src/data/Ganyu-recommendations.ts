import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  constellationOrSignatureWeapon: `Сигна < С1 < ${WeaponNames.ASTRAL_VULTURES_CRIMSON_PLUMAGE}`,
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.AMOS_BOW],
  talents: {
    Мелт: [
      { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
      { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
      { type: "combat3", priority: "Не качаем", referenceLevel: 1 },
    ],
    Фриз: [
      { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
      { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
      { type: "combat3", priority: "По необходимости", referenceLevel: 6 },
    ],
    Саппорт: [
      { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
      { type: "combat2", priority: "Во вторую очередь", referenceLevel: 6 },
      { type: "combat3", priority: "В первую очередь", referenceLevel: 8 },
    ],
  },
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.ASTRAL_VULTURES_CRIMSON_PLUMAGE, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.AMOS_BOW, r: 1 },
    { name: WeaponNames.ELEGY_FOR_THE_END, r: 1 },
    { name: WeaponNames.SONG_OF_STILLNESS, best: "Лучшее доступное оружие (когда условия выполняются)", r: 5 },
    { name: WeaponNames.HAMAYUMI, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
