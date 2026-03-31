import { type CSSProperties, type FC, useMemo, useState } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Funnel, Home } from "@/components/ui/icons";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { CharacterImage } from "@/components/v1/character-image";
import { ElementImage } from "@/components/v1/element-image";
import { Filter, FilterCheckbox, FilterGroup } from "@/components/v1/filter";
import { Loading, LoadingError } from "@/components/v1/loading";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useCharactersList } from "@/store/features/characters";
import { useElementList } from "@/store/features/elements";
import { useWeaponTypes } from "@/store/features/weapon-types";
import { type CharacterListItem, type CharacterRarity } from "@/types/characters.types";
import { type ElementId, type ElementListItem } from "@/types/elements.types";
import { type WeaponTypeId } from "@/types/weapon-types.types";

const RARITIES = [4, 5] as readonly CharacterRarity[];

const CharactersPage: FC = () => {
  const { characters, error, loading: charactersLoading } = useCharactersList();
  const { elements, loading: elementsLoading } = useElementList();
  const { weaponTypes } = useWeaponTypes();
  // const charactersList = createRef<HTMLDivElement>();
  const [filterElementIds, setFilterElementIds] = useState<ElementId[]>([]);
  const [filterRarities, setFilterRarities] = useState<CharacterRarity[]>([]);
  const [filterWeaponTypeIds, setFilterWeaponTypeIds] = useState<WeaponTypeId[]>([]);

  const filteredCharacters = useMemo(() => {
    let filteredCharacters = characters;

    if (filterElementIds.length) {
      filteredCharacters = filteredCharacters.filter((character) => {
        return character.elementId !== "none" && filterElementIds.includes(character.elementId);
      });
    }

    if (filterRarities.length) {
      filteredCharacters = filteredCharacters.filter((character) => {
        return filterRarities.includes(character.rarity);
      });
    }

    if (filterWeaponTypeIds.length) {
      filteredCharacters = filteredCharacters.filter((character) => {
        return filterWeaponTypeIds.includes(character.weaponTypeId);
      });
    }

    return filteredCharacters;
  }, [characters, filterElementIds, filterRarities, filterWeaponTypeIds]);

  // useEffect(() => {
  //   if (charactersList.current) {
  //     let maxWidth = 0;
  //
  //     for (let i = 0; i < charactersList.current.children.length; i++) {
  //       const item = charactersList.current.children.item(i);
  //
  //       if (item) {
  //         const width = Number(getComputedStyle(item).width.replace("px", ""));
  //
  //         console.log(width);
  //
  //         if (width > maxWidth) {
  //           maxWidth = width;
  //         }
  //       }
  //     }
  //
  //     console.log("Max width:", maxWidth);
  //   }
  // }, [charactersList]);
  // useEffect(() => {
  //   if (characters.length) {
  //     const ids: Record<string, CharacterListItem["id"]> = {};
  //
  //     Object.entries(CharacterNames).forEach(([key, name]) => {
  //       const character = characters.find(item => item.name === name);
  //
  //       if (character) {
  //         ids[key] = character.id;
  //       }
  //       else {
  //         console.error(`Character "${name}" not found`);
  //       }
  //     });
  //
  //     console.log(ids);
  //   }
  // }, [characters]);

  if (charactersLoading || elementsLoading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <>
      <Collapsible className="mb-8">
        <div className="flex gap-2 items-start mb-8">
          <Breadcrumb className="mr-auto">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={Paths.HOME}>
                    <Home className="size-5" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Персонажи</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <Funnel />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Filter>
            <FilterGroup label="Элемент">
              <div className="flex flex-wrap gap-3">
                {elements.map(element => (
                  <FilterCheckbox
                    asChild
                    checked={filterElementIds.includes(element.id)}
                    className="p-1 size-8.5 rounded-full group-has-[input:checked]:border-(--element-color)"
                    key={element.id}
                    name="elements"
                    onChange={(event) => {
                      if (event.target.checked) {
                        if (!filterElementIds.includes(element.id)) {
                          setFilterElementIds(prev => prev.concat([element.id]));
                        }
                      }
                      else {
                        const index = filterElementIds.indexOf(element.id);

                        if (index !== -1) {
                          setFilterElementIds(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                        }
                      }
                    }}
                    style={{ "--element-color": element.color } as CSSProperties}
                    value={element.id}
                  >
                    <ElementImage elementId={element.id} elementImage={element.image} elementName={element.name} />
                  </FilterCheckbox>
                ))}
              </div>
            </FilterGroup>
            <FilterGroup label="Тип">
              <div className="flex flex-wrap gap-3">
                {weaponTypes.map(weaponType => (
                  <FilterCheckbox
                    asChild
                    checked={filterWeaponTypeIds.includes(weaponType.id)}
                    className="p-1 size-8.5 rounded-full"
                    key={weaponType.id}
                    name="weapon-types"
                    onChange={(event) => {
                      if (event.target.checked) {
                        if (!filterWeaponTypeIds.includes(weaponType.id)) {
                          setFilterWeaponTypeIds(prev => prev.concat([weaponType.id]));
                        }
                      }
                      else {
                        const index = filterWeaponTypeIds.indexOf(weaponType.id);

                        if (index !== -1) {
                          setFilterWeaponTypeIds(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                        }
                      }
                    }}
                    value={weaponType.id}
                  >
                    <img alt={weaponType.name} draggable={false} src={weaponType.image} />
                  </FilterCheckbox>
                ))}
              </div>
            </FilterGroup>
            <FilterGroup label="Качество">
              <div className="flex flex-wrap gap-3">
                {RARITIES.map(rarity => (
                  <FilterCheckbox
                    checked={filterRarities.includes(rarity)}
                    className="flex justify-center items-center p-1 w-11.5 h-8.5 text-base/4"
                    key={rarity}
                    name="rarities"
                    onChange={(event) => {
                      if (event.target.checked) {
                        if (!filterRarities.includes(rarity)) {
                          setFilterRarities(prev => prev.concat([rarity]));
                        }
                      }
                      else {
                        const index = filterRarities.indexOf(rarity);

                        if (index !== -1) {
                          setFilterRarities(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                        }
                      }
                    }}
                    value={rarity}
                  >
                    {`${rarity}★`}
                  </FilterCheckbox>
                ))}
              </div>
            </FilterGroup>
          </Filter>
        </CollapsibleContent>
      </Collapsible>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 justify-center items-stretch">
        {filteredCharacters.map((character) => {
          const element = elements.find(element => element.id === character.elementId);

          return (
            <CharacterCard element={element} item={character} key={character.id} />
          );
        })}
      </div>
    </>
  );
};
const CharacterCard: FC<{ element?: ElementListItem; item: CharacterListItem }> = ({ element, item }) => {
  return (
    <Card
      className={cn([
        "relative transition-all duration-300 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
        "has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group",
      ])}
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="relative shrink-0 size-24.5">
          {element !== undefined && (
            <ElementImage
              className={cn([
                "absolute top-0 left-0 p-1 size-8.5 bg-gradient-to-br from-slate-200 to-slate-100 rounded-full border",
                "border-slate-300 -translate-1/4 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
              ])}
              elementId={element.id}
              elementImage={element.image}
              elementName={element.name}
            />
          )}
          <CharacterImage
            characterId={item.id}
            characterImage={item.image}
            characterName={item.name}
            characterRarity={item.rarity}
            className="object-cover size-full rounded-lg rounded-br-3xl"
          />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="outline-hidden before:absolute before:inset-0" to={Paths.CHARACTER(item.id)}>
            {item.name}
          </Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default CharactersPage;
