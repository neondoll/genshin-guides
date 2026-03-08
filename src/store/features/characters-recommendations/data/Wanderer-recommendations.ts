import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: `С1 если ${WeaponIds.THE_WIDSITH} R5 | Сигна если ${WeaponIds.THE_WIDSITH} не R5`,
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.TULAYTULLAHS_REMEMBRANCE],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: 10 },
    { type: "combat3", priority: "По необходимости", recommendedLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.TULAYTULLAHS_REMEMBRANCE, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.FLOWING_PURITY, r: 5 },
  ],
} as CharacterRecommendations;
