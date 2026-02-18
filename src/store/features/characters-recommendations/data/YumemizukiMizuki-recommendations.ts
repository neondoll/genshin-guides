import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.SUNNY_MORNING_SLEEP_IN],
} as CharacterRecommendations;
