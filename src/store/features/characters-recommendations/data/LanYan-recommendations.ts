import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: CharacterIds.LAN_YAN,
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: 6 },
  ],
  videoSourceIds: [VideoSourceIds.TALENT_GAINS_ANEMO],
} as CharacterRecommendations;
