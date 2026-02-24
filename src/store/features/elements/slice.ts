import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Element, type ElementName } from "@/types/elements.types";
import { getElement, getElementsNames } from "@/utils/genshinDbAdapter";

export interface ElementsState {
  entities: { [P in ElementName]?: Element | null };
  names: ElementName[];
}

const initialState: ElementsState = { entities: {}, names: [] };

export const fetchElementByName = createAsyncThunk<Element | null, ElementName>("elements/fetchByName", async (elementName: ElementName, { getState }) => {
  const state = getState() as { elements: ElementsState };

  const stateElement = state.elements.entities[elementName];

  if (stateElement) {
    // console.log(`Элемент "${elementName}" найден в хранилище`);

    return stateElement;
  }

  // console.log(`Загрузка элемента "${elementName}" с сервера`);

  return getElement(elementName);
});
export const fetchElementsName = createAsyncThunk<ElementName[]>("elements/fetchNames", async () => {
  // console.log(`Загрузка имен элементов с сервера`);

  return getElementsNames();
});

export const elementsSlice = createSlice<ElementsState, SliceCaseReducers<ElementsState>, string, SliceSelectors<ElementsState>, string>({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchElementByName.fulfilled, (state, action) => {
      if (action.payload) {
        state.entities[action.payload.name] = action.payload;

        if (!state.names.includes(action.payload.name)) {
          state.names = [...state.names, action.payload.name].sort((a, b) => a.localeCompare(b));
        }
      }
    });
    builder.addCase(fetchElementsName.fulfilled, (state, action) => {
      action.payload.forEach((name) => {
        if (!state.names.includes(name)) {
          state.names = [...state.names, name].sort((a, b) => a.localeCompare(b));
        }
      });
    });
  },
});

export default elementsSlice.reducer;
