import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import {
  type CharacterRecommendations,
  type CharacterRecommendationsId,
} from "@/types/characters-recommendations.types";

export interface CharactersRecommendationsState {
  entities: { [P in CharacterRecommendationsId]?: CharacterRecommendations | null };
  names: CharacterRecommendationsId[];
}

const initialState: CharactersRecommendationsState = { entities: {}, names: [] };

export const fetchCharacterRecommendations = createAsyncThunk<{
  data: CharacterRecommendations | null;
  id: CharacterRecommendationsId;
}, CharacterRecommendationsId>("charactersRecommendations/fetch", async (characterRecommendationsId, { getState }) => {
  const state = getState() as { charactersRecommendations: CharactersRecommendationsState };

  const stateCharacterRecommendations = state.charactersRecommendations.entities[characterRecommendationsId];

  if (stateCharacterRecommendations) {
    console.log(`Рекомендации персонажа с ID "${characterRecommendationsId}" найдены в хранилище`);

    return { data: stateCharacterRecommendations, id: characterRecommendationsId };
  }

  try {
    if (characterRecommendationsId in allRecommendations) {
      console.log(`Загрузка рекомендаций персонажа с ID "${characterRecommendationsId}" с сервера`);

      const module = await allRecommendations[characterRecommendationsId]();

      return { data: module.default, id: characterRecommendationsId };
    }

    return { data: null, id: characterRecommendationsId };
  }
  catch (error) {
    console.error(error);
    throw new Error(`Failed to load recommendations for ${characterRecommendationsId}`);
  }
});

export const charactersRecommendationsSlice = createSlice<CharactersRecommendationsState, SliceCaseReducers<CharactersRecommendationsState>, string, SliceSelectors<CharactersRecommendationsState>, string>({
  name: "charactersRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterRecommendations.fulfilled, (state, action) => {
      state.entities[action.payload.id] = action.payload.data;
    });
  },
});

export default charactersRecommendationsSlice.reducer;
