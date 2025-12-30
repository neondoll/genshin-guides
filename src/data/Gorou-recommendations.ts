import { CharacterRoleIds } from "@/store/features/character-roles";
import { WeaponNames } from "@/store/features/weapons";
import { VideoSourceIds } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Не качаем", referenceLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [{ name: WeaponNames.FAVONIUS_WARBOW, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
