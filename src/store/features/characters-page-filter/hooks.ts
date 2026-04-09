import { type SetStateAction } from "react";

import { changeCharactersPageFilterValue, type CharactersPageFilterState } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const useCharactersPageFilter = () => {
  const dispatch = useAppDispatch();
  const charactersPageFilter = useAppSelector(state => state.charactersPageFilter);

  const setFilterValue = <T extends keyof CharactersPageFilterState>(field: T) => {
    return (value: SetStateAction<CharactersPageFilterState[T]>) => {
      dispatch(changeCharactersPageFilterValue({
        field,
        value: (value instanceof Function ? value(charactersPageFilter[field]) : value) as CharactersPageFilterState[T],
      }));
    };
  };

  return {
    filterElementIds: charactersPageFilter.elementIds,
    filterRarities: charactersPageFilter.rarities,
    filterWeaponTypeIds: charactersPageFilter.weaponTypeIds,
    setFilterElementIds: setFilterValue("elementIds"),
    setFilterRarities: setFilterValue("rarities"),
    setFilterWeaponTypeIds: setFilterValue("weaponTypeIds"),
  };
};
