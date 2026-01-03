import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: `С1 если ${WeaponNames.THE_WIDSITH} R5 | Сигна если ${WeaponNames.THE_WIDSITH} не R5`,
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.TULAYTULLAHS_REMEMBRANCE],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "По необходимости", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.TULAYTULLAHS_REMEMBRANCE, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FLOWING_PURITY, r: 5 },
  ],
} as CharacterRecommendations;
