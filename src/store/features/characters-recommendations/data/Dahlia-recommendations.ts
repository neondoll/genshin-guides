import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: CharacterIds.DAHLIA,
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "1 - 6", overallLevel: 1 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "1 - 8", overallLevel: 6 },
  ],
  videoSourceIds: [VideoSourceIds.TALENT_GAINS_HYDRO],
} as CharacterRecommendations;
