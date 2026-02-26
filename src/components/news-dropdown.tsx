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
import { ArtifactSetImage } from "./v1/artifact-set-image";
import { CharacterImage } from "./v1/character-image";
import { WeaponImage } from "./v1/weapon-image";
import Paths from "@/paths";
import { type ArtifactSetName } from "@/types/artifact-sets.types";
import { type CharacterName, CharacterNames } from "@/types/characters.types";
import { type WeaponName, WeaponNames } from "@/types/weapons.types";

const artifactSetNames: ArtifactSetName[] = [];
const characterNames: CharacterName[] = [CharacterNames.VARKA];
const weaponNames: WeaponName[] = [WeaponNames.GEST_OF_THE_MIGHTY_WOLF];

export const NewsDropdown: FC = () => {
  const artifactSetsShow = useMemo(() => artifactSetNames.length > 0, []);
  const charactersShow = useMemo(() => characterNames.length > 0, []);
  const weaponsShow = useMemo(() => weaponNames.length > 0, []);

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
            {characterNames.map(characterName => (
              <DropdownMenuItem asChild key={characterName}>
                <Link to={Paths.CHARACTER(JSON.stringify(characterName))}>
                  <CharacterImage className="size-8 rounded-sm" name={characterName} />
                  {characterName}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        )}
        {weaponsShow && (
          <DropdownMenuGroup>
            {charactersShow && <DropdownMenuSeparator />}
            {weaponNames.map(weaponName => (
              <DropdownMenuItem asChild key={weaponName}>
                <Link to={Paths.WEAPON(JSON.stringify(weaponName))}>
                  <WeaponImage className="size-8 rounded-sm" name={weaponName} />
                  {weaponName}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        )}
        {artifactSetsShow && (
          <DropdownMenuGroup>
            {(charactersShow || weaponsShow) && <DropdownMenuSeparator />}
            {artifactSetNames.map(artifactSetName => (
              <DropdownMenuItem asChild key={artifactSetName}>
                <Link to={Paths.ARTIFACT_SET(JSON.stringify(artifactSetName))}>
                  <ArtifactSetImage className="size-8 rounded-sm" name={artifactSetName} />
                  {artifactSetName}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
