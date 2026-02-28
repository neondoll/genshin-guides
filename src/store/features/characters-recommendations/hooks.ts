import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchCharacterRecommendations } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { type CharacterRecommendationsId } from "@/types/characters-recommendations.types";

export const useCharacterRecommendations = (id: CharacterRecommendationsId) => {
  const dispatch = useAppDispatch();
  const charactersRecommendations = useAppSelector(state => state.charactersRecommendations.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharacterRecommendations = useCallback(async (id: CharacterRecommendationsId) => {
    try {
      setLoading(true);
      await dispatch(fetchCharacterRecommendations(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных");
      console.error(`Ошибка при получении рекомендаций персонажа c ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: CharacterRecommendationsId) => !!charactersRecommendations[id], [charactersRecommendations]);
  const preloadCharacterRecommendations = useCallback((id: CharacterRecommendationsId) => {
    if (!isStored(id)) {
      getCharacterRecommendations(id);
    }
    else {
      setLoading(false);
    }
  }, [getCharacterRecommendations, isStored]);

  const characterRecommendations = useMemo(() => charactersRecommendations[id], [charactersRecommendations, id]);

  useEffect(() => {
    preloadCharacterRecommendations(id);
  }, [id, preloadCharacterRecommendations]);

  return { characterRecommendations, error, loading };
};
