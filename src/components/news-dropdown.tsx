import { type FC, useMemo } from "react";
import { Link } from "react-router";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Newspaper } from "./ui/icons";
import { Skeleton } from "./ui/skeleton";
import { ArtifactSetImage } from "./v1/artifact-set-image";
import { CharacterImage } from "./v1/character-image";
import { WeaponImage } from "./v1/weapon-image";
import Paths from "@/paths";
import { useArtifactSet } from "@/store/features/artifact-sets";
import { useCharacter } from "@/store/features/characters";
import { useWeapon } from "@/store/features/weapons";
import { type ArtifactSetId } from "@/types/artifact-sets.types";
import { type CharacterId, CharacterIds } from "@/types/characters.types";
import { type WeaponId, WeaponIds } from "@/types/weapons.types";

const artifactSetIds: ArtifactSetId[] = [];
const characterIds: CharacterId[] = [CharacterIds.SKIRK, CharacterIds.ESCOFFIER, CharacterIds.FLINS, CharacterIds.VARKA];
const weaponIds: WeaponId[] = [WeaponIds.GEST_OF_THE_MIGHTY_WOLF];

export const NewsDropdown: FC = () => {
  const artifactSetsShow = useMemo(() => artifactSetIds.length > 0, []);
  const charactersShow = useMemo(() => characterIds.length > 0, []);
  const weaponsShow = useMemo(() => weaponIds.length > 0, []);

  return (artifactSetsShow || charactersShow || weaponsShow) && (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Newspaper className="size-[1.2rem]" />
          <span className="sr-only">Новое</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {charactersShow && (
          <DropdownMenuGroup>
            {characterIds.map(characterId => (
              <CharacterDropdownMenuItem characterId={characterId} key={characterId} />
            ))}
          </DropdownMenuGroup>
        )}
        {weaponsShow && (
          <DropdownMenuGroup>
            {charactersShow && <DropdownMenuSeparator />}
            {weaponIds.map(weaponId => (
              <WeaponDropdownMenuItem key={weaponId} weaponId={weaponId} />
            ))}
          </DropdownMenuGroup>
        )}
        {artifactSetsShow && (
          <DropdownMenuGroup>
            {(charactersShow || weaponsShow) && <DropdownMenuSeparator />}
            {artifactSetIds.map(artifactSetId => (
              <ArtifactSetDropdownMenuItem artifactSetId={artifactSetId} key={artifactSetId} />
            ))}
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ArtifactSetDropdownMenuItem: FC<{ artifactSetId: ArtifactSetId }> = ({ artifactSetId }) => {
  const { artifactSet, loading } = useArtifactSet(artifactSetId);

  if (loading) {
    return (
      <DropdownMenuItem asChild>
        <Skeleton className="h-11" />
      </DropdownMenuItem>
    );
  }

  return artifactSet && (
    <DropdownMenuItem asChild>
      <Link to={Paths.ARTIFACT_SET(artifactSet.id)}>
        <ArtifactSetImage
          artifactSetId={artifactSet.id}
          artifactSetImage={artifactSet.image}
          artifactSetRarityList={artifactSet.rarityList}
          artifactSetName={artifactSet.name}
          className="size-8 rounded-sm"
        />
        {artifactSet.name}
      </Link>
    </DropdownMenuItem>
  );
};
const CharacterDropdownMenuItem: FC<{ characterId: CharacterId }> = ({ characterId }) => {
  const { character, loading } = useCharacter(characterId);

  if (loading) {
    return (
      <DropdownMenuItem asChild>
        <Skeleton className="h-11" />
      </DropdownMenuItem>
    );
  }

  return character && (
    <DropdownMenuItem asChild>
      <Link to={Paths.CHARACTER(character.id)}>
        <CharacterImage
          characterId={character.id}
          characterImage={character.image}
          characterRarity={character.rarity}
          characterName={character.name}
          className="size-8 rounded-sm"
        />
        {character.name}
      </Link>
    </DropdownMenuItem>
  );
};
const WeaponDropdownMenuItem: FC<{ weaponId: WeaponId }> = ({ weaponId }) => {
  const { weapon, loading } = useWeapon(weaponId);

  if (loading) {
    return (
      <DropdownMenuItem asChild>
        <Skeleton className="h-11" />
      </DropdownMenuItem>
    );
  }

  return weapon && (
    <DropdownMenuItem asChild>
      <Link to={Paths.WEAPON(weapon.id)}>
        <WeaponImage
          className="size-8 rounded-sm"
          weaponId={weapon.id}
          weaponImage={weapon.image}
          weaponRarity={weapon.rarity}
          weaponName={weapon.name}
        />
        {weapon.name}
      </Link>
    </DropdownMenuItem>
  );
};
