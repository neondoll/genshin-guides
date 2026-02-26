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
import { useCharacter, useCharactersNames } from "@/store/features/characters";
import { type CharacterName } from "@/types/characters.types";

const CharactersPage: FC = () => {
  const { charactersNames, error, loading } = useCharactersNames();
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

  if (loading) {
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
        {charactersNames.map(characterName => (
          <CharacterCard key={characterName} name={characterName} />
        ))}
      </div>
    </>
  );
};
const CharacterCard: FC<{ name: CharacterName }> = ({ name }) => {
  const { character } = useCharacter(name);

  return (
    <Card
      className="relative transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group"
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="relative shrink-0 size-24.5">
          {character?.elementText && character.elementText !== "Нет" && (
            <ElementImage
              className={cn([
                "absolute top-0 left-0 p-1 size-8.5 bg-gradient-to-br from-slate-200 to-slate-100 rounded-full border",
                "border-slate-300 -translate-1/4 dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
              ])}
              name={character.elementText}
            />
          )}
          <CharacterImage className="object-cover size-full rounded-lg rounded-br-3xl" name={name} />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="before:absolute before:inset-0" to={Paths.CHARACTER(JSON.stringify(name))}>{name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default CharactersPage;
