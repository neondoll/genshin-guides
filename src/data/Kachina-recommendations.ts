import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  videoSourceIds: [
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [{ name: WeaponNames.FAVONIUS_LANCE, best: "Лучшее оружие", r: 5 }],
} as CharacterRecommendations;
