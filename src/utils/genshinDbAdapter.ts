import genshindb, { Language } from "genshin-db";

import { type ArtifactSet, type ArtifactSetName } from "@/types/artifact-sets.types";
import { type Character, type CharacterName } from "@/types/characters.types";
import { type Element, type ElementName } from "@/types/elements.types";
import { type Talent, type TalentName } from "@/types/talents.types";
import { type Weapon, type WeaponName } from "@/types/weapons.types";

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
  const artifactSetsNames = genshindb.artifacts("names", DB_NAMES_OPTIONS);

  return artifactSetsNames as ArtifactSetName[];
}

export function getCharacter(characterName: CharacterName) {
  const characterData = genshindb.characters(characterName, DB_OPTIONS);

  if (!characterData) {
    return null;
  }

  return { ...characterData, stats: undefined } as Character;
}

export function getCharactersNames() {
  const charactersNames = genshindb.characters("names", DB_NAMES_OPTIONS);

  return charactersNames as CharacterName[];
}

export function getElement(elementName: ElementName) {
  const elementData = genshindb.elements(elementName, DB_OPTIONS);

  if (!elementData) {
    return null;
  }

  return elementData as Element;
}

export function getElementsNames() {
  const elementsNames = genshindb.elements("names", DB_NAMES_OPTIONS);

  return elementsNames as ElementName[];
}

export function getTalent(talentName: TalentName) {
  const talentsData = genshindb.talents(talentName, DB_OPTIONS);

  if (!talentsData) {
    return null;
  }

  return talentsData as Talent;
}

// export function getTalentsNames() {
//   return genshindb.talents("names", DB_NAMES_OPTIONS) as TalentName[];
// }

export function getWeapon(weaponName: WeaponName) {
  const weaponData = genshindb.weapons(weaponName, DB_OPTIONS);

  if (!weaponData) {
    return null;
  }

  return { ...weaponData, stats: undefined } as Weapon;
}

export function getWeaponsNames() {
  const weaponsNames = Array.from(new Set(genshindb.weapons("names", DB_NAMES_OPTIONS)));

  const deleteNames = ["Легендарный клинок Иссин"];

  deleteNames.forEach((deleteName) => {
    const deleteIndex = weaponsNames.indexOf(deleteName);

    if (deleteIndex !== -1) {
      console.log("delete", weaponsNames.splice(deleteIndex, 1));
    }
  });

  return weaponsNames as WeaponName[];
}
