import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchElementByName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";

export const useElement = (name: string) => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getElement = useCallback(async (name: string) => {
    try {
      setLoading(true);
      const result = await dispatch(fetchElementByName(name));
      setError(null);
      return result.payload;
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении элемента "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: string) => !!elements[name], [elements]);
  const preloadElement = useCallback((name: string) => {
    if (!isStored(name)) {
      getElement(name);
    }
    else {
      setLoading(false);
    }
  }, [getElement, isStored]);

  const element = useMemo(() => elements[name], [elements, name]);

  useEffect(() => {
    preloadElement(name);
  }, [name, preloadElement]);

  return { element, error, loading };
};
