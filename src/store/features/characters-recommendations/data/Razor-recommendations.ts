import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
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
    { name: WeaponNames.BLOODTAINTED_GREATSWORD, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.RAINSLASHER, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.MAKHAIRA_AQUAMARINE, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.MAILED_FLOWER, best: "Лучшее эвентовое оружие", r: 5 },
  ],
} as CharacterRecommendations;
