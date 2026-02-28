import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.SILVERSHOWER_HEARTSTRINGS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "1 - 9", overallLevel: 6 },
    { type: "combat3", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.SILVERSHOWER_HEARTSTRINGS, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.SACRIFICIAL_BOW, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.RECURVE_BOW, r: 5 },
  ],
} as CharacterRecommendations;
