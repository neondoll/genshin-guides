import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Weapon, WeaponListItem } from "@/types/weapons";
import { getWeapon, getWeaponList } from "@/utils/genshinDbAdapter";

export interface WeaponsState {
  details: { [P in Weapon["id"]]?: Weapon };
  detailsError: string | null;
  detailsLoading: boolean;
  list: WeaponListItem[];
  listError: string | null;
  listLoading: boolean;
}

const initialState: WeaponsState = {
  details: {},
  detailsError: null,
  detailsLoading: false,
  list: [],
  listError: null,
  listLoading: false,
};

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
    builder
      // fetchWeapon
      .addCase(fetchWeapon.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchWeapon.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchWeapon.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message ?? `Ошибка загрузки оружия с ID "${action.meta.arg}"`;
      })
      // fetchWeaponList
      .addCase(fetchWeaponList.pending, (state) => {
        state.listLoading = true;
        state.listError = null;
      })
      .addCase(fetchWeaponList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchWeaponList.rejected, (state, action) => {
        state.listLoading = false;
        state.listError = action.error.message ?? "Ошибка загрузки списка оружий";
      });
  },
});

export default weaponsSlice.reducer;
