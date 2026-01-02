import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.SILVERSHOWER_HEARTSTRINGS],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.SILVERSHOWER_HEARTSTRINGS, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SACRIFICIAL_BOW, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.RECURVE_BOW, r: 5 },
  ],
} as CharacterRecommendations;
