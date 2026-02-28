import { useCallback, useEffect, useMemo, useState } from "react";

import { fetchWeapon, fetchWeaponList } from "./slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { type WeaponId } from "@/types/weapons.types";

export const useWeapon = (id: WeaponId) => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(state => state.weapons.details);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getWeapon = useCallback(async (id: WeaponId) => {
    try {
      setLoading(true);
      await dispatch(fetchWeapon(id));
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error(`Ошибка при получении оружия с ID "${id}":`, error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);
  const isStored = useCallback((id: WeaponId) => !!weapons[id], [weapons]);
  const preloadWeapon = useCallback((id: WeaponId) => {
    if (!isStored(id)) {
      getWeapon(id);
    }
    else {
      setLoading(false);
    }
  }, [getWeapon, isStored]);

  const weapon = useMemo(() => weapons[id], [id, weapons]);

  useEffect(() => {
    preloadWeapon(id);
  }, [id, preloadWeapon]);

  return { error, loading, weapon };
};
export const useWeaponList = () => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(state => state.weapons.list);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getWeapons = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(fetchWeaponList());
      setError(null);
    }
    catch (error) {
      setError("Ошибка загрузки данных с сервера");
      console.error("Ошибка при получении списка оружий:", error);
    }
    finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getWeapons();
  }, [getWeapons]);

  return { error, loading, weapons };
};
