import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR],
  talents: [
    { type: "combat1", priority: "Во вторую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "По необходимости", referenceLevel: 8 },
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
    { name: WeaponNames.STAFF_OF_HOMA, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, r: 1 },
    { name: WeaponNames.BLACKCLIFF_POLE, best: "Лучшее доступное оружие (когда работает)", r: 5 },
    { name: WeaponNames.WHITE_TASSEL, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FAVONIUS_LANCE, r: 5 },
  ],
} as CharacterRecommendations;
