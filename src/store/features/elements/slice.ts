import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Element, ElementName } from "./types";
import { getElement } from "@/utils/genshinDbAdapter";

interface ElementsState {
  entities: { [P in ElementName]?: Element | null };
  names: ElementName[];
}

const initialState: ElementsState = { entities: {}, names: [] };

export const fetchElementByName = createAsyncThunk("elements/fetchByName", async (elementName: ElementName, { getState }) => {
  const state = getState() as { elements: ElementsState };

  const stateElement = state.elements.entities[elementName];

  if (stateElement) {
    // console.log(`Элемент "${elementName}" найден в хранилище`);

    return stateElement;
  }

  // console.log(`Загрузка элемента "${elementName}" с сервера`);

  return getElement(elementName);
});

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchElementByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names.push(action.payload.name);
        }
      }
    });
  },
});

export default elementsSlice.reducer;
