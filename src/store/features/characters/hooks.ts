import { useCallback, useEffect, useMemo } from "react";

import { fetchCharacter, fetchCharacterList } from "./slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import type { CharacterId } from "@/types/characters";

export const useCharacter = (id: CharacterId) => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.details);
  const error = useAppSelector(state => state.characters.detailsError);
  const loading = useAppSelector(state => state.characters.detailsLoading);

  const isStored = useCallback((id: CharacterId) => !!characters[id], [characters]);
  const ensureLoaded = useCallback((id: CharacterId) => {
    if (!isStored(id) && !loading) {
      dispatch(fetchCharacter(id));
    }
  }, [dispatch, isStored, loading]);

  useEffect(() => {
    ensureLoaded(id);
  }, [id, ensureLoaded]);

  const character = useMemo(() => characters[id], [characters, id]);

  return { character, error, loading };
};
export const useCharacterList = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(state => state.characters.list);
  const error = useAppSelector(state => state.characters.listError);
  const loading = useAppSelector(state => state.characters.listLoading);

  const ensureLoaded = useCallback(() => {
    if (characters.length === 0 && !loading) {
      dispatch(fetchCharacterList());
    }
  }, [characters.length, dispatch, loading]);

  useEffect(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return { characters, error, loading };
};
