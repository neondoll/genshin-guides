import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchElement, fetchElementList } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { type ElementId } from "@/types/elements.types";

export const useElement = (id: ElementId) => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.details);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getElement = useCallback(async (id: ElementId) => {
    try {
      setLoading(true);
      await dispatch(fetchElement(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error(`Ошибка при получении элемента с ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: ElementId) => !!elements[id], [elements]);
  const preloadElement = useCallback((id: ElementId) => {
    if (!isStored(id)) {
      getElement(id);
    }
    else {
      setLoading(false);
    }
  }, [getElement, isStored]);

  const element = useMemo(() => elements[id], [elements, id]);

  useEffect(() => {
    preloadElement(id);
  }, [id, preloadElement]);

  return { element, error, loading };
};
export const useElementList = () => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.list);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getElements = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchElementList());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error("Ошибка при получении списка элементов:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getElements();
  }, [getElements]);

  return { elements, error, loading };
};
