import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Character, CharacterListItem } from "@/types/characters";
import { getCharacter, getCharacterList } from "@/utils/genshinDbAdapter";

export interface CharactersState {
  details: { [P in Character["id"]]?: Character };
  detailsError: string | null;
  detailsLoading: boolean;
  list: CharacterListItem[];
  listError: string | null;
  listLoading: boolean;
}

const initialState: CharactersState = {
  details: {},
  detailsError: null,
  detailsLoading: false,
  list: [],
  listError: null,
  listLoading: false,
};

export const fetchCharacter = createAsyncThunk<Character, Character["id"]>(
  "characters/fetch",
  async (characterId, { getState }) => {
    const state = getState() as { characters: CharactersState };
    const stateCharacter = state.characters.details[characterId];

    if (stateCharacter) {
      console.log(`Персонаж c ID "${characterId}" найден в хранилище`);

      return stateCharacter;
    }

    console.log(`Загрузка персонажа c ID "${characterId}" с сервера`);

    return await getCharacter(characterId);
  },
);
export const fetchCharacterList = createAsyncThunk<CharacterListItem[]>(
  "characters/fetchList",
  async (_, { getState }) => {
    const state = getState() as { characters: CharactersState };
    const stateList = state.characters.list;

    if (stateList.length) {
      console.log("Список персонажей найден в хранилище");

      return stateList;
    }

    console.log("Загрузка списка персонажей с сервера");

    const list = await getCharacterList();

    return list.sort((a, b) => a.name.localeCompare(b.name));
  },
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchCharacter
      .addCase(fetchCharacter.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message ?? `Ошибка загрузки персонажа с ID "${action.meta.arg}"`;
      })
      // fetchCharacterList
      .addCase(fetchCharacterList.pending, (state) => {
        state.listLoading = true;
        state.listError = null;
      })
      .addCase(fetchCharacterList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchCharacterList.rejected, (state, action) => {
        state.listLoading = false;
        state.listError = action.error.message ?? "Ошибка загрузки списка персонажей";
      });
  },
});

export default charactersSlice.reducer;
