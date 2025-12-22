import genshindb, { Language } from "genshin-db";

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

export function getArtifactSet(artifactSetName: string) {
  const artifactData = genshindb.artifacts(artifactSetName, DB_OPTIONS);

  if (!artifactData) {
    return null;
  }

  return artifactData;
}

export function getArtifactSetsNames() {
  return genshindb.artifacts("names", DB_NAMES_OPTIONS) as string[];
}

export function getCharacter(characterName: string) {
  const characterData = genshindb.characters(characterName, DB_OPTIONS);

  if (!characterData) {
    return null;
  }

  return { ...characterData, stats: undefined };
}

export function getCharactersNames() {
  return genshindb.characters("names", DB_NAMES_OPTIONS) as string[];
}

export function getElement(elementName: string) {
  const elementData = genshindb.elements(elementName, DB_OPTIONS);

  if (!elementData) {
    return null;
  }

  return elementData;
}

export function getElementsNames() {
  return genshindb.elements("names", DB_NAMES_OPTIONS) as string[];
}

export function getTalent(characterName: string) {
  const talentsData = genshindb.talents(characterName, DB_OPTIONS);

  if (!talentsData) {
    return null;
  }

  return talentsData;
}

export function getTalentsNames() {
  return genshindb.talents("names", DB_NAMES_OPTIONS) as string[];
}

export function getWeapon(weaponName: string) {
  const weaponData = genshindb.weapons(weaponName, DB_OPTIONS);

  if (!weaponData) {
    return null;
  }

  return { ...weaponData, stats: undefined };
}

export function getWeaponsNames() {
  return genshindb.weapons("names", DB_NAMES_OPTIONS) as string[];
}
