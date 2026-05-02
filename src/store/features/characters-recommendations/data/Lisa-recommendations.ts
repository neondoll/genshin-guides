import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.LISA,
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat3", priority: "Не качаем", referenceLevel: 1 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное решение (для ДД)", r: 5 },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS, best: "Лучшее доступное решение (для максимизации МС)", r: 5 },
  ],
} as CharacterRecommendations;
