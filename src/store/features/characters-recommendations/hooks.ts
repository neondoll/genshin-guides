import { useCallback, useEffect, useMemo } from "react";

import { fetchCharacterRecommendations, selectEntitiesCharactersRecommendations } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { CharacterRecommendationsId } from "@/types/characters-recommendations";

export const useCharacterRecommendations = (id: CharacterRecommendationsId) => {
  const dispatch = useAppDispatch();
  const charactersRecommendations = useAppSelector(selectEntitiesCharactersRecommendations);
  const error = useAppSelector(state => state.charactersRecommendations.error);
  const loading = useAppSelector(state => state.charactersRecommendations.loading);

  const isStored = useCallback((id: CharacterRecommendationsId) => !!charactersRecommendations[id], [charactersRecommendations]);
  const ensureLoaded = useCallback((id: CharacterRecommendationsId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchCharacterRecommendations(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const characterRecommendations = useMemo(() => charactersRecommendations[id], [charactersRecommendations, id]);

  return { characterRecommendations, error, loading };
};
