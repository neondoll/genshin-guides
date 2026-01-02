import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "С1 < Сигна < С2",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.ENGULFING_LIGHTNING],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 9 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_RAIDEN_SHOGUN_IN_5_0,
    VideoSourceIds.HOW_GOOD_IS_RAIDEN_SHOGUN_CONSTELLATIONS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.ENGULFING_LIGHTNING, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.THE_CATCH, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.DRAGONS_BANE, r: 5 },
  ],
} as CharacterRecommendations;
