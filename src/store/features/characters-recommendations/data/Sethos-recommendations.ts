import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.SETHOS,
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  videoSourceIds: [
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.HUNTERS_PATH, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.SLINGSHOT, best: "Лучшее доступное решение", r: 5 },
  ],
} as CharacterRecommendations;
