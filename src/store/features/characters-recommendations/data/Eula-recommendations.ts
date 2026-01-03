import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.SONG_OF_BROKEN_PINES],
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
    { name: WeaponNames.SONG_OF_BROKEN_PINES, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.ULTIMATE_OVERLORDS_MEGA_MAGIC_SWORD, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.PROTOTYPE_ARCHAIC, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.TIDAL_SHADOW, r: 5 },
  ],
} as CharacterRecommendations;
