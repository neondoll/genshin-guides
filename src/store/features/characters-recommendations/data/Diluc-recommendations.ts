import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 9", overallLevel: 1 },
    { type: "combat3", priority: "По необходимости", recommendedLevel: "6 - 9", overallLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.REDHORN_STONETHRESHER, r: 1 },
    { id: WeaponIds.SERPENT_SPINE, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.WOLFS_GRAVESTONE, r: 1 },
    { id: WeaponIds.BLACKCLIFF_SLASHER, best: "Лучшее доступное решение (когда работает на полную)", r: 5 },
    { id: WeaponIds.EARTH_SHAKER, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.RAINSLASHER, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
