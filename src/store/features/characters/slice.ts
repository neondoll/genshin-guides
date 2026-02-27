import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Character, type CharacterListItem } from "@/types/characters.types";
import { getCharacter, getCharacterList } from "@/utils/genshinDbAdapter";

export interface CharactersState {
  details: { [P in Character["id"]]?: Character };
  list: CharacterListItem[];
}

const initialState: CharactersState = { details: {}, list: [] };

export const fetchCharacter = createAsyncThunk<Character, Character["id"]>("characters/fetch", async (characterId, { getState }) => {
  const state = getState() as { characters: CharactersState };

  const stateCharacter = state.characters.details[characterId];

  if (stateCharacter) {
    console.log(`Персонаж c ID "${characterId}" найден в хранилище`);

    return stateCharacter;
  }

  console.log(`Загрузка персонажа c ID "${characterId}" с сервера`);

  return await getCharacter(characterId);
});
export const fetchCharacterList = createAsyncThunk<CharacterListItem[]>("characters/fetchList", async (_, { getState }) => {
  const state = getState() as { characters: CharactersState };

  const stateList = state.characters.list;

  if (stateList.length) {
    console.log("Список персонажей найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка персонажей с сервера");

  const list = await getCharacterList();

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const charactersSlice = createSlice<CharactersState, SliceCaseReducers<CharactersState>, string, SliceSelectors<CharactersState>, string>({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.details[action.payload.id] = action.payload;
    });
    builder.addCase(fetchCharacterList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default charactersSlice.reducer;
