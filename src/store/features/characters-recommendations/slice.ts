import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import type { CharacterRecommendations } from "@/types/characters-recommendations";

export const fetchCharacterRecommendations = createAsyncThunk<CharacterRecommendations, CharacterRecommendations["id"]>(
  "charactersRecommendations/fetch",
  async (characterRecommendationsId, { getState }) => {
    const state = getState() as { charactersRecommendations: CharactersRecommendationsState };
    const stateCharacterRecommendations = state.charactersRecommendations.entities[characterRecommendationsId];

    if (stateCharacterRecommendations) {
      console.log(`Рекомендации персонажа с ID "${characterRecommendationsId}" найдены в хранилище`);

      return stateCharacterRecommendations;
    }

    try {
      if (characterRecommendationsId in allRecommendations) {
        console.log(`Загрузка рекомендаций персонажа с ID "${characterRecommendationsId}" с сервера`);

        const module = await allRecommendations[characterRecommendationsId]();

        return module.default;
      }

      return { id: characterRecommendationsId };
    }
    catch (error) {
      console.error(error);
      throw new Error(`Failed to load recommendations for ${characterRecommendationsId}`, { cause: error });
    }
  },
);

export const charactersRecommendationsAdapter = createEntityAdapter<CharacterRecommendations>();

const initialState = charactersRecommendationsAdapter.getInitialState<{
  error: string | null;
  loading: boolean;
}>({ error: null, loading: false });

export type CharactersRecommendationsState = typeof initialState;

export const { selectEntities: selectEntitiesCharactersRecommendations } = charactersRecommendationsAdapter.getSelectors<{
  charactersRecommendations: CharactersRecommendationsState;
}>(state => state.charactersRecommendations);

export const charactersRecommendationsSlice = createSlice({
  name: "charactersRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCharacterRecommendations
      .addCase(fetchCharacterRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacterRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        charactersRecommendationsAdapter.addOne(state, action);
      })
      .addCase(fetchCharacterRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? `Ошибка загрузки рекомендаций персонажа c ID "${action.meta.arg}"`;
      });
  },
});

export default charactersRecommendationsSlice.reducer;
