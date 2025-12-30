import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { artifactSetsReducer } from "./features/artifact-sets";
import { charactersReducer } from "./features/characters";
import elementsReducer from "./features/elements/slice";
import talentsReducer from "./features/talents/slice";
import weaponsReducer from "./features/weapons/slice";

const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    characters: charactersReducer,
    elements: elementsReducer,
    talents: talentsReducer,
    weapons: weaponsReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
