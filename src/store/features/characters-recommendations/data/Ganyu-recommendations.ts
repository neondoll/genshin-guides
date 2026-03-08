import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds, WeaponNames } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: `Сигна < С1 < ${WeaponNames.ASTRAL_VULTURES_CRIMSON_PLUMAGE}`,
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.AMOS_BOW],
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
    { id: WeaponIds.ASTRAL_VULTURES_CRIMSON_PLUMAGE, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.AMOS_BOW, r: 1 },
    { id: WeaponIds.ELEGY_FOR_THE_END, r: 1 },
    { id: WeaponIds.SONG_OF_STILLNESS, best: "Лучшее доступное решение (когда условия выполняются)", r: 5 },
    { id: WeaponIds.HAMAYUMI, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
