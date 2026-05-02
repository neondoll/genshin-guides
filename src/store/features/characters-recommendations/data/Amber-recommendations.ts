import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.AMBER,
  recommendedLevel: "70/80",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "8 - 10", overallLevel: 1 },
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
    { id: WeaponIds.ELEGY_FOR_THE_END, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.FAVONIUS_WARBOW, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
