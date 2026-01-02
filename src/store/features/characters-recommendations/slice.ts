import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import type { CharacterRecommendations } from "./types";
import type { CharacterName } from "../characters";

interface CharactersRecommendationsState {
  entities: { [P in CharacterName]?: CharacterRecommendations | null };
  names: CharacterName[];
}

const initialState: CharactersRecommendationsState = { entities: {}, names: [] };

export const fetchCharacterRecommendationsByName = createAsyncThunk("charactersRecommendations/fetchByName", async (characterName: CharacterName, { getState }) => {
  const state = getState() as { charactersRecommendations: CharactersRecommendationsState };

  const stateCharacterRecommendations = state.charactersRecommendations.entities[characterName];

  if (stateCharacterRecommendations) {
    // console.log(`Рекомендации персонажа "${characterName}" найдены в хранилище`);

    return { data: stateCharacterRecommendations, name: characterName };
  }

  // console.log(`Загрузка рекомендаций персонажа "${characterName}" с сервера`);

  try {
    if (characterName in allRecommendations) {
      const module = await allRecommendations[characterName]();
      return { data: module.default, name: characterName };
    }

    return { data: null, name: characterName };
  }
  catch (error) {
    console.error(error);
    throw new Error(`Failed to load recommendations for ${characterName}`);
  }
});

export const charactersRecommendationsSlice = createSlice({
  name: "charactersRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterRecommendationsByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload.data;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
  },
});

export default charactersRecommendationsSlice.reducer;
