import { useCallback, useEffect, useMemo } from "react";

import { fetchWeapon, fetchWeaponList } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { WeaponId } from "@/types/weapons";

export const useWeapon = (id: WeaponId) => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(state => state.weapons.details);
  const error = useAppSelector(state => state.weapons.detailsError);
  const loading = useAppSelector(state => state.weapons.detailsLoading);

  const isStored = useCallback((id: WeaponId) => !!weapons[id], [weapons]);
  const ensureLoaded = useCallback((id: WeaponId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchWeapon(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const weapon = useMemo(() => weapons[id], [id, weapons]);

  return { error, loading, weapon };
};
export const useWeaponList = () => {
  const dispatch = useAppDispatch();
  const weapons = useAppSelector(state => state.weapons.list);
  const error = useAppSelector(state => state.weapons.listError);
  const loading = useAppSelector(state => state.weapons.listLoading);

  const ensureLoaded = useCallback(() => {
    if (weapons.length === 0 && !loading) {
      dispatch(fetchWeaponList());
    }
  }, [dispatch, loading, weapons.length]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return { error, loading, weapons };
};
