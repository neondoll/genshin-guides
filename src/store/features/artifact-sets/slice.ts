import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type ArtifactSet, type ArtifactSetListItem } from "@/types/artifact-sets.types";
import { getArtifactSet, getArtifactSetList } from "@/utils/genshinDbAdapter";

export interface ArtifactSetsState {
  details: { [P in ArtifactSet["id"]]?: ArtifactSet };
  list: ArtifactSetListItem[];
}

const initialState: ArtifactSetsState = { details: {}, list: [] };

export const fetchArtifactSet = createAsyncThunk<ArtifactSet, ArtifactSet["id"]>("artifactSets/fetch", async (artifactSetId, { getState }) => {
  const state = getState() as { artifactSets: ArtifactSetsState };

  const stateArtifactSet = state.artifactSets.details[artifactSetId];

  if (stateArtifactSet) {
    console.log(`Набор артефактов c ID "${artifactSetId}" найден в хранилище`);

    return stateArtifactSet;
  }

  console.log(`Загрузка набора артефактов c ID "${artifactSetId}" с сервера`);

  return await getArtifactSet(artifactSetId);
});
export const fetchArtifactSetList = createAsyncThunk<ArtifactSetListItem[]>("artifactSets/fetchList", async (_, { getState }) => {
  const state = getState() as { artifactSets: ArtifactSetsState };

  const stateList = state.artifactSets.list;

  if (stateList.length) {
    console.log("Список наборов артефактов найден в хранилище");

    return stateList;
  }

  console.log("Загрузка списка наборов артефактов с сервера");

  const list = await getArtifactSetList();

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const artifactSetsSlice = createSlice<ArtifactSetsState, SliceCaseReducers<ArtifactSetsState>, string, SliceSelectors<ArtifactSetsState>, string>({
  name: "artifactSets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArtifactSet.fulfilled, (state, action) => {
      state.details[action.payload.id] = action.payload;
    });
    builder.addCase(fetchArtifactSetList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default artifactSetsSlice.reducer;
