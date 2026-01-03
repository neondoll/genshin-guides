import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.ASTRAL_VULTURES_CRIMSON_PLUMAGE],
  videoSourceIds: [VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON, VideoSourceIds.GUIDE_TO_CHASCA_IN_5_8],
  weapons: [
    { name: WeaponNames.ASTRAL_VULTURES_CRIMSON_PLUMAGE, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.CHAIN_BREAKER, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
