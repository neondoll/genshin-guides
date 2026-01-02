import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
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
