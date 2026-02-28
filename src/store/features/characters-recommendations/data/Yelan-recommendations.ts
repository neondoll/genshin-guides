import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна, но лучше С1 и Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.AQUA_SIMULACRA],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "8 - 10", overallLevel: 9 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.AQUA_SIMULACRA, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.FAVONIUS_WARBOW, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.SACRIFICIAL_BOW, r: 5 },
    { id: WeaponIds.THE_STRINGLESS, r: 5 },
    { id: WeaponIds.SLINGSHOT, r: 5 },
  ],
} as CharacterRecommendations;
