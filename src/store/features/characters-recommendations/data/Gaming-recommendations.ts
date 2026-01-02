import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  videoSourceIds: [
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.SERPENT_SPINE, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.REDHORN_STONETHRESHER, r: 1 },
    { name: WeaponNames.WOLFS_GRAVESTONE, r: 1 },
    { name: WeaponNames.EARTH_SHAKER, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.RAINSLASHER, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.TIDAL_SHADOW, r: 5 },
  ],
} as CharacterRecommendations;
