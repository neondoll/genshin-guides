import store from "./store";

export { useAppDispatch as useAppDispatch, useAppSelector as useAppSelector } from "./hooks";
export { type AppDispatch as AppDispatch, type AppState as AppState } from "./types";

export default store;
