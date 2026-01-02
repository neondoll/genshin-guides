import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchCharacterRecommendationsByName } from "./slice";
import type { CharacterName } from "../characters";
import { useAppDispatch, useAppSelector } from "@/store";

export const useCharacterRecommendations = (name: CharacterName) => {
  const dispatch = useAppDispatch();
  const charactersRecommendations = useAppSelector(state => state.charactersRecommendations.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharacterRecommendations = useCallback(async (name: CharacterName) => {
    try {
      setLoading(true);
      await dispatch(fetchCharacterRecommendationsByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных");
      console.error(`Ошибка при получении рекомендаций персонажа "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: CharacterName) => !!charactersRecommendations[name], [charactersRecommendations]);
  const preloadCharacterRecommendations = useCallback((name: CharacterName) => {
    if (!isStored(name)) {
      getCharacterRecommendations(name);
    }
    else {
      setLoading(false);
    }
  }, [getCharacterRecommendations, isStored]);

  const characterRecommendations = useMemo(() => charactersRecommendations[name], [charactersRecommendations, name]);

  useEffect(() => {
    preloadCharacterRecommendations(name);
  }, [name, preloadCharacterRecommendations]);

  return { characterRecommendations, error, loading };
};
