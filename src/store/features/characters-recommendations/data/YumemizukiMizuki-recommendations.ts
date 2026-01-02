import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { WeaponNames } from "../../weapons";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.SUNNY_MORNING_SLEEP_IN],
} as CharacterRecommendations;
