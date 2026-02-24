import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "9 - 10" },
    { type: "combat2", priority: "По необходимости", recommendedLevel: 6 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "8 - 10" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_GEO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.REDHORN_STONETHRESHER, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_GREATSWORD, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.WHITEBLIND, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
