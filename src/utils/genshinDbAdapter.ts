import genshindb, { Language } from "genshin-db";

import type { ArtifactSet, ArtifactSetName } from "@/store/features/artifact-sets";
import type { Character, CharacterName } from "@/store/features/characters";
import type { Element, ElementName } from "@/store/features/elements";
import type { Talent } from "@/store/features/talents";
import type { Weapon, WeaponName } from "@/store/features/weapons";

// Конфигурация для русского языка
const DB_NAMES_OPTIONS = { matchCategories: true, resultLanguage: Language.Russian } as const;
const DB_OPTIONS = {
  dumpResult: false,
  matchAliases: true,
  matchCategories: true,
  matchNames: true,
  queryLanguages: [Language.English, Language.Russian],
  resultLanguage: Language.Russian,
  verboseCategories: false,
};

export function getArtifactSet(artifactSetName: ArtifactSetName) {
  const artifactData = genshindb.artifacts(artifactSetName, DB_OPTIONS);

  if (!artifactData) {
    return null;
  }

  return artifactData as ArtifactSet;
}

export function getArtifactSetsNames() {
  return genshindb.artifacts("names", DB_NAMES_OPTIONS) as ArtifactSetName[];
}

export function getCharacter(characterName: CharacterName) {
  const characterData = genshindb.characters(characterName, DB_OPTIONS);

  if (!characterData) {
    return null;
  }

  return { ...characterData, stats: undefined } as Character;
}

export function getCharactersNames() {
  return genshindb.characters("names", DB_NAMES_OPTIONS) as CharacterName[];
}

export function getElement(elementName: ElementName) {
  const elementData = genshindb.elements(elementName, DB_OPTIONS);

  if (!elementData) {
    return null;
  }

  return elementData as Element;
}

export function getElementsNames() {
  return genshindb.elements("names", DB_NAMES_OPTIONS) as ElementName[];
}

export function getTalent(characterName: CharacterName) {
  const talentsData = genshindb.talents(characterName, DB_OPTIONS);

  if (!talentsData) {
    return null;
  }

  return talentsData as Talent;
}

export function getTalentsNames() {
  return genshindb.talents("names", DB_NAMES_OPTIONS) as CharacterName[];
}

export function getWeapon(weaponName: WeaponName) {
  const weaponData = genshindb.weapons(weaponName, DB_OPTIONS);

  if (!weaponData) {
    return null;
  }

  return { ...weaponData, stats: undefined } as Weapon;
}

export function getWeaponsNames() {
  return genshindb.weapons("names", DB_NAMES_OPTIONS) as WeaponName[];
}
