import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: 6 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.FAVONIUS_SWORD, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.SACRIFICIAL_SWORD, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
