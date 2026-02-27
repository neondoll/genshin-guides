import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchArtifactSetRecommendationsById } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { type ArtifactSetId } from "@/types/artifact-sets.types";

export const useArtifactSetRecommendations = (artifactSetId: ArtifactSetId) => {
  const dispatch = useAppDispatch();
  const artifactSetsRecommendations = useAppSelector(state => state.artifactSetsRecommendations.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSetRecommendations = useCallback(async (artifactSetId: ArtifactSetId) => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSetRecommendationsById(artifactSetId));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных");
      console.error(`Ошибка при получении рекомендаций набора артефактов с ID "${artifactSetId}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((artifactSetId: ArtifactSetId) => {
    return !!artifactSetsRecommendations[artifactSetId];
  }, [artifactSetsRecommendations]);
  const preloadArtifactSetRecommendations = useCallback((artifactSetId: ArtifactSetId) => {
    if (!isStored(artifactSetId)) {
      getArtifactSetRecommendations(artifactSetId);
    }
    else {
      setLoading(false);
    }
  }, [getArtifactSetRecommendations, isStored]);

  const artifactSetRecommendations = useMemo(() => {
    return artifactSetsRecommendations[artifactSetId];
  }, [artifactSetId, artifactSetsRecommendations]);

  useEffect(() => {
    preloadArtifactSetRecommendations(artifactSetId);
  }, [artifactSetId, preloadArtifactSetRecommendations]);

  return { artifactSetRecommendations, error, loading };
};
