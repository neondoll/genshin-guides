import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Character } from "genshin-db";

import { getCharacter, getCharactersNames } from "@/utils/genshinDbAdapter";

interface CharactersState {
  entities: Record<string, Omit<Character, "stats"> | null>;
  names: string[];
}

const initialState: CharactersState = { entities: {}, names: [] };

export const fetchCharacterByName = createAsyncThunk("characters/fetchByName", async (characterName: string, { getState }) => {
  const state = getState() as { characters: CharactersState };

  const stateCharacter = state.characters.entities[characterName];

  if (stateCharacter) {
    // console.log(`Персонаж "${characterName}" найден в хранилище`);

    return stateCharacter;
  }

  // console.log(`Загрузка персонажа "${characterName}" с сервера`);

  return getCharacter(characterName);
});
export const fetchCharactersName = createAsyncThunk("characters/fetchNames", async () => {
  // console.log(`Загрузка имен персонажей с сервера`);

  return getCharactersNames();
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
    builder.addCase(fetchCharactersName.fulfilled, (state, action) => {
      action.payload.forEach((name) => {
        if (!state.names.includes(name)) {
          state.names = [...state.names, name].sort((a, b) => a.localeCompare(b));
        }
      });
    });
  },
});

export default charactersSlice.reducer;
