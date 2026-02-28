import { type FC, useMemo } from "react";
import { Link, useParams } from "react-router";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card as UiCard } from "@/components/ui/card";
import { Home } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArtifactSetImage } from "@/components/v1/artifact-set-image";
import { BestTooltip } from "@/components/v1/best-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v1/card";
import { CharacterImage } from "@/components/v1/character-image";
import { ElementImage, ElementImageLoading } from "@/components/v1/element-image";
import { Loading, LoadingError } from "@/components/v1/loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/v1/tabs";
import { VideoSourcesTable } from "@/components/v1/video-sources-table";
import { WeaponImage } from "@/components/v1/weapon-image";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSetList } from "@/store/features/artifact-sets";
import { selectCharacterRolesByIds } from "@/store/features/character-roles";
import { useCharacter, useCharactersList } from "@/store/features/characters";
import { useCharacterRecommendations } from "@/store/features/characters-recommendations";
import { useElementList } from "@/store/features/elements";
import { useTalent } from "@/store/features/talents";
import { useWeaponList } from "@/store/features/weapons";
import { useAppSelector } from "@/store/hooks";
import { type CharacterId, type CharacterListItem, type TravelerId, TravelerIdArray } from "@/types/characters.types";
import {
  type CharacterArtifactSetRecommendations as ArtifactSetRecommendations,
  type CharacterArtifactStatRecommendation as ArtifactStatRecommendation,
  type CharacterDetachmentItemRecommendation as DetachmentItemRecommendation,
  type CharacterRecommendations as Recommendations,
  type CharacterRecommendationsId as RecommendationsId,
  type CharacterTalentRecommendations as TalentRecommendations,
  type CharacterWeaponRecommendations as WeaponRecommendations,
} from "@/types/characters-recommendations.types";
import { type Talent, type TalentId } from "@/types/talents.types";
import { type WeaponId, type WeaponListItem } from "@/types/weapons.types";
import { formatPercent } from "@/utils/format";
import type { ArtifactSetListItem } from "@/types/artifact-sets.types.ts";
import type { ElementListItem } from "@/types/elements.types.ts";

const CharacterPage: FC = () => {
  const { characterId } = useParams<{ characterId: CharacterId }>();
  const { character, error, loading } = useCharacter(characterId!);

  const characteristics = useMemo(() => [
    { label: "Имя", value: character?.name },
    { label: "День рождения", value: character?.birthday },
    { label: "Созвездие", value: character?.constellation },
    { label: "Титул", value: character?.title },
    { label: "Глаз Бога", value: character?.elementText },
    { label: "Группа", value: character?.affiliation },
    { label: "Версия выхода", value: character?.version },
  ], [character]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return character && (
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
            <BreadcrumbLink asChild>
              <Link to={Paths.CHARACTERS}>Персонажи</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{character.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 mb-6">
        <CharacterImage
          characterId={character.id}
          characterImage={character.image}
          characterName={character.name}
          characterRarity={character.rarity}
          className="shrink-0 size-27 rounded-2xl rounded-br-4xl"
        />
        <div>
          <div className="flex gap-1 items-center mb-1 text-[2rem]/10.5">
            <h1>{character.name}</h1>
            {character.elementId !== "none" && (
              <ElementImageLoading className="shrink-0 size-7" elementId={character.elementId} />
            )}
          </div>
          {character.rarity && (
            <div className="flex">
              {[...Array(character.rarity)].map((_, i) => (
                <span className="leading-none text-amber-400" key={i}>★</span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-4">
            {character.elementText && <Badge children={character.elementText} variant="secondary" />}
            {character.rarity && <Badge children={`${character.rarity}★`} variant="secondary" />}
            {character.region && <Badge children={character.region} variant="secondary" />}
            {character.substatText && <Badge children={character.substatText} variant="secondary" />}
            {character.weaponText && <Badge children={character.weaponText} variant="secondary" />}
          </div>
        </div>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Характеристики</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-flow-row-dense gap-x-6 gap-y-2 md:grid-cols-2">
          {characteristics.map(({ label, value }) => {
            return value && (
              <p className="text-base" key={label}>
                <span className="text-slate-700 dark:text-slate-300">{`${label}: `}</span>
                {value}
              </p>
            );
          })}
        </CardContent>
      </Card>
      {TravelerIdArray.includes(character.id as TravelerId)
        ? <TravelerRecommendations travelerId={character.id as TravelerId} />
        : <CharacterRecommendations recommendationsId={character.id as RecommendationsId} />}
    </>
  );
};

const TravelerRecommendations: FC<{ travelerId: TravelerId }> = ({ travelerId }) => {
  const { elements, loading } = useElementList();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-11">
        <div className="text-xl text-amber-300">Загрузка элементов...</div>
      </div>
    );
  }

  return (
    <Tabs className="gap-6" defaultValue={elements[0].id}>
      <TabsList className="flex w-full">
        {elements.map(element => (
          <TabsTrigger className="font-bold" key={element.id} value={element.id}>
            <ElementImage
              className="shrink-0 size-7"
              elementId={element.id}
              elementImage={element.image}
              elementName={element.name}
            />
            {element.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {elements.map(element => (
        <TabsContent key={element.id} value={element.id}>
          <CharacterRecommendations characterId={travelerId} recommendationsId={`traveler_${element.id}`} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

const RecommendationTabs = {
  ARTIFACTS: { label: "Артефакты", value: "artifacts" },
  BASE: { label: "Базовые", value: "base" },
  DETACHMENTS: { label: "Отряды", value: "detachments" },
  ROLES: { label: "Роли", value: "roles" },
  TALENTS: { label: "Таланты", value: "talents" },
  VIDEO_SOURCES: { label: "Видео-источники", value: "video-sources" },
  WEAPONS: { label: "Оружие", value: "weapons" },
} as const;

const CharacterRecommendations: FC<{
  characterId?: CharacterId;
  recommendationsId: RecommendationsId;
}> = ({ recommendationsId }) => {
  const { characterRecommendations } = useCharacterRecommendations(recommendationsId);

  const tabs = useMemo(() => {
    const items = [];

    if (
      characterRecommendations?.constellationOrSignatureWeapon || characterRecommendations?.keyConstellations
      || characterRecommendations?.recommendedLevel || characterRecommendations?.signatureWeaponIds
    ) {
      items.push(RecommendationTabs.BASE);
    }

    if (characterRecommendations?.roleIds) {
      items.push(RecommendationTabs.ROLES);
    }

    if (characterRecommendations?.talents) {
      items.push(RecommendationTabs.TALENTS);
    }

    if (characterRecommendations?.weapons) {
      items.push(RecommendationTabs.WEAPONS);
    }

    if (characterRecommendations?.artifacts) {
      items.push(RecommendationTabs.ARTIFACTS);
    }

    if (characterRecommendations?.detachments) {
      items.push(RecommendationTabs.DETACHMENTS);
    }

    if (characterRecommendations?.videoSourceIds) {
      items.push(RecommendationTabs.VIDEO_SOURCES);
    }

    return items;
  }, [characterRecommendations]);

  return characterRecommendations && (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Рекомендации по оружию, артефактам и отрядам</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs className="gap-4" defaultValue={tabs[0].value}>
          <TabsList className="flex flex-wrap w-full">
            {tabs.map(({ label, value }) => (
              <TabsTrigger className="font-semibold" key={value} value={value}>{label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={RecommendationTabs.BASE.value}>
            <Table>
              <TableBody>
                {characterRecommendations.recommendedLevel && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">
                      Рекомендованный уровень
                    </TableCell>
                    <TableCell
                      className="text-pretty whitespace-normal"
                    >
                      {characterRecommendations.recommendedLevel}
                    </TableCell>
                  </TableRow>
                )}
                {characterRecommendations.keyConstellations && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">Ключевые созвездия</TableCell>
                    <TableCell className="text-pretty whitespace-normal">
                      {characterRecommendations.keyConstellations.join(", ")}
                    </TableCell>
                  </TableRow>
                )}
                {characterRecommendations.signatureWeaponIds && (
                  <CharacterSignatureWeaponTableRows signatureWeaponIds={characterRecommendations.signatureWeaponIds} />
                )}
                {characterRecommendations.constellationOrSignatureWeapon && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">Сигна или Созвездия?</TableCell>
                    <TableCell className="text-pretty whitespace-pre-line">
                      {characterRecommendations.constellationOrSignatureWeapon}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value={RecommendationTabs.ROLES.value}>
            {characterRecommendations.roleIds && (
              <CharacterRoleRecommendations recommendations={characterRecommendations.roleIds} />
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.TALENTS.value}>
            {characterRecommendations.talents && (
              <CharacterTalentRecommendations
                recommendations={characterRecommendations.talents}
                talentId={recommendationsId}
              />
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.WEAPONS.value}>
            {characterRecommendations.weapons && (
              <CharacterWeaponRecommendations recommendations={characterRecommendations.weapons} />
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.ARTIFACTS.value}>
            {characterRecommendations.artifacts && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Наборы</p>
                  <CharacterArtifactSetRecommendations recommendations={characterRecommendations.artifacts.sets} />
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Характеристики</p>
                  <Table>
                    <TableBody>
                      {characterRecommendations.artifacts.stats.sands.map((recommendation: ArtifactStatRecommendation, index: number) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={characterRecommendations.artifacts?.stats.sands.length}
                            >
                              Часы
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell className="whitespace-normal">
                            {recommendation.notes && (
                              <ul className="pl-5 list-outside list-disc">
                                {recommendation.notes.map((note, index) => (
                                  <li className="text-pretty" key={index}>{note}</li>
                                ))}
                              </ul>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      {characterRecommendations.artifacts.stats.goblet.map((recommendation: ArtifactStatRecommendation, index: number) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={characterRecommendations.artifacts?.stats.goblet.length}
                            >
                              Кубок
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell className="whitespace-normal">
                            {recommendation.notes && (
                              <ul className="pl-5 list-outside list-disc">
                                {recommendation.notes.map((note, index) => (
                                  <li className="text-pretty" key={index}>{note}</li>
                                ))}
                              </ul>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      {characterRecommendations.artifacts.stats.circlet.map((recommendation: ArtifactStatRecommendation, index: number) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={characterRecommendations.artifacts?.stats.circlet.length}
                            >
                              Корона
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell className="whitespace-normal">
                            {recommendation.notes && (
                              <ul className="pl-5 list-outside list-disc">
                                {recommendation.notes.map((note, index) => (
                                  <li className="text-pretty" key={index}>{note}</li>
                                ))}
                              </ul>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                      {characterRecommendations.artifacts.stats.additional.map((recommendation: ArtifactStatRecommendation, index: number) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={characterRecommendations.artifacts?.stats.additional.length}
                            >
                              Доп.
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell className="whitespace-normal">
                            {recommendation.notes && (
                              <ul className="pl-5 list-outside list-disc">
                                {recommendation.notes.map((note, index) => (
                                  <li className="text-pretty" key={index}>{note}</li>
                                ))}
                              </ul>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.DETACHMENTS.value}>
            {characterRecommendations.detachments && (
              <CharacterDetachmentRecommendations recommendations={characterRecommendations.detachments} />
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.VIDEO_SOURCES.value}>
            {characterRecommendations.videoSourceIds && (
              <VideoSourcesTable videoSourceIds={characterRecommendations.videoSourceIds} />
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
const CharacterArtifactSetRecommendations: FC<{
  recommendations: NonNullable<Recommendations["artifacts"]>["sets"];
}> = ({ recommendations }) => {
  if (Array.isArray(recommendations)) {
    return <CharacterArtifactSetRecommendationsTable recommendations={recommendations} />;
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <CharacterArtifactSetRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
const CharacterArtifactSetRecommendationsTable: FC<{
  recommendations: ArtifactSetRecommendations;
}> = ({ recommendations }) => {
  const { artifactSets, loading } = useArtifactSetList();

  const hasBest = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.best));
  }, [recommendations]);
  const hasNotes = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.notes));
  }, [recommendations]);
  const hasPercent = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.percent));
  }, [recommendations]);

  if (loading) {
    return (
      <Skeleton />
    );
  }

  return (
    <Table>
      <TableBody>
        {recommendations.map((recommendation) => {
          const combinedArtifactSets = artifactSets.filter(artifactSet => recommendation.ids.includes(artifactSet.id));

          return (
            <TableRow key={recommendation.ids.join("+")}>
              {hasBest && (
                <TableCell className="w-16">
                  <BestTooltip className="size-12" value={recommendation.best} />
                </TableCell>
              )}
              <TableCell className="w-20">
                <div
                  className="grid size-16"
                  style={{ gridTemplateColumns: `repeat(${combinedArtifactSets.length}, minmax(0, 1fr))` }}
                >
                  {combinedArtifactSets.map((combinedArtifactSet, index) => (
                    <ArtifactSetImage
                      artifactSetId={combinedArtifactSet.id}
                      artifactSetImage={combinedArtifactSet.image}
                      artifactSetName={combinedArtifactSet.name}
                      artifactSetRarityList={combinedArtifactSet.rarityList}
                      className="aspect-square"
                      key={combinedArtifactSet.id}
                      style={{
                        borderTopLeftRadius: `calc(var(--radius-md, 6px) / ${combinedArtifactSets.length})`,
                        borderTopRightRadius: `calc(var(--radius-md, 6px) / ${combinedArtifactSets.length})`,
                        borderBottomLeftRadius: `calc(var(--radius-md, 6px) / ${combinedArtifactSets.length})`,
                        borderBottomRightRadius: `calc(var(--radius-2xl, 16px) / ${combinedArtifactSets.length})`,
                        gridColumnEnd: index + 2,
                        gridColumnStart: index + 1,
                        gridRowEnd: index + 2,
                        gridRowStart: index + 1,
                      }}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-pretty whitespace-normal">
                {combinedArtifactSets.map(combinedArtifactSet => combinedArtifactSet.name).join(" + ")}
              </TableCell>
              {hasPercent && (
                <TableCell
                  className={cn("text-center", recommendation.percent && {
                    "text-green-500": recommendation.percent >= 1.02,
                    "text-yellow-500": recommendation.percent >= 0.98 && recommendation.percent < 1.02,
                    "text-red-500": recommendation.percent < 0.98,
                  })}
                >
                  {recommendation.percent ? formatPercent(recommendation.percent, { minimumFractionDigits: 2 }) : ""}
                </TableCell>
              )}
              {hasNotes && (
                <TableCell className="whitespace-normal">
                  {recommendation.notes && (
                    <ul className="pl-5 list-outside list-disc">
                      {recommendation.notes.map((note, index) => (
                        <li className="text-pretty" key={index}>{note}</li>
                      ))}
                    </ul>
                  )}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
const CharacterDetachmentRecommendations: FC<{
  recommendations: NonNullable<Recommendations["detachments"]>;
}> = ({ recommendations }) => {
  const { artifactSets } = useArtifactSetList();
  const { characters } = useCharactersList();
  const { elements } = useElementList();
  const { weapons } = useWeaponList();

  const hasBest = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.best));
  }, [recommendations]);
  const hasDescription = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.description));
  }, [recommendations]);
  const hasVariants = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.variants));
  }, [recommendations]);

  return (
    <Table>
      <TableBody>
        {recommendations.map((recommendation, index) => (
          <TableRow key={index}>
            {hasBest && (
              <TableCell className="w-16">
                <BestTooltip className="size-12" value={recommendation.best} />
              </TableCell>
            )}
            {hasDescription && (
              <TableCell className="text-center text-pretty whitespace-normal">{recommendation.description}</TableCell>
            )}
            <TableCell className="text-pretty whitespace-normal">
              <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*26))] gap-2">
                {recommendation.template.map((item, index) => (
                  <CharacterDetachmentItemRecommendation
                    artifactSets={artifactSets}
                    characters={characters}
                    elements={elements}
                    item={item}
                    key={index}
                    weapons={weapons}
                  />
                ))}
              </div>
            </TableCell>
            {hasVariants && (
              <TableCell className="space-y-2 text-pretty whitespace-normal">
                {recommendation.variants?.map((variant, index) => (
                  <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*26))] gap-2" key={index}>
                    {variant.map((item, index) => (
                      <CharacterDetachmentItemRecommendation
                        artifactSets={artifactSets}
                        characters={characters}
                        elements={elements}
                        item={item}
                        key={index}
                        weapons={weapons}
                      />
                    ))}
                  </div>
                ))}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const CharacterDetachmentItemRecommendation: FC<{
  artifactSets: ArtifactSetListItem[];
  characters: CharacterListItem[];
  elements: ElementListItem[];
  item: DetachmentItemRecommendation;
  weapons: WeaponListItem[];
}> = ({ artifactSets: artifactSetsProp, characters, elements, item, weapons }) => {
  switch (item.type) {
    case "character": {
      const artifactSets = artifactSetsProp.filter(artifactSet => item.artifactSetIds?.includes(artifactSet.id));
      const character = characters.find(character => character.id === item.id);
      const weapon = weapons.find(weapon => weapon.id === item.weaponId);

      return (
        <UiCard className="flex relative flex-col gap-1 justify-start items-center p-2">
          <div className="shrink-0 size-21.5">
            {character && (
              <CharacterImage
                characterId={character.id}
                characterImage={character.image}
                characterName={character.name}
                characterRarity={character.rarity}
                className="size-full rounded-md rounded-br-2xl"
              />
            )}
          </div>
          <p className="my-auto text-center">{character?.name}</p>
          {item.c !== undefined && (
            <span className="absolute top-2 left-2 p-1 text-sm/none text-center bg-card/60 rounded-tl-md rounded-br-md">
              {`С${item.c}`}
            </span>
          )}
          {(weapon || artifactSets.length > 0) && (
            <div className="grid grid-cols-2 gap-1 items-center my-auto">
              {weapon
                ? (
                    <div className="aspect-square relative">
                      <WeaponImage
                        className="rounded-sm"
                        weaponId={weapon.id}
                        weaponImage={weapon.image}
                        weaponName={weapon.name}
                        weaponRarity={weapon.rarity}
                      />
                      {item.weaponR !== undefined && (
                        <span
                          className={cn([
                            "absolute top-0 left-0 p-0.75 text-xs/none text-center bg-card/60 rounded-tl-sm",
                            "rounded-br-sm",
                          ])}
                        >
                          {`Р${item.weaponR}`}
                        </span>
                      )}
                    </div>
                  )
                : <span />}
              {artifactSets.length > 0
                ? (
                    <div
                      className="grid"
                      style={{ gridTemplateColumns: `repeat(${artifactSets.length},minmax(0,1fr))` }}
                    >
                      {artifactSets.map((artifactSet, index) => (
                        <ArtifactSetImage
                          artifactSetId={artifactSet.id}
                          artifactSetImage={artifactSet.image}
                          artifactSetName={artifactSet.name}
                          artifactSetRarityList={artifactSet.rarityList}
                          className="aspect-square rounded-sm"
                          key={artifactSet.id}
                          style={{
                            gridColumnEnd: index + 2,
                            gridColumnStart: index + 1,
                            gridRowEnd: index + 2,
                            gridRowStart: index + 1,
                          }}
                        />
                      ))}
                    </div>
                  )
                : <span />}
            </div>
          )}
        </UiCard>
      );
    }
    case "element": {
      const element = elements.find(element => element.id === item.id);

      return (
        <UiCard className="flex flex-col gap-1 justify-start items-center p-2">
          <div className="shrink-0 p-2 size-21.5">
            {element && (
              <ElementImage
                className="size-full rounded-md rounded-br-2xl"
                elementId={element.id}
                elementImage={element.image}
                elementName={element.name}
              />
            )}
          </div>
          <p className="my-auto text-center">{`${element?.name ?? item.id} персонаж`}</p>
        </UiCard>
      );
    }
    case "other":
      return (
        <UiCard className="flex flex-col gap-1 justify-start items-center p-2">
          <p className="my-auto text-center">{item.title}</p>
        </UiCard>
      );
  }
};
const CharacterRoleRecommendations: FC<{
  recommendations: NonNullable<Recommendations["roleIds"]>;
}> = ({ recommendations }) => {
  const characterRoles = useAppSelector(state => selectCharacterRolesByIds(state, recommendations));

  return (
    <Table>
      <TableBody>
        {characterRoles.map(characterRole => (
          <TableRow key={characterRole.id}>
            <TableCell className="w-14">
              <img alt={characterRole.name} className="aspect-square size-10" src={characterRole.image} />
            </TableCell>
            <TableCell className="text-pretty whitespace-normal">{characterRole.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const CharacterSignatureWeaponTableRows: FC<{ signatureWeaponIds: WeaponId[] }> = ({ signatureWeaponIds }) => {
  const { weapons } = useWeaponList();

  const signatureWeapons = useMemo(() => {
    return weapons.filter(weapon => signatureWeaponIds.includes(weapon.id));
  }, [signatureWeaponIds, weapons]);

  return (
    <>
      {signatureWeapons.map((signatureWeapon, index) => (
        <TableRow key={signatureWeapon.id}>
          {index === 0 && (
            <TableCell className="text-base text-slate-700 dark:text-slate-300" rowSpan={signatureWeapons.length}>
              Сигнатурное оружие
            </TableCell>
          )}
          <TableCell className="text-pretty whitespace-normal">
            <div className="flex gap-4 justify-start items-center">
              <WeaponImage
                className="size-16 rounded-md rounded-br-2xl"
                weaponId={signatureWeapon.id}
                weaponImage={signatureWeapon.image}
                weaponName={signatureWeapon.name}
                weaponRarity={signatureWeapon.rarity}
              />
              <span>{signatureWeapon.name}</span>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
const CharacterTalentRecommendations: FC<{
  recommendations: NonNullable<Recommendations["talents"]>;
  talentId: TalentId;
}> = ({ recommendations, talentId }) => {
  const { talent } = useTalent(talentId);

  if (Array.isArray(recommendations)) {
    return talent && (
      <CharacterTalentRecommendationsTable recommendations={recommendations} talent={talent} />
    );
  }

  const recommendationsEntries = Object.entries(recommendations);

  return talent && (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <CharacterTalentRecommendationsTable recommendations={recommendations} talent={talent} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
const CharacterTalentRecommendationsTable: FC<{
  recommendations: TalentRecommendations;
  talent: Talent;
}> = ({ recommendations, talent }) => {
  const hasOverallLevel = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.overallLevel));
  }, [recommendations]);
  const hasRecommendedLevel = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.recommendedLevel));
  }, [recommendations]);
  const hasReferenceLevel = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.referenceLevel));
  }, [recommendations]);

  return (
    <Table className="table-fixed">
      {(hasOverallLevel || hasRecommendedLevel) && (
        <TableHeader>
          <TableRow>
            <TableHead className="text-base text-center text-slate-700 dark:text-slate-300" />
            <TableHead className="text-base text-center text-slate-700 dark:text-slate-300">Приоритет</TableHead>
            {hasReferenceLevel && <TableHead className="text-base text-center text-slate-700 dark:text-slate-300" />}
            {hasRecommendedLevel && (
              <TableHead className="text-base text-center text-slate-700 dark:text-slate-300">Рекомендация</TableHead>
            )}
            {hasOverallLevel && (
              <TableHead className="text-base text-center text-slate-700 dark:text-slate-300">
                В целом по игре
              </TableHead>
            )}
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow key={recommendation.type}>
            <TableCell className="text-center text-pretty whitespace-normal">
              {talent[recommendation.type]}
            </TableCell>
            <TableCell className="text-center text-pretty whitespace-normal">{recommendation.priority}</TableCell>
            {hasReferenceLevel && (
              <TableCell className="text-center text-pretty whitespace-normal">
                {recommendation.referenceLevel}
              </TableCell>
            )}
            {hasRecommendedLevel && (
              <TableCell className="text-center text-pretty whitespace-normal">
                {recommendation.recommendedLevel}
              </TableCell>
            )}
            {hasOverallLevel && (
              <TableCell className="text-center text-pretty whitespace-normal">{recommendation.overallLevel}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const CharacterWeaponRecommendations: FC<{
  recommendations: NonNullable<Recommendations["weapons"]>;
}> = ({ recommendations }) => {
  if (Array.isArray(recommendations)) {
    return <CharacterWeaponRecommendationsTable recommendations={recommendations} />;
  }

  const recommendationsEntries = Object.entries(recommendations);

  return (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap w-full">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger key={key} value={key}>{key}</TabsTrigger>
        ))}
      </TabsList>
      {recommendationsEntries.map(([key, recommendations]) => (
        <TabsContent key={key} value={key}>
          <CharacterWeaponRecommendationsTable recommendations={recommendations} />
        </TabsContent>
      ))}
    </Tabs>
  );
};
const CharacterWeaponRecommendationsTable: FC<{ recommendations: WeaponRecommendations }> = ({ recommendations }) => {
  const { weapons } = useWeaponList();

  const hasBest = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.best));
  }, [recommendations]);
  const hasNotes = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.notes));
  }, [recommendations]);
  const hasR = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.r));
  }, [recommendations]);
  const hasPercent = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.percent));
  }, [recommendations]);

  return (
    <Table>
      <TableBody>
        {recommendations.map((recommendation) => {
          const weapon = weapons.find(weapon => weapon.id === recommendation.id);

          return (
            <TableRow key={recommendation.id + (recommendation.postfix && `-(${recommendation.postfix})`) + (recommendation.r && `-R${recommendation.r}`)}>
              {hasBest && (
                <TableCell className="w-16">
                  <BestTooltip className="size-12" value={recommendation.best} />
                </TableCell>
              )}
              <TableCell className="w-20">
                {weapon && (
                  <WeaponImage
                    className="size-16 rounded-md rounded-br-2xl"
                    weaponId={weapon.id}
                    weaponImage={weapon.image}
                    weaponName={weapon.name}
                    weaponRarity={weapon.rarity}
                  />
                )}
              </TableCell>
              <TableCell className="text-pretty whitespace-normal">
                {weapon?.name}
                {recommendation.postfix && (
                  <>
                    {" "}
                    <span className="relative -bottom-[0.25em] text-[75%]/0 align-baseline">
                      {`(${recommendation.postfix})`}
                    </span>
                  </>
                )}
              </TableCell>
              {hasR && <TableCell className="text-center">{recommendation.r ? `R${recommendation.r}` : ""}</TableCell>}
              {hasPercent && (
                <TableCell
                  className={cn("text-center", recommendation.percent && {
                    "text-green-500": recommendation.percent >= 1.02,
                    "text-yellow-500": recommendation.percent >= 0.98 && recommendation.percent < 1.02,
                    "text-red-500": recommendation.percent < 0.98,
                  })}
                >
                  {recommendation.percent ? formatPercent(recommendation.percent, { minimumFractionDigits: 2 }) : ""}
                </TableCell>
              )}
              {hasNotes && (
                <TableCell className="whitespace-normal">
                  {recommendation.notes && (
                    <ul className="pl-5 list-outside list-disc">
                      {recommendation.notes.map((note, index) => (
                        <li className="text-pretty" key={index}>{note}</li>
                      ))}
                    </ul>
                  )}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CharacterPage;
