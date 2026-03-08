import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.FREEDOM_SWORN],
  talents: [
    { type: "combat1", priority: "По необходимости", recommendedLevel: "1 - 6" },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "1 - 6" },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "1 - 6" },
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
    { id: WeaponIds.XIPHOS_MOONLIGHT, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.FREEDOM_SWORN, r: 1 },
    { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.TOUKABOU_SHIGURE, best: "Лучшее эвентовое решение", r: 5 },
    { id: WeaponIds.IRON_STING, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
