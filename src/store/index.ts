import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { artifactSetsReducer } from "./features/artifact-sets";
import { characterRolesReducer } from "./features/character-roles";
import { charactersReducer } from "./features/characters";
import { charactersRecommendationsReducer } from "./features/characters-recommendations";
import { elementsReducer } from "./features/elements";
import { talentsReducer } from "./features/talents";
import { videoSourcesReducer } from "./features/video-sources";
import { weaponsReducer } from "./features/weapons";

const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    characterRoles: characterRolesReducer,
    characters: charactersReducer,
    charactersRecommendations: charactersRecommendationsReducer,
    elements: elementsReducer,
    talents: talentsReducer,
    videoSources: videoSourcesReducer,
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
