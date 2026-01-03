import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "С1",
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.CALAMITY_QUELLER],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.CALAMITY_QUELLER, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_LANCE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
