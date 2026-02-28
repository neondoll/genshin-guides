import { createAsyncThunk, createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { type Element, type ElementListItem } from "@/types/elements.types";
import { getElement, getElementList } from "@/utils/genshinDbAdapter";

export interface ElementsState {
  details: { [P in Element["id"]]?: Element };
  list: ElementListItem[];
}

const initialState: ElementsState = { details: {}, list: [] };

export const fetchElement = createAsyncThunk<Element, Element["id"]>("elements/fetch", async (elementId, { getState }) => {
  const state = getState() as { elements: ElementsState };

  const stateElement = state.elements.details[elementId];

  if (stateElement) {
    console.log(`Элемент с ID "${elementId}" найден в хранилище`);

    return stateElement;
  }

  console.log(`Загрузка элемента с ID "${elementId}" с сервера`);

  return await getElement(elementId);
});
export const fetchElementList = createAsyncThunk<ElementListItem[]>("elements/fetchList", async (_, { getState }) => {
  const state = getState() as { elements: ElementsState };

  const stateList = state.elements.list;

  if (stateList.length) {
    console.log("Список элементов найден в хранилище");

    return stateList;
  }

  console.log(`Загрузка списка элементов с сервера`);

  const list = await getElementList();

  return list.sort((a, b) => a.name.localeCompare(b.name));
});

export const elementsSlice = createSlice<ElementsState, SliceCaseReducers<ElementsState>, string, SliceSelectors<ElementsState>, string>({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchElement.fulfilled, (state, action) => {
      state.details[action.payload.id] = action.payload;
    });
    builder.addCase(fetchElementList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default elementsSlice.reducer;
