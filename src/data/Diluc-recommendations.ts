import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "По необходимости", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.REDHORN_STONETHRESHER, r: 1 },
    { name: WeaponNames.SERPENT_SPINE, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.WOLFS_GRAVESTONE, r: 1 },
    { name: WeaponNames.BLACKCLIFF_SLASHER, best: "Лучшее доступное оружие (когда работает на полную)", r: 5 },
    { name: WeaponNames.EARTH_SHAKER, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.RAINSLASHER, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;