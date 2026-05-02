import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Talent, TalentListItem } from "@/types/talents";
import { getTalent, getTalentList } from "@/utils/genshinDbAdapter";

export interface TalentsState {
  details: { [P in Talent["id"]]?: Talent };
  detailsError: string | null;
  detailsLoading: boolean;
  list: TalentListItem[];
  listError: string | null;
  listLoading: boolean;
}

const initialState: TalentsState = {
  details: {},
  detailsError: null,
  detailsLoading: false,
  list: [],
  listError: null,
  listLoading: false,
};

export const fetchTalent = createAsyncThunk<Talent, Talent["id"]>(
  "talents/fetch",
  async (talentId, { getState }) => {
    const state = getState() as { talents: TalentsState };
    const stateTalent = state.talents.details[talentId];

    if (stateTalent) {
      console.log(`Таланты с ID "${talentId}" найдены в хранилище`);

      return stateTalent;
    }

    console.log(`Загрузка талантов с ID "${talentId}" с сервера`);

    return await getTalent(talentId);
  },
);
export const fetchTalentList = createAsyncThunk<TalentListItem[]>(
  "talents/fetchList",
  async (_, { getState }) => {
    const state = getState() as { talents: TalentsState };
    const stateList = state.talents.list;

    if (stateList.length) {
      console.log("Список талантов найден в хранилище");

      return stateList;
    }

    console.log(`Загрузка списка талантов с сервера`);

    const list = await getTalentList();

    return list.sort((a, b) => a.name.localeCompare(b.name));
  },
);

export const talentsSlice = createSlice({
  name: "talents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTalent
      .addCase(fetchTalent.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchTalent.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchTalent.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message ?? `Ошибка загрузки талантов с ID "${action.meta.arg}"`;
      })
      // fetchTalentList
      .addCase(fetchTalentList.pending, (state) => {
        state.listLoading = true;
        state.listError = null;
      })
      .addCase(fetchTalentList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchTalentList.rejected, (state, action) => {
        state.listLoading = false;
        state.listError = action.error.message ?? "Ошибка загрузки списка талантов";
      });
  },
});

export default talentsSlice.reducer;
