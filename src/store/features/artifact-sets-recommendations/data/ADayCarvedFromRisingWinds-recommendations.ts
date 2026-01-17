import type { ArtifactSetRecommendations } from "../types";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";

export default {
  carriers: [
    { type: "character", name: CharacterNames.DURIN },
    { type: "character", name: CharacterNames.KLEE, best: true },
    { type: "character", name: CharacterNames.RAZOR, best: true },
    { type: "character", name: CharacterNames.VENTI, best: true },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_A_DAY_CARVED_FROM_RISING_WINDS_AND_AUBADE_OF_MORNINGSTAR_AND_MOON_IN_6_3],
} as ArtifactSetRecommendations;
