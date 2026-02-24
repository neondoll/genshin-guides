import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchElementByName, fetchElementsName } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { type ElementName } from "@/types/elements.types";

export const useElement = (name: ElementName) => {
  const dispatch = useAppDispatch();
  const elements = useAppSelector(state => state.elements.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getElement = useCallback(async (name: ElementName) => {
    try {
      setLoading(true);
      await dispatch(fetchElementByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении элемента "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: ElementName) => !!elements[name], [elements]);
  const preloadElement = useCallback((name: ElementName) => {
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
export const useElementsNames = () => {
  const dispatch = useAppDispatch();
  const elementsNames = useAppSelector(state => state.elements.names);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getElementsNames = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchElementsName());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error("Ошибка при получении имен элементов:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getElementsNames();
  }, [getElementsNames]);

  return { elementsNames, error, loading };
};
