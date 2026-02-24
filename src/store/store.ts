import { configureStore } from "@reduxjs/toolkit";

import { artifactSetsReducer } from "@/store/features/artifact-sets";
import { artifactSetsRecommendationsReducer } from "@/store/features/artifact-sets-recommendations";
import { artifactSetsTierListReducer } from "@/store/features/artifact-sets-tier-list";
import { characterRolesReducer } from "@/store/features/character-roles";
import { charactersReducer } from "@/store/features/characters";
import { charactersRecommendationsReducer } from "@/store/features/characters-recommendations";
import { elementsReducer } from "@/store/features/elements";
import { talentsReducer } from "@/store/features/talents";
import { videoSourcesReducer } from "@/store/features/video-sources";
import { weaponsReducer } from "@/store/features/weapons";

const store = configureStore({
  reducer: {
    artifactSets: artifactSetsReducer,
    artifactSetsRecommendations: artifactSetsRecommendationsReducer,
    artifactSetsTierList: artifactSetsTierListReducer,
    characterRoles: characterRolesReducer,
    characters: charactersReducer,
    charactersRecommendations: charactersRecommendationsReducer,
    elements: elementsReducer,
    talents: talentsReducer,
    videoSources: videoSourcesReducer,
    weapons: weaponsReducer,
  },
});

export default store;
