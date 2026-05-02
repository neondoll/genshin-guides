import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import type { Element, ElementListItem } from "@/types/elements";
import { getElement, getElementList } from "@/utils/genshinDbAdapter";

export interface ElementsState {
  details: { [P in Element["id"]]?: Element };
  detailsError: string | null;
  detailsLoading: boolean;
  list: ElementListItem[];
  listError: string | null;
  listLoading: boolean;
}

const initialState: ElementsState = {
  details: {},
  detailsError: null,
  detailsLoading: false,
  list: [],
  listError: null,
  listLoading: false,
};

export const fetchElement = createAsyncThunk<Element, Element["id"]>(
  "elements/fetch",
  async (elementId, { getState }) => {
    const state = getState() as { elements: ElementsState };
    const stateElement = state.elements.details[elementId];

    if (stateElement) {
      console.log(`Элемент с ID "${elementId}" найден в хранилище`);

      return stateElement;
    }

    console.log(`Загрузка элемента с ID "${elementId}" с сервера`);

    return await getElement(elementId);
  },
);
export const fetchElementList = createAsyncThunk<ElementListItem[]>(
  "elements/fetchList",
  async (_, { getState }) => {
    const state = getState() as { elements: ElementsState };
    const stateList = state.elements.list;

    if (stateList.length) {
      console.log("Список элементов найден в хранилище");

      return stateList;
    }

    console.log(`Загрузка списка элементов с сервера`);

    const list = await getElementList();

    return list.sort((a, b) => a.name.localeCompare(b.name));
  },
);

export const elementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchElement
      .addCase(fetchElement.pending, (state) => {
        state.detailsLoading = true;
        state.detailsError = null;
      })
      .addCase(fetchElement.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.details[action.payload.id] = action.payload;
      })
      .addCase(fetchElement.rejected, (state, action) => {
        state.detailsLoading = false;
        state.detailsError = action.error.message ?? `Ошибка загрузки элемента с ID "${action.meta.arg}"`;
      })
      // fetchElementList
      .addCase(fetchElementList.pending, (state) => {
        state.listLoading = true;
        state.listError = null;
      })
      .addCase(fetchElementList.fulfilled, (state, action) => {
        state.listLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchElementList.rejected, (state, action) => {
        state.listLoading = false;
        state.listError = action.error.message ?? "Ошибка загрузки списка элементов";
      });
  },
});

export default elementsSlice.reducer;
