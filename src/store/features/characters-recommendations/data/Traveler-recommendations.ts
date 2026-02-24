import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { type ElementName, ElementNames } from "@/types/elements.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  [ElementNames.ANEMO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [VideoSourceIds.TALENT_GAINS_ANEMO],
  },
  [ElementNames.GEO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [VideoSourceIds.TALENT_GAINS_GEO],
  },
  [ElementNames.HYDRO]: {
    talents: [
      { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat2", priority: "Не качаем", recommendedLevel: 1 },
      { type: "combat3", priority: "Не качаем", recommendedLevel: 1 },
    ],
    videoSourceIds: [VideoSourceIds.TALENT_GAINS_HYDRO],
  },
  [ElementNames.PYRO]: {
    talents: [
      { type: "combat1", priority: "В первую очередь", recommendedLevel: "1 - 9", overallLevel: 1 },
      { type: "combat2", priority: "По необходимости", recommendedLevel: "1 - 8", overallLevel: 1 },
      { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8", overallLevel: 1 },
    ],
    videoSourceIds: [VideoSourceIds.TALENT_GAINS_PYRO],
  },
} as Record<ElementName, CharacterRecommendations>;
