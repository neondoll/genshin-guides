import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "По необходимости", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.SONG_OF_BROKEN_PINES, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.TIDAL_SHADOW, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.PROTOTYPE_ARCHAIC, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
