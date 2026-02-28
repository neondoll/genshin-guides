import { type ArtifactSet, type ArtifactSetListItem } from "@/types/artifact-sets.types";
import { type Character, type CharacterListItem } from "@/types/characters.types";
import { type Element, type ElementListItem } from "@/types/elements.types";
import { type Talent, type TalentListItem } from "@/types/talents.types";
import { type Weapon, type WeaponListItem } from "@/types/weapons.types";

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

// --- Элементы ---

export async function getElement(elementId: Element["id"]) {
  return fetchJson<Element>(`${BASE_URL}/elements/details/${elementId}.json`);
}

export async function getElementList() {
  return fetchJson<ElementListItem[]>(`${BASE_URL}/elements/index.json`);
}

// --- Таланты ---

export async function getTalent(talentId: Talent["id"]) {
  return fetchJson<Talent>(`${BASE_URL}/talents/details/${talentId}.json`);
}

export async function getTalentList() {
  return fetchJson<TalentListItem[]>(`${BASE_URL}/talents/index.json`);
}

// --- Оружие ---

export async function getWeapon(weaponId: Weapon["id"]) {
  return fetchJson<Weapon>(`${BASE_URL}/weapons/details/${weaponId}.json`);
}

export async function getWeaponList() {
  return fetchJson<WeaponListItem[]>(`${BASE_URL}/weapons/index.json`);
}
