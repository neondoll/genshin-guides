import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import { type ArtifactSetId } from "@/types/artifact-sets.types";
import { type ArtifactSetRecommendations } from "@/types/artifact-sets-recommendations.types";

export interface ArtifactSetsRecommendationsState {
  entities: { [P in ArtifactSetId]?: ArtifactSetRecommendations | null };
  ids: ArtifactSetId[];
}

const initialState: ArtifactSetsRecommendationsState = { entities: {}, ids: [] };

export const fetchArtifactSetRecommendationsById = createAsyncThunk<{
  data: ArtifactSetRecommendations | null;
  id: ArtifactSetId;
}, ArtifactSetId>("artifactSetsRecommendations/fetchById", async (artifactSetId, { getState }) => {
  const state = getState() as { artifactSetsRecommendations: ArtifactSetsRecommendationsState };

  const stateArtifactSetRecommendations = state.artifactSetsRecommendations.entities[artifactSetId];

  if (stateArtifactSetRecommendations) {
    console.log(`Рекомендации набора артефактов с ID "${artifactSetId}" найдены в хранилище`);

    return { data: stateArtifactSetRecommendations, id: artifactSetId };
  }

  try {
    if (artifactSetId in allRecommendations) {
      console.log(`Загрузка рекомендаций набора артефактов с ID "${artifactSetId}" с сервера`);

      const module = await allRecommendations[artifactSetId]();

      return { data: module.default, id: artifactSetId };
    }

    return { data: null, id: artifactSetId };
  }
  catch (error) {
    console.error(error);
    throw new Error(`Failed to load recommendations for ${artifactSetId}`);
  }
});

export const artifactSetsRecommendationsSlice = createSlice<ArtifactSetsRecommendationsState, SliceCaseReducers<ArtifactSetsRecommendationsState>, string, SliceSelectors<ArtifactSetsRecommendationsState>, string>({
  name: "artifactSetsRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtifactSetRecommendationsById.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.id] = action.payload.data;

        if (!state.ids.includes(action.payload.id)) {
          state.ids.push(action.payload.id);
        }
      }
    });
  },
});

export default artifactSetsRecommendationsSlice.reducer;
