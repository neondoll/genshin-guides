import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Talent, type TalentListItem } from "@/types/talents.types";
import { getTalent, getTalentList } from "@/utils/genshinDbAdapter";

export interface TalentsState {
  details: { [P in Talent["id"]]?: Talent };
  list: TalentListItem[];
}

const initialState: TalentsState = { details: {}, list: [] };

export const fetchTalent = createAsyncThunk<Talent, Talent["id"]>("talents/fetch", async (talentId, { getState }) => {
  const state = getState() as { talents: TalentsState };

  const stateTalent = state.talents.details[talentId];

  if (stateTalent) {
    console.log(`Таланты с ID "${talentId}" найдены в хранилище`);

    return stateTalent;
  }

  console.log(`Загрузка талантов с ID "${talentId}" с сервера`);

  return await getTalent(talentId);
});
export const fetchTalentList = createAsyncThunk<TalentListItem[]>("talents/fetchList", async (_, { getState }) => {
  const state = getState() as { talents: TalentsState };

  const stateList = state.talents.list;

  if (stateList.length) {
    console.log("Список талантов найден в хранилище");

    return stateList;
  }

  console.log(`Загрузка списка талантов с сервера`);

  const list = await getTalentList();

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const talentsSlice = createSlice<TalentsState, SliceCaseReducers<TalentsState>, string, SliceSelectors<TalentsState>, string>({
  name: "talents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalent.fulfilled, (state, action) => {
      state.details[action.payload.id] = action.payload;
    });
    builder.addCase(fetchTalentList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default talentsSlice.reducer;
