import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.URAKU_MISUGIRI],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.URAKU_MISUGIRI, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.CINNABAR_SPINDLE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.FESTERING_DESIRE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.HARBINGER_OF_DAWN, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FLUTE_OF_EZPITZAL, r: 5 },
  ],
} as CharacterRecommendations;
