import { type SetStateAction } from "react";

import { type ArtifactSetsPageFilterState, changeArtifactSetsPageFilterValue } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const useArtifactSetsPageFilter = () => {
  const dispatch = useAppDispatch();
  const artifactSetsPageFilter = useAppSelector(state => state.artifactSetsPageFilter);

  const setFilterValue = <T extends keyof ArtifactSetsPageFilterState>(field: T) => {
    return (value: SetStateAction<ArtifactSetsPageFilterState[T]>) => {
      dispatch(changeArtifactSetsPageFilterValue({
        field,
        value: (value instanceof Function ? value(artifactSetsPageFilter[field]) : value) as ArtifactSetsPageFilterState[T],
      }));
    };
  };

  return {
    filterRarities: artifactSetsPageFilter.rarities,
    setFilterRarities: setFilterValue("rarities"),
  };
};
