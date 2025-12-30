import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchWeaponByName, fetchWeaponsName } from "./slice";
import type { WeaponName } from "./types";
import { useAppDispatch, useAppSelector } from "@/store";

export const useWeapon = (name: WeaponName) => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(state => state.weapons.entities);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getWeapon = useCallback(async (name: WeaponName) => {
    try {
      setLoading(true);
      await dispatch(fetchWeaponByName(name));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error(`Ошибка при получении оружия "${name}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((name: WeaponName) => !!weapons[name], [weapons]);
  const preloadWeapon = useCallback((name: WeaponName) => {
    if (!isStored(name)) {
      getWeapon(name);
    }
    else {
      setLoading(false);
    }
  }, [getWeapon, isStored]);

  const weapon = useMemo(() => weapons[name], [name, weapons]);

  useEffect(() => {
    preloadWeapon(name);
  }, [name, preloadWeapon]);

  return { error, loading, weapon };
};
export const useWeaponsNames = () => {
  const dispatch = useAppDispatch();
  const weaponsNames = useAppSelector(state => state.weapons.names);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getWeaponsNames = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchWeaponsName());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error("Ошибка при получении имен оружий:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getWeaponsNames();
  }, [getWeaponsNames]);

  return { error, loading, weaponsNames };
};
