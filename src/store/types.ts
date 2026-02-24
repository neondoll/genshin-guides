import type { ArtifactSetsState } from "./features/artifact-sets";
import type { ArtifactSetsRecommendationsState } from "./features/artifact-sets-recommendations";
import type { ArtifactSetsTierListState } from "./features/artifact-sets-tier-list";
import type { CharacterRolesState } from "./features/character-roles";
import type { CharactersState } from "./features/characters";
import type { CharactersRecommendationsState } from "./features/characters-recommendations";
import type { ElementsState } from "./features/elements";
import type { TalentsState } from "./features/talents";
import type { VideoSourcesState } from "./features/video-sources";
import type { WeaponsState } from "./features/weapons";
import store from "./store";

export type AppDispatch = typeof store.dispatch;

export interface AppState {
  artifactSets: ArtifactSetsState;
  artifactSetsRecommendations: ArtifactSetsRecommendationsState;
  artifactSetsTierList: ArtifactSetsTierListState;
  characterRoles: CharacterRolesState;
  characters: CharactersState;
  charactersRecommendations: CharactersRecommendationsState;
  elements: ElementsState;
  talents: TalentsState;
  videoSources: VideoSourcesState;
  weapons: WeaponsState;
}
