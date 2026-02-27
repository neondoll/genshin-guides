import genshindb, { Language } from "genshin-db";

import { type ArtifactSet, type ArtifactSetListItem } from "@/types/artifact-sets.types";
import { type Character, type CharacterListItem } from "@/types/characters.types";
import { type Element, type ElementName } from "@/types/elements.types";
import { type Talent, type TalentName } from "@/types/talents.types";
import { type Weapon, type WeaponName } from "@/types/weapons.types";

// Базовый URL для статических данных (папка public/data)
const BASE_URL = import.meta.env.BASE_URL + "data";

// Вспомогательная функция для загрузки JSON
async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.statusText}`);
  }

  return await response.json();
}

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

// --- Наборы артефактов ---

export async function getArtifactSet(artifactSetId: ArtifactSet["id"]) {
  return fetchJson<ArtifactSet>(`${BASE_URL}/artifact-sets/details/${artifactSetId}.json`);
}

export async function getArtifactSetList() {
  return fetchJson<ArtifactSetListItem[]>(`${BASE_URL}/artifact-sets/index.json`);
}

// --- Персонажи ---

export async function getCharacter(characterId: Character["id"]) {
  return fetchJson<Character>(`${BASE_URL}/characters/details/${characterId}.json`);
}

export async function getCharacterList() {
  return fetchJson<CharacterListItem[]>(`${BASE_URL}/characters/index.json`);
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
