import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "6 - 10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 10" },
  ],
  videoSourceIds: [VideoSourceIds.TALENT_GAINS_ANEMO],
} as CharacterRecommendations;
