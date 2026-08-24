import { ChevronRight } from "@primeicons/react/chevron-right";
import { Home } from "@primeicons/react/home";
import { Avatar } from "@primereact/ui/avatar";
import { Breadcrumb } from "@primereact/ui/breadcrumb";
import { Card } from "@primereact/ui/card";
import { DataView } from "@primereact/ui/dataview";
import { Link } from "react-router";

import { CharacterImage } from "@/components/v1/character-image";
import { Loading, LoadingError } from "@/components/v1/loading";
import Paths from "@/paths";
import { useCharacterList } from "@/store/features/characters";
import { useElementList } from "@/store/features/elements";

export default function CharactersView() {
  const { characters, error, loading: charactersLoading } = useCharacterList();
  const { elements, loading: elementsLoading } = useElementList();

  if (charactersLoading || elementsLoading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <>
      <Breadcrumb.Root className="mb-4">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link as={Link} to={Paths.HOME}>
              <Home />
            </Breadcrumb.Link>
          </Breadcrumb.Item>

          <Breadcrumb.Separator>
            <ChevronRight />
          </Breadcrumb.Separator>

          <Breadcrumb.Item>
            <Breadcrumb.Current>Персонажи</Breadcrumb.Current>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <DataView.Root>
        <DataView.Content>
          <div className="grid grid-cols-[repeat(auto-fit,256px)] gap-4 justify-center">
            {characters.map((character, index) => {
              const element = elements.find(element => element.id === character.elementId);

              return (
                <div key={index} className="">
                  <Card.Root className="overflow-hidden">
                    <Card.Header className="relative">
                      <CharacterImage
                        characterId={character.id}
                        characterImage={character.image}
                        characterName={character.name}
                        characterRarity={character.rarity}
                        className="aspect-square object-cover w-full"
                      />

                      {element !== undefined && (
                        <Avatar.Root
                          shape="circle"
                          className="absolute -bottom-8! left-2! size-16! border-3 border-surface-0 dark:border-surface-900"
                        >
                          <Avatar.Image alt={element.name} className="p-1" draggable={false} src={element.image} />
                        </Avatar.Root>
                      )}
                    </Card.Header>

                    <Card.Body>
                      <Card.Caption>
                        <Card.Title className="font-bold! text-xl! text-center">{character.name}</Card.Title>
                        {/* <div className="flex items-center gap-2">
                          <Tag className="w-fit" severity="info">Daily</Tag>
                          <Tag className="w-fit" severity="info">Premium</Tag>
                        </div> */}
                      </Card.Caption>
                    </Card.Body>
                  </Card.Root>
                </div>
              );
            })}
          </div>
        </DataView.Content>
      </DataView.Root>
    </>
  );
}
