import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "70/80",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 1 },
    { type: "combat2", priority: "По необходимости", recommendedLevel: "6 - 8", overallLevel: 1 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 9", overallLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [{ id: WeaponIds.FAVONIUS_GREATSWORD, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
