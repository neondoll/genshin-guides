import { useCallback, useEffect, useMemo } from "react";

import { fetchArtifactSet, fetchArtifactSetList } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { ArtifactSetId } from "@/types/artifact-sets";

export const useArtifactSet = (id: ArtifactSetId) => {
  const dispatch = useAppDispatch();
  const artifactSets = useAppSelector(state => state.artifactSets.details);
  const error = useAppSelector(state => state.artifactSets.detailsError);
  const loading = useAppSelector(state => state.artifactSets.detailsLoading);

  const isStored = useCallback((id: ArtifactSetId) => !!artifactSets[id], [artifactSets]);
  const ensureLoaded = useCallback((id: ArtifactSetId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchArtifactSet(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const artifactSet = useMemo(() => artifactSets[id], [artifactSets, id]);

  return { artifactSet, error, loading };
};
export const useArtifactSetList = () => {
  const dispatch = useAppDispatch();
  const artifactSets = useAppSelector(state => state.artifactSets.list);
  const error = useAppSelector(state => state.artifactSets.listError);
  const loading = useAppSelector(state => state.artifactSets.listLoading);

  const ensureLoaded = useCallback(() => {
    if (artifactSets.length === 0 && !loading) {
      dispatch(fetchArtifactSetList());
    }
  }, [artifactSets.length, dispatch, loading]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return { artifactSets, error, loading };
};
