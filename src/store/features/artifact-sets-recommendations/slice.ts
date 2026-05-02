import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import type { ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations";

export const fetchArtifactSetRecommendations = createAsyncThunk<ArtifactSetRecommendations, ArtifactSetRecommendations["id"]>(
  "artifactSetsRecommendations/fetch",
  async (artifactSetId, { getState }) => {
    const state = getState() as { artifactSetsRecommendations: ArtifactSetsRecommendationsState };
    const stateArtifactSetRecommendations = state.artifactSetsRecommendations.entities[artifactSetId];

    if (stateArtifactSetRecommendations) {
      console.log(`Рекомендации набора артефактов с ID "${artifactSetId}" найдены в хранилище`);

      return stateArtifactSetRecommendations;
    }

    try {
      if (artifactSetId in allRecommendations) {
        console.log(`Загрузка рекомендаций набора артефактов с ID "${artifactSetId}" с сервера`);

        const module = await allRecommendations[artifactSetId]();

        return module.default;
      }

      return { id: artifactSetId };
    }
    catch (error) {
      console.error(error);
      throw new Error(`Failed to load recommendations for ${artifactSetId}`, { cause: error });
    }
  },
);
export const artifactSetsRecommendationsAdapter = createEntityAdapter<ArtifactSetRecommendations>();

const initialState = artifactSetsRecommendationsAdapter.getInitialState<{
  error: string | null;
  loading: boolean;
}>({ error: null, loading: false });

export type ArtifactSetsRecommendationsState = typeof initialState;

export const { selectEntities: selectEntitiesArtifactSetsRecommendations } = artifactSetsRecommendationsAdapter.getSelectors<{
  artifactSetsRecommendations: ArtifactSetsRecommendationsState;
}>(state => state.artifactSetsRecommendations);

export const artifactSetsRecommendationsSlice = createSlice({
  name: "artifactSetsRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArtifactSetRecommendations
      .addCase(fetchArtifactSetRecommendations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtifactSetRecommendations.fulfilled, (state, action) => {
        state.loading = false;
        artifactSetsRecommendationsAdapter.addOne(state, action);
      })
      .addCase(fetchArtifactSetRecommendations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? `Ошибка загрузки рекомендаций набора артефактов с ID "${action.meta.arg}"`;
      });
  },
});

export default artifactSetsRecommendationsSlice.reducer;
