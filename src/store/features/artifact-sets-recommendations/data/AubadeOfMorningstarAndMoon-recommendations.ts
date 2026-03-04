import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export default {
  carriers: [
    { type: "character", id: CharacterIds.COLUMBINA },
    { type: "character", id: CharacterIds.INEFFA, best: true },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_A_DAY_CARVED_FROM_RISING_WINDS_AND_AUBADE_OF_MORNINGSTAR_AND_MOON_IN_6_3],
} as ArtifactSetRecommendations;
