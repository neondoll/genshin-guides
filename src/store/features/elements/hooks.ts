import { useCallback, useEffect, useMemo } from "react";

import { fetchElement, fetchElementList } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { ElementId } from "@/types/elements";

export const useElement = (id: ElementId) => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.details);
  const error = useAppSelector(state => state.elements.detailsError);
  const loading = useAppSelector(state => state.elements.detailsLoading);

  const isStored = useCallback((id: ElementId) => !!elements[id], [elements]);
  const ensureLoaded = useCallback((id: ElementId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchElement(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const element = useMemo(() => elements[id], [elements, id]);

  return { element, error, loading };
};
export const useElementList = () => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.list);
  const error = useAppSelector(state => state.elements.listError);
  const loading = useAppSelector(state => state.elements.listLoading);

  const ensureLoaded = useCallback(() => {
    if (elements.length === 0 && !loading) {
      dispatch(fetchElementList());
    }
  }, [dispatch, elements.length, loading]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return { elements, error, loading };
};
