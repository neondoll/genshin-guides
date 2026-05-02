import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Rarity } from "@/types/rarities";

export interface ArtifactSetsPageFilterState {
  rarities: Rarity[];
}

const initialState: ArtifactSetsPageFilterState = { rarities: [] };

export const artifactSetsPageFilterSlice = createSlice({
  name: "artifactSetsPageFilter",
  initialState,
  reducers: {
    changeArtifactSetsPageFilterValue: <T extends keyof ArtifactSetsPageFilterState>(
      state: ArtifactSetsPageFilterState,
      action: PayloadAction<{ field: T; value: ArtifactSetsPageFilterState[T] }>,
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { changeArtifactSetsPageFilterValue } = artifactSetsPageFilterSlice.actions;
export default artifactSetsPageFilterSlice.reducer;
