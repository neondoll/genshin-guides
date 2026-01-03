import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import allRecommendations from "./data/all-recommendations";
import type { ArtifactSetRecommendations } from "./types";
import type { ArtifactSetName } from "../artifact-sets";

interface ArtifactSetsRecommendationsState {
  entities: { [P in ArtifactSetName]?: ArtifactSetRecommendations | null };
  names: ArtifactSetName[];
}

const initialState: ArtifactSetsRecommendationsState = { entities: {}, names: [] };

export const fetchArtifactSetRecommendationsByName = createAsyncThunk("artifactSetsRecommendations/fetchByName", async (artifactSetName: ArtifactSetName, { getState }) => {
  const state = getState() as { artifactSetsRecommendations: ArtifactSetsRecommendationsState };

  const stateArtifactSetRecommendations = state.artifactSetsRecommendations.entities[artifactSetName];

  if (stateArtifactSetRecommendations) {
    // console.log(`Рекомендации набора артефактов "${artifactSetName}" найдены в хранилище`);

    return { data: stateArtifactSetRecommendations, name: artifactSetName };
  }

  // console.log(`Загрузка рекомендаций набора артефактов "${artifactSetName}" с сервера`);

  try {
    if (artifactSetName in allRecommendations) {
      const module = await allRecommendations[artifactSetName]();
      return { data: module.default, name: artifactSetName };
    }

    return { data: null, name: artifactSetName };
  }
  catch (error) {
    console.error(error);
    throw new Error(`Failed to load recommendations for ${artifactSetName}`);
  }
});

export const artifactSetsRecommendationsSlice = createSlice({
  name: "artifactSetsRecommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtifactSetRecommendationsByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload.data;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
  },
});

export default artifactSetsRecommendationsSlice.reducer;
