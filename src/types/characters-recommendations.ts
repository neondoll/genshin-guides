import type { ArtifactSetId } from "./artifact-sets";
import type { CharacterRoleId } from "./character-roles";
import type { CharacterConstellations, CharacterId, TravelerId } from "./characters";
import type { ElementId } from "./elements";
import type { Stat } from "./stats";
import type { VideoSourceId } from "./video-sources";
import type { WeaponId, WeaponR } from "./weapons";

interface CharacterArtifactSetRecommendation {
  ids: [ArtifactSetId] | [ArtifactSetId, ArtifactSetId];
  best?: boolean | string;
  percent?: number;
  notes?: string[];
}

export type CharacterArtifactSetRecommendations = Array<CharacterArtifactSetRecommendation>;
export type CharacterArtifactStatRecommendation = { name: Stat; notes?: string[] };

interface CharacterDetachmentCharacterRecommendation {
  type: "character";
  id: CharacterId;
  c?: CharacterConstellations;
  weaponId?: WeaponId;
  weaponR?: WeaponR;
  artifactSetIds?: [ArtifactSetId] | [ArtifactSetId, ArtifactSetId];
}

interface CharacterDetachmentElementRecommendation {
  type: "element";
  id: ElementId;
}

interface CharacterDetachmentOtherRecommendation {
  type: "other";
  title: string;
}

export type CharacterDetachmentItemRecommendation = CharacterDetachmentCharacterRecommendation | CharacterDetachmentElementRecommendation | CharacterDetachmentOtherRecommendation;
export type CharacterRecommendationsId = Exclude<CharacterId, TravelerId> | `traveler_${ElementId}`;

interface CharacterTalentRecommendation {
  type: "combat1" | "combat2" | "combat3";
  priority: string;
  referenceLevel?: string | number;
  recommendedLevel?: string | number;
  overallLevel?: string | number;
}

export type CharacterTalentRecommendations = Array<CharacterTalentRecommendation>;

interface CharacterWeaponRecommendation {
  id: WeaponId;
  best?: boolean | string;
  postfix?: string;
  r?: WeaponR;
  percent?: number;
  notes?: string[];
}

export type CharacterWeaponRecommendations = Array<CharacterWeaponRecommendation>;

export interface CharacterRecommendations {
  id: CharacterRecommendationsId;
  artifacts?: {
    sets: CharacterArtifactSetRecommendations | Record<string, CharacterArtifactSetRecommendations>;
    stats: Record<"sands" | "goblet" | "circlet" | "additional", Array<CharacterArtifactStatRecommendation>>;
  };
  attackCombinations?: string[] | Record<string, string[]>;
  constellationOrSignatureWeapon?: string;
  detachments?: Array<{
    description?: string;
    template: Array<CharacterDetachmentItemRecommendation>;
    variants?: Array<Array<CharacterDetachmentCharacterRecommendation>>;
    best?: boolean;
  }>;
  keyConstellations?: Array<Exclude<CharacterConstellations, 0>>;
  recommendedLevel?: string;
  roleIds?: CharacterRoleId[];
  signatureWeaponIds?: WeaponId[];
  talents?: CharacterTalentRecommendations | Record<string, CharacterTalentRecommendations>;
  videoSourceIds?: VideoSourceId[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
}
