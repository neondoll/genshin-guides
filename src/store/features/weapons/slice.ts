import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { type Weapon, type WeaponListItem } from "@/types/weapons.types";
import { getWeapon, getWeaponList } from "@/utils/genshinDbAdapter";

export interface WeaponsState {
  details: { [P in Weapon["id"]]?: Weapon };
  list: WeaponListItem[];
}

const initialState: WeaponsState = { details: {}, list: [] };

export const fetchWeapon = createAsyncThunk<Weapon, Weapon["id"]>(
  "weapons/fetch",
  async (weaponId, { getState }) => {
    const state = getState() as { weapons: WeaponsState };
    const stateWeapon = state.weapons.details[weaponId];

    if (stateWeapon) {
      console.log(`Оружие с ID "${weaponId}" найдено в хранилище`);

      return stateWeapon;
    }

    console.log(`Загрузка оружия с ID "${weaponId}" с сервера`);

    return getWeapon(weaponId);
  },
);
export const fetchWeaponList = createAsyncThunk<WeaponListItem[]>(
  "weapons/fetchList",
  async (_, { getState }) => {
    const state = getState() as { weapons: WeaponsState };
    const stateList = state.weapons.list;

    if (stateList.length) {
      console.log("Список оружий найден в хранилище");

      return stateList;
    }

    console.log(`Загрузка списка оружий с сервера`);

    const list = await getWeaponList();

    return list.sort((a, b) => a.name.localeCompare(b.name));
  },
);

export const weaponsSlice = createSlice({
  name: "weapons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeapon.fulfilled, (state, action) => {
      state.details[action.payload.id] = action.payload;
    });
    builder.addCase(fetchWeaponList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default weaponsSlice.reducer;
