import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.LIGHT_OF_FOLIAR_INCISION],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", referenceLevel: 6 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "По необходимости", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.IRON_STING, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.HARBINGER_OF_DAWN, r: 5 },
  ],
} as CharacterRecommendations;
