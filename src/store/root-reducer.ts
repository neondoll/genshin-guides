import { combineReducers } from "@reduxjs/toolkit";

import { artifactSetsReducer } from "./features/artifact-sets";
import { artifactSetsPageFilterReducer } from "./features/artifact-sets-page-filter";
import { artifactSetsRecommendationsReducer } from "./features/artifact-sets-recommendations";
import { artifactSetsTierListReducer } from "./features/artifact-sets-tier-list";
import { characterRolesReducer } from "./features/character-roles";
import { charactersReducer } from "./features/characters";
import { charactersPageFilterReducer } from "./features/characters-page-filter";
import { charactersRecommendationsReducer } from "./features/characters-recommendations";
import { elementsReducer } from "./features/elements";
import { talentsReducer } from "./features/talents";
import { videoSourcesReducer } from "./features/video-sources";
import { weaponTypesReducer } from "./features/weapon-types";
import { weaponsReducer } from "./features/weapons";

const rootReducer = combineReducers({
  artifactSets: artifactSetsReducer,
  artifactSetsPageFilter: artifactSetsPageFilterReducer,
  artifactSetsRecommendations: artifactSetsRecommendationsReducer,
  artifactSetsTierList: artifactSetsTierListReducer,
  characterRoles: characterRolesReducer,
  characters: charactersReducer,
  charactersPageFilter: charactersPageFilterReducer,
  charactersRecommendations: charactersRecommendationsReducer,
  elements: elementsReducer,
  talents: talentsReducer,
  videoSources: videoSourcesReducer,
  weaponTypes: weaponTypesReducer,
  weapons: weaponsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
