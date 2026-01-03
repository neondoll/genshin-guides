import type { ArtifactSetRecommendations } from "../types";
import { type ArtifactSetName, ArtifactSetNames } from "../../artifact-sets";

export default {
  [ArtifactSetNames.ARCHAIC_PETRA]: () => import("./ArchaicPetra-recommendations"),
  [ArtifactSetNames.BLIZZARD_STRAYER]: () => import("./BlizzardStrayer-recommendations"),
  [ArtifactSetNames.BLOODSTAINED_CHIVALRY]: () => import("./BloodstainedChivalry-recommendations"),
  [ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES]: () => import("./CrimsonWitchOfFlames-recommendations"),
  [ArtifactSetNames.DEEPWOOD_MEMORIES]: () => import("./DeepwoodMemories-recommendations"),
} as Record<ArtifactSetName, () => Promise<{ default: ArtifactSetRecommendations }>>;
