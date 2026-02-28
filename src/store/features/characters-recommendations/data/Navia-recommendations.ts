import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.VERDICT],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", recommendedLevel: "8 - 10" },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9 - 10" },
    { type: "combat3", priority: "По необходимости", recommendedLevel: "6 - 9" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_GEO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.VERDICT, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.TIDAL_SHADOW, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
