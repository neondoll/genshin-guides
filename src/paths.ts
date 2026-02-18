const Paths = {
  ARTIFACT_SET: (artifactSetId: string) => `/artifact-sets/${artifactSetId}`,
  ARTIFACT_SETS: "/artifact-sets",
  ARTIFACT_SETS_TIER_LIST: "/artifact-sets/tier-list",
  CHARACTER: (characterId: string) => `/characters/${characterId}`,
  CHARACTERS: "/characters",
  HOME: "/",
  WEAPON: (weaponId: string) => `/weapons/${weaponId}`,
  WEAPONS: "/weapons",
} as const;

export default Paths;
