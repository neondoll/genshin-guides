import type { ArtifactSetId } from "./types/artifact-sets.types";
import type { CharacterId } from "./types/characters.types";
import type { WeaponId } from "./types/weapons.types";

const Paths = {
  ARTIFACT_SET: (artifactSetId: ArtifactSetId | ":artifactSetId") => `/artifact-sets/${artifactSetId}`,
  ARTIFACT_SETS: "/artifact-sets",
  ARTIFACT_SETS_TIER_LIST: "/artifact-sets/tier-list",
  CHARACTER: (characterId: CharacterId | ":characterId") => `/characters/${characterId}`,
  CHARACTERS: "/characters",
  HOME: "/",
  WEAPON: (weaponId: WeaponId | ":weaponId") => `/weapons/${weaponId}`,
  WEAPONS: "/weapons",
} as const;

export default Paths;
