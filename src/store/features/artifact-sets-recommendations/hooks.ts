import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchArtifactSetRecommendationsByName } from "./slice";
import type { ArtifactSetName } from "../artifact-sets";
import { useAppDispatch, useAppSelector } from "@/store";

export const useArtifactSetRecommendations = (name: ArtifactSetName) => {
  const dispatch = useAppDispatch();
  const artifactSetsRecommendations = useAppSelector(state => state.artifactSetsRecommendations.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSetRecommendations = useCallback(async (name: ArtifactSetName) => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSetRecommendationsByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных");
      console.error(`Ошибка при получении рекомендаций набора артефактов "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: ArtifactSetName) => !!artifactSetsRecommendations[name], [artifactSetsRecommendations]);
  const preloadArtifactSetRecommendations = useCallback((name: ArtifactSetName) => {
    if (!isStored(name)) {
      getArtifactSetRecommendations(name);
    }
    else {
      setLoading(false);
    }
  }, [getArtifactSetRecommendations, isStored]);

  const artifactSetRecommendations = useMemo(() => artifactSetsRecommendations[name], [artifactSetsRecommendations, name]);

  useEffect(() => {
    preloadArtifactSetRecommendations(name);
  }, [name, preloadArtifactSetRecommendations]);

  return { artifactSetRecommendations, error, loading };
};
