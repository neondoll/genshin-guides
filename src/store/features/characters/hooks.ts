import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchCharacterByName, fetchCharactersName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";

export const useCharacter = (name: string) => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharacter = useCallback(async (name: string) => {
    try {
      setLoading(true);
      await dispatch(fetchCharacterByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении персонажа "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: string) => !!characters[name], [characters]);
  const preloadCharacter = useCallback((name: string) => {
    if (!isStored(name)) {
      getCharacter(name);
    }
    else {
      setLoading(false);
    }
  }, [getCharacter, isStored]);

  const character = useMemo(() => characters[name], [characters, name]);

  useEffect(() => {
    preloadCharacter(name);
  }, [name, preloadCharacter]);

  return { character, error, loading };
};
export const useCharactersNames = () => {
  const dispatch = useAppDispatch();
  const charactersNames = useAppSelector(state => state.characters.names);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharactersNames = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchCharactersName());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error("Ошибка при получении имен персонажей:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getCharactersNames();
  }, [getCharactersNames]);

  return { charactersNames, error, loading };
};
