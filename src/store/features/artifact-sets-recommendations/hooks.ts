import { useCallback, useEffect, useMemo } from "react";

import { fetchArtifactSetRecommendations, selectEntitiesArtifactSetsRecommendations } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { ArtifactSetId } from "@/types/artifact-sets";

export const useArtifactSetRecommendations = (id: ArtifactSetId) => {
  const dispatch = useAppDispatch();
  const artifactSetsRecommendations = useAppSelector(selectEntitiesArtifactSetsRecommendations);
  const error = useAppSelector(state => state.artifactSetsRecommendations.error);
  const loading = useAppSelector(state => state.artifactSetsRecommendations.loading);

  const isStored = useCallback((id: ArtifactSetId) => !!artifactSetsRecommendations[id], [artifactSetsRecommendations]);
  const ensureLoaded = useCallback((id: ArtifactSetId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchArtifactSetRecommendations(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const artifactSetRecommendations = useMemo(() => artifactSetsRecommendations[id], [artifactSetsRecommendations, id]);

  return { artifactSetRecommendations, error, loading };
};
