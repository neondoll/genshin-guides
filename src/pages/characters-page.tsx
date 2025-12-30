import type { FC } from "react";
import { Link } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Home } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { CharacterImage, type CharacterName, useCharacter, useCharactersNames } from "@/store/features/characters";
import { ElementImage } from "@/store/features/elements/components";

/* const useCharacters = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const characters = getAllCharacters();
      setCharacters(characters);
      setError(null);
    }
    catch (err) {
      setError("Ошибка загрузки данных из genshin-db");
      console.error("Genshin DB Error:", err);
    }
    finally {
      setLoading(false);
    }
  }, []);

  return { characters, error, fetchCharacters, loading };
}; */

const CharactersPage: FC = () => {
  const { charactersNames, error, loading } = useCharactersNames();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-amber-300">Загрузка данных...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-700 rounded-2xl p-6 text-center">
        <div className="text-red-300 text-lg mb-2">Ошибка загрузки</div>
        <div className="text-slate-300">{error}</div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">
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
      className={cn([
        "relative bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl",
        "transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group",
        "dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
      ])}
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="relative shrink-0 size-24.5">
          {character?.elementText && (
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
            "text-xl font-bold text-center transition-colors group-has-[a:hover]:text-amber-700",
            "dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="before:absolute before:inset-0" to={`/characters/${JSON.stringify(name)}`}>{name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default CharactersPage;
