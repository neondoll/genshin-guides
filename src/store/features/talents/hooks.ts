import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchTalentByName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { type TalentName } from "@/types/talents.types";

export const useTalent = (name: TalentName) => {
  const dispatch = useAppDispatch();
  const talents = useAppSelector(state => state.talents.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getTalent = useCallback(async (name: TalentName) => {
    try {
      setLoading(true);
      await dispatch(fetchTalentByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении талантов для "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: TalentName) => !!talents[name], [talents]);
  const preloadTalent = useCallback((name: TalentName) => {
    if (!isStored(name)) {
      getTalent(name);
    }
    else {
      setLoading(false);
    }
  }, [getTalent, isStored]);

  const talent = useMemo(() => talents[name], [name, talents]);

  useEffect(() => {
    preloadTalent(name);
  }, [name, preloadTalent]);

  return { error, loading, talent };
};
