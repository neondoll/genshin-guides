import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";

export default {
  carriers: [
    { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
    { type: "character", name: CharacterNames.INEFFA, best: true },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_A_DAY_CARVED_FROM_RISING_WINDS_AND_AUBADE_OF_MORNINGSTAR_AND_MOON_IN_6_3],
} as ArtifactSetRecommendations;
