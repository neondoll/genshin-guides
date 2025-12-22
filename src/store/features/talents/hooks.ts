import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchTalentByCharacterName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";

export const useTalent = (characterName: string) => {
  const dispatch = useAppDispatch();
  const talents = useAppSelector(state => state.talents.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getTalent = useCallback(async (characterName: string) => {
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
  const isStored = useCallback((characterName: string) => !!talents[characterName], [talents]);
  const preloadTalent = useCallback((characterName: string) => {
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
