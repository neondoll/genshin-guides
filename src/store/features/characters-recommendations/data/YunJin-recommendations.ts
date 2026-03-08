import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "8 - 10" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_GEO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.FOOTPRINT_OF_THE_RAINBOW, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.FAVONIUS_LANCE, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
