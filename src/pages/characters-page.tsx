import { type FC } from "react";
import { Link } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "@/components/ui/icons";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { CharacterImage } from "@/components/v1/character-image";
import { ElementImage } from "@/components/v1/element-image";
import { Loading, LoadingError } from "@/components/v1/loading";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useCharactersList } from "@/store/features/characters";
import { useElementList } from "@/store/features/elements";
import { type CharacterListItem } from "@/types/characters.types";
import { type ElementListItem } from "@/types/elements.types";

const CharactersPage: FC = () => {
  const { characters, error, loading: charactersLoading } = useCharactersList();
  const { elements, loading: elementsLoading } = useElementList();
  // const charactersList = createRef<HTMLDivElement>();

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
      <Breadcrumb className="mb-8">
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 justify-center items-stretch">
        {characters.map((character) => {
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
      className="relative transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group"
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
          <Link className="before:absolute before:inset-0" to={Paths.CHARACTER(item.id)}>{item.name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default CharactersPage;
