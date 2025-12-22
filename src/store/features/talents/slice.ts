import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Talent } from "genshin-db";

import { getTalent } from "@/utils/genshinDbAdapter";

interface TalentsState {
  entities: Record<string, Talent | null>;
  names: string[];
}

const initialState: TalentsState = { entities: {}, names: [] };

export const fetchTalentByCharacterName = createAsyncThunk("talents/fetchByCharacterName", async (characterName: string, { getState }) => {
  const state = getState() as { talents: TalentsState };

  const stateTalent = state.talents.entities[characterName];

  if (stateTalent) {
    // console.log(`Таланты для "${characterName}" найдены в хранилище`);

    return stateTalent;
  }

  // console.log(`Загрузка талантов для "${characterName}" с сервера`);

  return getTalent(characterName);
});

export const talentsSlice = createSlice({
  name: "talents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalentByCharacterName.fulfilled, (state, action) => {
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
