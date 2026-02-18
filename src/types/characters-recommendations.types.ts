import type { ArtifactSetName } from "./artifact-sets.types";
import type { CharacterRoleId } from "./character-roles.types";
import type { CharacterName } from "./characters.types";
import type { ElementName } from "./elements.types";
import type { Stat } from "./stats.types";
import type { VideoSourceId } from "./video-sources.types";
import type { WeaponName } from "./weapons.types";

interface CharacterArtifactSetRecommendationTemplate {
  best?: boolean | string;
  percent?: number;
  notes?: string[];
}

interface CharacterCombinedArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "combined";
  names: [ArtifactSetName, ArtifactSetName];
}

interface CharacterCompleteArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "complete";
  name: ArtifactSetName;
}

interface CharacterDetachmentCharacterRecommendation {
  type: "character";
  name: CharacterName;
}

interface CharacterDetachmentElementRecommendation {
  type: "element";
  name: ElementName;
}

interface CharacterDetachmentOtherRecommendation {
  type: "other";
  title: string;
}

interface CharacterTalentRecommendation {
  type: "combat1" | "combat2" | "combat3";
  priority: string;
  referenceLevel?: string | number;
}

interface CharacterWeaponRecommendation {
  name: WeaponName;
  best?: boolean | string;
  postfix?: string;
  r?: 1 | 2 | 3 | 4 | 5;
  percent?: number;
  notes?: string[];
}

export type CharacterArtifactSetRecommendations = Array<CharacterCompleteArtifactSetRecommendation | CharacterCombinedArtifactSetRecommendation>;
export type CharacterDetachmentItemRecommendation = CharacterDetachmentCharacterRecommendation | CharacterDetachmentElementRecommendation | CharacterDetachmentOtherRecommendation;
export type CharacterTalentRecommendations = Array<CharacterTalentRecommendation>;
export type CharacterWeaponRecommendations = Array<CharacterWeaponRecommendation>;

export interface CharacterRecommendations {
  artifacts?: {
    sets: CharacterArtifactSetRecommendations | Record<string, CharacterArtifactSetRecommendations>;
    stats: Record<"sands" | "goblet" | "circlet" | "additional", Array<{ name: Stat; notes?: string[] }>>;
  };
  attackCombinations?: string[] | Record<string, string[]>;
  constellationOrSignatureWeapon?: string;
  detachments?: Array<{
    description?: string;
    template: Array<CharacterDetachmentItemRecommendation>;
    variants?: Array<Array<CharacterDetachmentCharacterRecommendation>>;
    best?: boolean;
  }>;
  keyConstellations?: Array<1 | 2 | 3 | 4 | 5 | 6>;
  recommendedLevel?: string;
  roleIds?: CharacterRoleId[];
  signatureWeaponNames?: WeaponName[];
  talents?: CharacterTalentRecommendations | Record<string, CharacterTalentRecommendations>;
  videoSourceIds?: VideoSourceId[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
}
