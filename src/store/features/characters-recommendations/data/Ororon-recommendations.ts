import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";

export default {
  id: CharacterIds.ORORON,
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
} as CharacterRecommendations;
