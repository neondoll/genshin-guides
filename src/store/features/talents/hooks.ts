import { useCallback, useEffect, useMemo } from "react";

import { fetchTalent } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { TalentId } from "@/types/talents";

export const useTalent = (id: TalentId) => {
  const dispatch = useAppDispatch();
  const talents = useAppSelector(state => state.talents.details);
  const error = useAppSelector(state => state.talents.detailsError);
  const loading = useAppSelector(state => state.talents.detailsLoading);

  const isStored = useCallback((id: TalentId) => !!talents[id], [talents]);
  const ensureLoaded = useCallback((id: TalentId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchTalent(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const talent = useMemo(() => talents[id], [id, talents]);

  return { error, loading, talent };
};
