import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", recommendedLevel: 10 },
    { type: "combat2", priority: "По необходимости", recommendedLevel: 9 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.STAFF_OF_HOMA, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, r: 1 },
    { id: WeaponIds.BLACKCLIFF_POLE, best: "Лучшее доступное оружие (когда работает)", r: 5 },
    { id: WeaponIds.WHITE_TASSEL, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.FAVONIUS_LANCE, r: 5 },
  ],
} as CharacterRecommendations;
