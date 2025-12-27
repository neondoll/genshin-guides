import type { ArtifactSetName, CharacterRoleId, VideoSourceId, WeaponName } from "./base.types";

interface CharacterArtifactSetRecommendationTemplate {
  best?: boolean;
  percent?: number;
}

interface CharacterCombinedArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "combined";
  names: [ArtifactSetName, ArtifactSetName];
}

interface CharacterCompleteArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "complete";
  name: ArtifactSetName;
}

export interface CharacterRecommendations {
  artifacts?: {
    sets: CharacterArtifactSetRecommendations | Record<string, CharacterArtifactSetRecommendations>;
    stats: Record<"sands" | "goblet" | "circlet" | "additional", Array<{ name: string; notes?: string[] }>>;
  };
  constellationOrSignatureWeapon?: string;
  detachments?: Array<{
    description?: string;
    template: [string, string, string, string];
    variants?: Array<[string, string, string, string]>;
    best?: boolean;
  }>;
  keyConstellations?: Array<1 | 2 | 3 | 4 | 5 | 6>;
  recommendedLevel?: string;
  roleIds: CharacterRoleId[];
  signatureWeaponNames?: WeaponName[];
  talents: CharacterTalentRecommendations | Record<string, CharacterTalentRecommendations>;
  videoSourceIds: VideoSourceId[];
  weapons: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
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
}

export type CharacterArtifactSetRecommendations = Array<CharacterCompleteArtifactSetRecommendation | CharacterCombinedArtifactSetRecommendation>;
export type CharacterTalentRecommendations = Array<CharacterTalentRecommendation>;
export type CharacterWeaponRecommendations = Array<CharacterWeaponRecommendation>;
