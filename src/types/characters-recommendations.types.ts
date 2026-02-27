import type { ArtifactSetId } from "./artifact-sets.types";
import type { CharacterRoleId } from "./character-roles.types";
import type { CharacterId, CharacterName, TravelerName } from "./characters.types";
import type { ElementName } from "./elements.types";
import type { Stat } from "./stats.types";
import type { VideoSourceId } from "./video-sources.types";
import type { WeaponName } from "./weapons.types";

interface CharacterArtifactSetRecommendationTemplate {
  best?: boolean | string;
  percent?: number;
  notes?: string[];
}

export interface CharacterCombinedArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "combined";
  ids: [ArtifactSetId, ArtifactSetId];
}

export interface CharacterCompleteArtifactSetRecommendation extends CharacterArtifactSetRecommendationTemplate {
  type: "complete";
  id: ArtifactSetId;
}

export type CharacterArtifactSetRecommendations = Array<CharacterCompleteArtifactSetRecommendation | CharacterCombinedArtifactSetRecommendation>;
export type CharacterArtifactStatRecommendation = { name: Stat; notes?: string[] };

interface CharacterDetachmentCharacterRecommendation {
  type: "character";
  id: CharacterId;
  c?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  weapon?: WeaponName;
  weaponR?: 1 | 2 | 3 | 4 | 5;
  artifacts?: [ArtifactSetId] | [ArtifactSetId, ArtifactSetId];
}
interface CharacterDetachmentElementRecommendation {
  type: "element";
  name: ElementName;
}
interface CharacterDetachmentOtherRecommendation {
  type: "other";
  title: string;
}

export type CharacterDetachmentItemRecommendation = CharacterDetachmentCharacterRecommendation | CharacterDetachmentElementRecommendation | CharacterDetachmentOtherRecommendation;

interface CharacterTalentRecommendation {
  type: "combat1" | "combat2" | "combat3";
  priority: string;
  referenceLevel?: string | number;
  recommendedLevel?: string | number;
  overallLevel?: string | number;
}

export type CharacterTalentRecommendations = Array<CharacterTalentRecommendation>;

interface CharacterWeaponRecommendation {
  name: WeaponName;
  best?: boolean | string;
  postfix?: string;
  r?: 1 | 2 | 3 | 4 | 5;
  percent?: number;
  notes?: string[];
}

export type CharacterWeaponRecommendations = Array<CharacterWeaponRecommendation>;

export interface CharacterRecommendations {
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
  keyConstellations?: Array<1 | 2 | 3 | 4 | 5 | 6>;
  recommendedLevel?: string;
  roleIds?: CharacterRoleId[];
  signatureWeaponNames?: WeaponName[];
  talents?: CharacterTalentRecommendations | Record<string, CharacterTalentRecommendations>;
  videoSourceIds?: VideoSourceId[];
  weapons?: CharacterWeaponRecommendations | Record<string, CharacterWeaponRecommendations>;
}

export type CharacterRecommendationsName = Exclude<CharacterName, TravelerName> | `Путешественница (${ElementName})`;
