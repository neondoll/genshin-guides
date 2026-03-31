import {
  createEntityAdapter,
  createSelector,
  createSlice,
  type SliceCaseReducers,
  type SliceSelectors,
} from "@reduxjs/toolkit";

import { type WeaponType, type WeaponTypeId, WeaponTypeIds } from "@/types/weapon-types.types";

export const weaponTypesAdapter = createEntityAdapter<WeaponType>();

const initialState = weaponTypesAdapter.getInitialState(undefined, {
  [WeaponTypeIds.SWORD_ONE_HAND]: {
    id: WeaponTypeIds.SWORD_ONE_HAND,
    name: "Одноручное",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png",
  },
  [WeaponTypeIds.CLAYMORE]: {
    id: WeaponTypeIds.CLAYMORE,
    name: "Двуручное",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png",
  },
  [WeaponTypeIds.POLE]: {
    id: WeaponTypeIds.POLE,
    name: "Древковое",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png",
  },
  [WeaponTypeIds.CATALYST]: {
    id: WeaponTypeIds.CATALYST,
    name: "Катализатор",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png",
  },
  [WeaponTypeIds.BOW]: {
    id: WeaponTypeIds.BOW,
    name: "Стрелковое",
    image: "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png",
  },
});

export type WeaponTypesState = typeof initialState;

export const weaponTypesSlice = createSlice<WeaponTypesState, SliceCaseReducers<WeaponTypesState>, string, SliceSelectors<WeaponTypesState>, string>({
  name: "weaponTypes",
  initialState,
  reducers: {},
});

export default weaponTypesSlice.reducer;

export const { selectAll: selectAllWeaponTypes } = weaponTypesAdapter.getSelectors((state: {
  weaponTypes: WeaponTypesState;
}) => state.weaponTypes);

export const selectWeaponTypesByIds = createSelector(
  [selectAllWeaponTypes, (_, ids: WeaponTypeId[]) => ids],
  (weaponTypes, ids) => weaponTypes.filter(weaponType => ids.includes(weaponType.id)),
);
