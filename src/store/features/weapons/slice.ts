import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Weapon, type WeaponName } from "@/types/weapons.types";
import { getWeapon, getWeaponsNames } from "@/utils/genshinDbAdapter";

export interface WeaponsState {
  entities: { [P in WeaponName]?: Weapon | null };
  names: WeaponName[];
}

const initialState: WeaponsState = { entities: {}, names: [] };

export const fetchWeaponByName = createAsyncThunk<Weapon | null, WeaponName>("weapons/fetchByName", async (weaponName, { getState }) => {
  const state = getState() as { weapons: WeaponsState };

  const stateWeapon = state.weapons.entities[weaponName];

  if (stateWeapon) {
    // console.log(`Оружие "${weaponName}" найдено в хранилище`);

    return stateWeapon;
  }

  // console.log(`Загрузка оружия "${weaponName}" с сервера`);

  return getWeapon(weaponName);
});
export const fetchWeaponsName = createAsyncThunk<WeaponName[]>("weapons/fetchNames", async () => {
  // console.log(`Загрузка имен оружий с сервера`);

  return getWeaponsNames();
});

export const weaponsSlice = createSlice<WeaponsState, SliceCaseReducers<WeaponsState>, string, SliceSelectors<WeaponsState>, string>({
  name: "weapons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeaponByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
    builder.addCase(fetchWeaponsName.fulfilled, (state, action) => {
      action.payload.forEach((name) => {
        if (!state.names.includes(name)) {
          state.names = [...state.names, name].sort((a, b) => a.localeCompare(b));
        }
      });
    });
  },
});

export default weaponsSlice.reducer;
