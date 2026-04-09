import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { type CharacterRarity } from "@/types/characters.types";
import { type ElementId } from "@/types/elements.types";
import { type WeaponTypeId } from "@/types/weapon-types.types";

export interface CharactersPageFilterState {
  elementIds: ElementId[];
  rarities: CharacterRarity[];
  weaponTypeIds: WeaponTypeId[];
}

const initialState: CharactersPageFilterState = { elementIds: [], rarities: [], weaponTypeIds: [] };

export const charactersPageFilterSlice = createSlice({
  name: "charactersPageFilter",
  initialState,
  reducers: {
    changeCharactersPageFilterValue: <T extends keyof CharactersPageFilterState>(
      state: CharactersPageFilterState,
      action: PayloadAction<{ field: T; value: CharactersPageFilterState[T] }>,
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { changeCharactersPageFilterValue } = charactersPageFilterSlice.actions;

export default charactersPageFilterSlice.reducer;
