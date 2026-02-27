import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchCharacter, fetchCharacterList } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { type CharacterId } from "@/types/characters.types";

export const useCharacter = (id: CharacterId) => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.details);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharacter = useCallback(async (id: CharacterId) => {
    try {
      setLoading(true);
      await dispatch(fetchCharacter(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error(`Ошибка при получении персонажа с ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: CharacterId) => !!characters[id], [characters]);
  const preloadCharacter = useCallback((id: CharacterId) => {
    if (!isStored(id)) {
      getCharacter(id);
    }
    else {
      setLoading(false);
    }
  }, [getCharacter, isStored]);

  const character = useMemo(() => characters[id], [characters, id]);

  useEffect(() => {
    preloadCharacter(id);
  }, [id, preloadCharacter]);

  return { character, error, loading };
};
export const useCharactersList = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.list);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getCharacters = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchCharacterList());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error("Ошибка при получении списка персонажей:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return { characters, error, loading };
};
