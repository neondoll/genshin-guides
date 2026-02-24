import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "8 - 10" },
    { type: "combat2", priority: "По необходимости", recommendedLevel: "6 - 8" },
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
    { name: WeaponNames.LOST_PRAYER_TO_THE_SACRED_WINDS, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее оружие (для сапорта)", r: 5 },
    { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FLOWING_PURITY, best: "Лучшее доступное оружие (получше)", r: 5 },
  ],
} as CharacterRecommendations;
