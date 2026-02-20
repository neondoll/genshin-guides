import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { CharacterIcons } from "./icons";
import { type RootState } from "@/store";
import { type Character, type CharacterName, CharacterNames } from "@/types/characters.types";
import { ElementNames } from "@/types/elements.types";
import { getCharacter, getCharactersNames } from "@/utils/genshinDbAdapter";

interface CharactersState {
  entities: { [P in CharacterName]?: Character | null };
  names: CharacterName[];
}

const initialState: CharactersState = {
  entities: {
    [CharacterNames.VARKA]: {
      constellation: "Волк",
      elementText: ElementNames.ANEMO,
      images: { mihoyo_icon: CharacterIcons[CharacterNames.VARKA] },
      name: CharacterNames.VARKA,
      region: "Мондштадт",
      title: "Рыцарь Бореалис",
      version: "Скоро",
    } as Character,
  },
  names: [CharacterNames.VARKA],
};

export const fetchCharacterByName = createAsyncThunk("characters/fetchByName", async (characterName: CharacterName, { getState }) => {
  const state = getState() as RootState;

  const stateCharacter = state.characters.entities[characterName];

  if (stateCharacter) {
    // console.log(`Персонаж "${characterName}" найден в хранилище`);

    return stateCharacter;
  }

  // console.log(`Загрузка персонажа "${characterName}" с сервера`);

  return getCharacter(characterName);
});
export const fetchCharactersName = createAsyncThunk("characters/fetchNames", async () => {
  // console.log(`Загрузка имен персонажей с сервера`);

  return getCharactersNames();
});

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
    builder.addCase(fetchCharactersName.fulfilled, (state, action) => {
      action.payload.forEach((name) => {
        if (!state.names.includes(name)) {
          state.names = [...state.names, name].sort((a, b) => a.localeCompare(b));
        }
      });
    });
  },
});

export default charactersSlice.reducer;
