import { selectAllWeaponTypes } from "./slice";
import { useAppSelector } from "@/store";

export const useWeaponTypes = () => {
  const weaponTypes = useAppSelector(state => selectAllWeaponTypes(state));

  return { weaponTypes };
};
