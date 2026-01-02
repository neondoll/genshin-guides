import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.REDHORN_STONETHRESHER, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_GREATSWORD, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.WHITEBLIND, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
