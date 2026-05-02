import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { ArtifactSet, ArtifactSetListItem } from "@/types/artifact-sets";
import { getArtifactSet, getArtifactSetList } from "@/utils/genshinDbAdapter";

export interface ArtifactSetsState {
  details: { [P in ArtifactSet["id"]]?: ArtifactSet };
  detailsError: string | null;
  detailsLoading: boolean;
  list: ArtifactSetListItem[];
  listError: string | null;
  listLoading: boolean;
}

const initialState: ArtifactSetsState = {
  details: {},
  detailsError: null,
  detailsLoading: false,
  list: [],
  listError: null,
  listLoading: false,
};

export const fetchArtifactSet = createAsyncThunk<ArtifactSet, ArtifactSet["id"]>(
  "artifactSets/fetch",
  async (artifactSetId, { getState }) => {
    const state = getState() as { artifactSets: ArtifactSetsState };
    const stateArtifactSet = state.artifactSets.details[artifactSetId];

    if (stateArtifactSet) {
      console.log(`Набор артефактов c ID "${artifactSetId}" найден в хранилище`);

      return stateArtifactSet;
    }

    console.log(`Загрузка набора артефактов c ID "${artifactSetId}" с сервера`);

    return await getArtifactSet(artifactSetId);
  },
);

export const fetchArtifactSetList = createAsyncThunk<ArtifactSetListItem[]>(
  "artifactSets/fetchList",
  async (_, { getState }) => {
    const state = getState() as { artifactSets: ArtifactSetsState };
    const stateList = state.artifactSets.list;

    if (stateList.length) {
      console.log("Список наборов артефактов найден в хранилище");

      return stateList;
    }

    console.log("Загрузка списка наборов артефактов с сервера");

    const list = await getArtifactSetList();

    return list.sort((a, b) => a.name.localeCompare(b.name));
  },
);

export const artifactSetsSlice = createSlice({
  name: "artifactSets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchArtifactSet
      .addCase(fetchArtifactSet.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchArtifactSet.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchArtifactSet.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message ?? `Ошибка загрузки набора артефактов с ID "${action.meta.arg}"`;
      })
      // fetchArtifactSetList
      .addCase(fetchArtifactSetList.pending, (state) => {
        state.listLoading = true;
        state.listError = null;
      })
      .addCase(fetchArtifactSetList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchArtifactSetList.rejected, (state, action) => {
        state.listLoading = false;
        state.listError = action.error.message ?? "Ошибка загрузки списка наборов артефактов";
      });
  },
});

export default artifactSetsSlice.reducer;
