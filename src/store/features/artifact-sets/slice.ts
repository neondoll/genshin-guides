import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSet, ArtifactSetName } from "./types";
import { getArtifactSet, getArtifactSetsNames } from "@/utils/genshinDbAdapter";

interface ArtifactSetsState {
  entities: { [P in ArtifactSetName]?: ArtifactSet | null };
  names: ArtifactSetName[];
}

const initialState: ArtifactSetsState = { entities: {}, names: [] };

export const fetchArtifactSetByName = createAsyncThunk("artifactSets/fetchByName", async (artifactSetName: ArtifactSetName, { getState }) => {
  const state = getState() as { artifactSets: ArtifactSetsState };

  const stateArtifactSet = state.artifactSets.entities[artifactSetName];

  if (stateArtifactSet) {
    // console.log(`Набор артефактов "${artifactSetName}" найден в хранилище`);

    return stateArtifactSet;
  }

  // console.log(`Загрузка набора артефактов "${artifactSetName}" с сервера`);

  return getArtifactSet(artifactSetName);
});
export const fetchArtifactSetsName = createAsyncThunk("artifactSets/fetchNames", async () => {
  // console.log(`Загрузка имен наборов артефактов с сервера`);

  return getArtifactSetsNames();
});

export const artifactSetsSlice = createSlice({
  name: "artifactSets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtifactSetByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
    builder.addCase(fetchArtifactSetsName.fulfilled, (state, action) => {
      action.payload.forEach((name) => {
        if (!state.names.includes(name)) {
          state.names = [...state.names, name].sort((a, b) => a.localeCompare(b));
        }
      });
    });
  },
});

export default artifactSetsSlice.reducer;
