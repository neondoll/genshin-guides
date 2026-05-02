import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.EULA,
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.SONG_OF_BROKEN_PINES],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 6 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.SONG_OF_BROKEN_PINES, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, best: "Лучшее эвентовое решение", r: 5 },
    { id: WeaponIds.PROTOTYPE_ARCHAIC, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.TIDAL_SHADOW, r: 5 },
  ],
} as CharacterRecommendations;
