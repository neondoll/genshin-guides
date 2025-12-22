import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.SACRIFICIAL_BOW, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.ELEGY_FOR_THE_END, r: 1 },
  ],
} as CharacterRecommendations;