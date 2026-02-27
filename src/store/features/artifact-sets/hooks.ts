import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchArtifactSet, fetchArtifactSetList } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { type ArtifactSetId } from "@/types/artifact-sets.types";

export const useArtifactSet = (id: ArtifactSetId) => {
  const dispatch = useAppDispatch();
  const artifactSets = useAppSelector(state => state.artifactSets.details);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSet = useCallback(async (id: ArtifactSetId) => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSet(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error(`Ошибка при получении набора артефактов с ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: ArtifactSetId) => !!artifactSets[id], [artifactSets]);
  const preloadArtifactSet = useCallback((id: ArtifactSetId) => {
    if (!isStored(id)) {
      getArtifactSet(id);
    }
    else {
      setLoading(false);
    }
  }, [getArtifactSet, isStored]);

  const artifactSet = useMemo(() => artifactSets[id], [artifactSets, id]);

  useEffect(() => {
    preloadArtifactSet(id);
  }, [id, preloadArtifactSet]);

  return { artifactSet, error, loading };
};
export const useArtifactSetList = () => {
  const dispatch = useAppDispatch();
  const artifactSets = useAppSelector(state => state.artifactSets.list);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSets = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSetList());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error("Ошибка при получении списка наборов артефактов:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getArtifactSets();
  }, [getArtifactSets]);

  return { artifactSets, error, loading };
};
