import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "По необходимости", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 6 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_ANEMO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.HAKUSHIN_RING, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.THE_WIDSITH, r: 5 },
    { id: WeaponIds.FAVONIUS_CODEX, best: "Лучшее решение", r: 5 },
    { id: WeaponIds.PROTOTYPE_AMBER, r: 5 },
  ],
} as CharacterRecommendations;
