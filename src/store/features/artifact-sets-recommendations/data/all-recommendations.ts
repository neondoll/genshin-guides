import type { ArtifactSetRecommendations } from "../types";
import { type ArtifactSetName, ArtifactSetNames } from "../../artifact-sets";

export default {
  [ArtifactSetNames.ARCHAIC_PETRA]: () => import("./ArchaicPetra-recommendations"),
  [ArtifactSetNames.BLIZZARD_STRAYER]: () => import("./BlizzardStrayer-recommendations"),
  [ArtifactSetNames.BLOODSTAINED_CHIVALRY]: () => import("./BloodstainedChivalry-recommendations"),
  [ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES]: () => import("./CrimsonWitchOfFlames-recommendations"),
  [ArtifactSetNames.DEEPWOOD_MEMORIES]: () => import("./DeepwoodMemories-recommendations"),
  [ArtifactSetNames.GLADIATORS_FINALE]: () => import("./GladiatorsFinale-recommendations"),
  [ArtifactSetNames.HEART_OF_DEPTH]: () => import("./HeartOfDepth-recommendations"),
  [ArtifactSetNames.INSTRUCTOR]: () => import("./Instructor-recommendations"),
  [ArtifactSetNames.LAVAWALKER]: () => import("./Lavawalker-recommendations"),
  [ArtifactSetNames.MAIDEN_BELOVED]: () => import("./MaidenBeloved-recommendations"),
  [ArtifactSetNames.PALE_FLAME]: () => import("./PaleFlame-recommendations"),
  [ArtifactSetNames.RETRACING_BOLIDE]: () => import("./RetracingBolide-recommendations"),
  [ArtifactSetNames.TENACITY_OF_THE_MILLELITH]: () => import("./TenacityOfTheMillelith-recommendations"),
  [ArtifactSetNames.THE_EXILE]: () => import("./TheExile-recommendations"),
  [ArtifactSetNames.THUNDERING_FURY]: () => import("./ThunderingFury-recommendations"),
  [ArtifactSetNames.THUNDERSOOTHER]: () => import("./Thundersoother-recommendations"),
  [ArtifactSetNames.VIRIDESCENT_VENERER]: () => import("./ViridescentVenerer-recommendations"),
  [ArtifactSetNames.WANDERERS_TROUPE]: () => import("./WanderersTroupe-recommendations"),
} as Record<ArtifactSetName, () => Promise<{ default: ArtifactSetRecommendations }>>;
