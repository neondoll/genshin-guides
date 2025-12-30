import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchTalentByCharacterName } from "./slice";
import type { CharacterName } from "../characters";
import { useAppDispatch, useAppSelector } from "@/store";

export const useTalent = (characterName: CharacterName) => {
  const dispatch = useAppDispatch();
  const talents = useAppSelector(state => state.talents.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getTalent = useCallback(async (characterName: CharacterName) => {
    try {
      setLoading(true);
      const result = await dispatch(fetchTalentByCharacterName(characterName));
      setError(null);
      return result.payload;
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении талантов для "${characterName}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((characterName: CharacterName) => !!talents[characterName], [talents]);
  const preloadTalent = useCallback((characterName: CharacterName) => {
    if (!isStored(characterName)) {
      getTalent(characterName);
    }
    else {
      setLoading(false);
    }
  }, [getTalent, isStored]);

  const talent = useMemo(() => talents[characterName], [characterName, talents]);

  useEffect(() => {
    preloadTalent(characterName);
  }, [characterName, preloadTalent]);

  return { error, loading, talent };
};
