import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Talent, type TalentName } from "@/types/talents.types";
import { getTalent } from "@/utils/genshinDbAdapter";

export interface TalentsState {
  entities: { [P in TalentName]?: Talent | null };
  names: TalentName[];
}

const initialState: TalentsState = { entities: {}, names: [] };

export const fetchTalentByName = createAsyncThunk<Talent | null, TalentName>("talents/fetchByName", async (name, { getState }) => {
  const state = getState() as { talents: TalentsState };

  const stateTalent = state.talents.entities[name];

  if (stateTalent) {
    // console.log(`Таланты для "${name}" найдены в хранилище`);

    return stateTalent;
  }

  // console.log(`Загрузка талантов для "${name}" с сервера`);

  return getTalent(name);
});

export const talentsSlice = createSlice<TalentsState, SliceCaseReducers<TalentsState>, string, SliceSelectors<TalentsState>, string>({
  name: "talents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalentByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names.push(action.payload.name);
        }
      }
    });
  },
});

export default talentsSlice.reducer;
