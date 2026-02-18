import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  videoSourceIds: [
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.HUNTERS_PATH, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SLINGSHOT, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
