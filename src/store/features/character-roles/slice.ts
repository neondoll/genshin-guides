import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

import { type CharacterRole, type CharacterRoleId, CharacterRoleIds } from "./types";
import type { RootState } from "@/store";

export const characterRolesAdapter = createEntityAdapter<CharacterRole>();

const initialState = characterRolesAdapter.getInitialState(undefined, {
  [CharacterRoleIds.ON_FIELD]: {
    id: CharacterRoleIds.ON_FIELD,
    name: "На поле",
    description: "Разумно распределяйте время, чтобы такие персонажи могли сражаться на поле боя как можно больше, тем самым в полной мере используя их сильные стороны.",
    image: import.meta.env.BASE_URL + "images/Character_Role_On-Field.webp",
  },
  [CharacterRoleIds.OFF_FIELD]: {
    id: CharacterRoleIds.OFF_FIELD,
    name: "Вне поля",
    description: "Такие персонажи оказывают значительную поддержку вне поля боя. Правильно распределяйте время между ними и персонажами на поле, чтобы более эффективно проходить представления.",
    image: import.meta.env.BASE_URL + "images/Character_Role_Off-Field.webp",
  },
  [CharacterRoleIds.DPS]: {
    id: CharacterRoleIds.DPS,
    name: "Урон",
    description: "Такие персонажи обладают выдающейся способностью наносить урон противнику за определённый отрезок времени. Рекомендуется предоставлять им достаточное время в бою.",
    image: import.meta.env.BASE_URL + "images/Character_Role_DPS.webp",
  },
  [CharacterRoleIds.SUPPORT]: {
    id: CharacterRoleIds.SUPPORT,
    name: "Поддержка",
    description: "Это персонажи с сильными способностями поддержки, которые позволяют другим персонажам сражаться эффективнее. Добавляйте их в свои отряды, чтобы проходить сложные испытания.",
    image: import.meta.env.BASE_URL + "images/Character_Role_Support.webp",
  },
  [CharacterRoleIds.SURVIVABILITY]: {
    id: CharacterRoleIds.SURVIVABILITY,
    name: "Выживание",
    description: "Если вы столкнулись с сильными или многочисленными противниками, такие персонажи более эффективно справятся с их натиском и позволят найти возможность переломить ход битвы.",
    image: import.meta.env.BASE_URL + "images/Character_Role_Survivability.webp",
  },
});

export const characterRolesSlice = createSlice({
  name: "characterRoles",
  initialState,
  reducers: {},
});

export default characterRolesSlice.reducer;

export const { selectAll: selectAllCharacterRoles } = characterRolesAdapter.getSelectors((state: RootState) => state.characterRoles);

export const selectCharacterRolesByIds = createSelector(
  [selectAllCharacterRoles, (_, ids: CharacterRoleId[]) => ids],
  (characterRoles, ids) => characterRoles.filter(characterRole => ids.includes(characterRole.id)),
);
