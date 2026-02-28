import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.STAFF_OF_HOMA],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "8 - 10", overallLevel: 10 },
    { type: "combat3", priority: "По необходимости", recommendedLevel: "6 - 9", overallLevel: 9 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.STAFF_OF_HOMA, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, r: 1 },
    { id: WeaponIds.DRAGONS_BANE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
