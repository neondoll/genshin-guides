import { selectAllWeaponTypes } from "./slice";
import { useAppSelector } from "../../hooks";

export const useWeaponTypes = () => {
  const weaponTypes = useAppSelector(state => selectAllWeaponTypes(state));

  return { weaponTypes };
};
