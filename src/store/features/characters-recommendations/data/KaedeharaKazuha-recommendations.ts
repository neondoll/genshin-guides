import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "С1",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.FREEDOM_SWORN],
  talents: [
    { type: "combat1", priority: "По необходимости", referenceLevel: 8 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.XIPHOS_MOONLIGHT, best: "Лучшее оружие", r: 5 },
    { name: WeaponNames.FREEDOM_SWORN, r: 1 },
    { name: WeaponNames.FAVONIUS_SWORD, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.TOUKABOU_SHIGURE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.IRON_STING, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
