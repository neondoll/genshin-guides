import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchArtifactSetByName, fetchArtifactSetsName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";

export const useArtifactSet = (name: string) => {
  const dispatch = useAppDispatch();
  const artifactSets = useAppSelector(state => state.artifactSets.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSet = useCallback(async (name: string) => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSetByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении набора артефактов "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: string) => !!artifactSets[name], [artifactSets]);
  const preloadArtifactSet = useCallback((name: string) => {
    if (!isStored(name)) {
      getArtifactSet(name);
    }
    else {
      setLoading(false);
    }
  }, [getArtifactSet, isStored]);

  const artifactSet = useMemo(() => artifactSets[name], [artifactSets, name]);

  useEffect(() => {
    preloadArtifactSet(name);
  }, [name, preloadArtifactSet]);

  return { artifactSet, error, loading };
};
export const useArtifactSetsNames = () => {
  const dispatch = useAppDispatch();
  const artifactSetsNames = useAppSelector(state => state.artifactSets.names);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getArtifactSetsNames = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchArtifactSetsName());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error("Ошибка при получении имен наборов артефактов:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getArtifactSetsNames();
  }, [getArtifactSetsNames]);

  return { artifactSetsNames, error, loading };
};
