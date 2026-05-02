import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.BARBARA,
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "По необходимости", recommendedLevel: "1 - 6", overallLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "1 - 8", overallLevel: 6 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8", overallLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS, r: 5 },
  ],
} as CharacterRecommendations;
