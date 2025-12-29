import type {
  ArtifactSetName,
  CharacterName,
  CharacterRoleId,
  ElementName,
  VideoSourceId,
  WeaponName,
} from "./base.types";

interface CharacterArtifactSetRecommendationTemplate {
  best?: boolean;
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

interface CharacterDetachmentCharacterRecommendations {
  type: "character";
  name: CharacterName;
}

interface CharacterDetachmentElementRecommendations {
  type: "element";
  name: ElementName;
}

interface CharacterDetachmentOtherRecommendation {
  type: "other";
  title: string;
}

export interface CharacterRecommendations {
  artifacts?: {
    sets: CharacterArtifactSetRecommendations | Record<string, CharacterArtifactSetRecommendations>;
    stats: Record<"sands" | "goblet" | "circlet" | "additional", Array<{ name: string; notes?: string[] }>>;
  };
  attackCombinations?: Record<string, string[]>;
  constellationOrSignatureWeapon?: string;
  detachments?: Array<{
    description?: string;
    template: Array<CharacterDetachmentItemRecommendation>;
    variants?: Array<Array<CharacterDetachmentCharacterRecommendations>>;
    best?: boolean;
  }>;
  keyConstellations?: Array<1 | 2 | 3 | 4 | 5 | 6>;
  recommendedLevel?: string;
  roleIds: CharacterRoleId[];
  signatureWeaponNames?: WeaponName[];
  talents?: CharacterTalentRecommendations | Record<string, CharacterTalentRecommendations>;
  videoSourceIds?: VideoSourceId[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
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
export type CharacterDetachmentItemRecommendation = CharacterDetachmentCharacterRecommendations | CharacterDetachmentElementRecommendations | CharacterDetachmentOtherRecommendation;
export type CharacterTalentRecommendations = Array<CharacterTalentRecommendation>;
export type CharacterWeaponRecommendations = Array<CharacterWeaponRecommendation>;
