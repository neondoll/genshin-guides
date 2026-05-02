import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.ALOY,
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.PREDATOR],
} as CharacterRecommendations;
