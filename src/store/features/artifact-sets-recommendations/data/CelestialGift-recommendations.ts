import { ArtifactSetIds } from "@/types/artifact-sets";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";
import { CharacterIds } from "@/types/characters";
import { VideoSourceIds } from "@/types/video-sources";

export default {
  id: ArtifactSetIds.CELESTIAL_GIFT,
  carriers: [
    { type: "character", id: CharacterIds.ALBEDO, best: true },
    { type: "character", id: CharacterIds.DURIN, best: true },
    { type: "character", id: CharacterIds.FISCHL, best: true },
    { type: "character", id: CharacterIds.MONA, best: true },
    { type: "character", id: CharacterIds.NICOLE, best: true },
    { type: "character", id: CharacterIds.PRUNE },
    { type: "character", id: CharacterIds.SUCROSE },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_CELESTIAL_GIFT_AND_DISENCHANTMENT_IN_DEEP_SHADOW_IN_6_6],
} as ArtifactSetRecommendations;
