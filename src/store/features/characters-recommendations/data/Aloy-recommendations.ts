import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { WeaponNames } from "../../weapons";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.PREDATOR],
} as CharacterRecommendations;
