import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.EVERLASTING_MOONGLOW],
  talents: [
    { type: "combat1", priority: "По необходимости", recommendedLevel: "6 - 9", overallLevel: 6 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 9", overallLevel: 6 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "6 - 10", overallLevel: 8 },
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
    { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее оружие", r: 5 },
    { id: WeaponIds.EVERLASTING_MOONGLOW, r: 1 },
    { id: WeaponIds.FLOWING_PURITY, r: 5 },
    { id: WeaponIds.PROTOTYPE_AMBER, r: 5 },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS, r: 5 },
  ],
} as CharacterRecommendations;
