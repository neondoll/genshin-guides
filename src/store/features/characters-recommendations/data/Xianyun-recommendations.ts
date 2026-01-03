import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.CRANES_ECHOING_CALL],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.CRANES_ECHOING_CALL, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.OATHSWORN_EYE, best: "Лучшее эвентовое оружие", r: 5 },
    { name: WeaponNames.FAVONIUS_CODEX, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
