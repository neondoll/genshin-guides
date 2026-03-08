import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.MISTSPLITTER_REFORGED, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, r: 1 },
    { id: WeaponIds.BLACKCLIFF_LONGSWORD, best: "Лучшее доступное решение (когда работает на 3-х стаках)", r: 5 },
    { id: WeaponIds.FINALE_OF_THE_DEEP, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
