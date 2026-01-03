import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "70/80",
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
    { name: WeaponNames.ELEGY_FOR_THE_END, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_WARBOW, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
