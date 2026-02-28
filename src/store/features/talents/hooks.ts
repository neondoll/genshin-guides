import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchTalent } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { type TalentId } from "@/types/talents.types";

export const useTalent = (id: TalentId) => {
  const dispatch = useAppDispatch();
  const talents = useAppSelector(state => state.talents.details);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getTalent = useCallback(async (id: TalentId) => {
    try {
      setLoading(true);
      await dispatch(fetchTalent(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error(`Ошибка при получении талантов с ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: TalentId) => !!talents[id], [talents]);
  const preloadTalent = useCallback((id: TalentId) => {
    if (!isStored(id)) {
      getTalent(id);
    }
    else {
      setLoading(false);
    }
  }, [getTalent, isStored]);

  const talent = useMemo(() => talents[id], [id, talents]);

  useEffect(() => {
    preloadTalent(id);
  }, [id, preloadTalent]);

  return { error, loading, talent };
};
