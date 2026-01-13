import type { Talent } from "genshin-db";
import { type FC, useMemo } from "react";
import { Link, useParams } from "react-router";

import BestTooltip from "@/components/best-tooltip";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store";
import { ArtifactSetImage } from "@/store/features/artifact-sets";
import { selectCharacterRolesByIds } from "@/store/features/character-roles";
import { CharacterImage, type CharacterName, useCharacter } from "@/store/features/characters";
import {
  type CharacterArtifactSetRecommendations as ArtifactSetRecommendations,
  type CharacterDetachmentItemRecommendation as DetachmentItemRecommendation,
  type CharacterRecommendations as Recommendations,
  type CharacterTalentRecommendations as TalentRecommendations,
  type CharacterWeaponRecommendations as WeaponRecommendations,
  useCharacterRecommendations,
} from "@/store/features/characters-recommendations";
import { ElementImage } from "@/store/features/elements";
import { useTalent } from "@/store/features/talents";
import { VideoSourcesTable } from "@/store/features/video-sources";
import { WeaponImage } from "@/store/features/weapons";
import { formatPercent } from "@/utils/format";

const CharacterPage: FC = () => {
  const { characterId } = useParams();

  const characterName = useMemo(() => JSON.parse(characterId as string), [characterId]);

  const { character, error, loading } = useCharacter(characterName);

  const characteristics = useMemo(() => [
    { label: "Имя", value: characterName },
    { label: "День рождения", value: character?.birthday },
    { label: "Созвездие", value: character?.constellation },
    { label: "Титул", value: character?.title },
    { label: "Глаз Бога", value: character?.elementText },
    { label: "Группа", value: character?.affiliation },
    { label: "Версия выхода", value: character?.version },
  ], [character, characterName]);

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
            <BreadcrumbLink asChild>
              <Link to="/characters">Персонажи</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{characterName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 mb-6">
        <CharacterImage className="shrink-0 size-27 rounded-2xl rounded-br-4xl" name={characterName} />
        <div>
          <div className="flex gap-1 items-center mb-1 text-[2rem]/10.5">
            <h1>{characterName}</h1>
            {character?.elementText && character.elementText !== "Нет" && (
              <ElementImage className="shrink-0 size-7" name={character.elementText} />
            )}
          </div>
          {character?.rarity && (
            <div className="flex">
              {[...Array(character.rarity)].map((_, i) => (
                <span className="leading-none text-amber-400" key={i}>★</span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-4">
            {character?.elementText && <Badge children={character.elementText} variant="secondary" />}
            {character?.rarity && <Badge children={`${character.rarity}★`} variant="secondary" />}
            {character?.region && <Badge children={character.region} variant="secondary" />}
            {character?.substatText && <Badge children={character.substatText} variant="secondary" />}
            {character?.weaponText && <Badge children={character.weaponText} variant="secondary" />}
          </div>
        </div>
      </div>
      <Card
        className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700"
      >
        <CardHeader>
          <CardTitle className="text-xl font-bold">Характеристики</CardTitle>
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
      <CharacterRecommendations name={characterName} />
    </>
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

const CharacterRecommendations: FC<{ name: CharacterName }> = ({ name }) => {
  const { characterRecommendations } = useCharacterRecommendations(name);

  const tabs = useMemo(() => {
    const items = [];

    if (
      characterRecommendations?.constellationOrSignatureWeapon || characterRecommendations?.keyConstellations
      || characterRecommendations?.recommendedLevel || characterRecommendations?.signatureWeaponNames
    ) {
      items.push(RecommendationTabs.BASE);
    }

    items.push(RecommendationTabs.ROLES);

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
    <Card
      className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700"
    >
      <CardHeader>
        <CardTitle className="text-xl font-bold">Рекомендации по оружию, артефактам и отрядам</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs className="gap-4" defaultValue={tabs[0].value}>
          <TabsList className="flex flex-wrap gap-2 p-1 w-full h-auto bg-muted/50 rounded-2xl backdrop-blur-sm">
            {tabs.map(({ label, value }) => (
              <TabsTrigger
                className={cn([
                  "px-6 py-3 text-lg font-semibold text-muted-foreground rounded-xl border-0 transition-all",
                  "hover:text-foreground hover:bg-slate-200/70 data-[state=active]:text-foreground",
                  "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400",
                  "data-[state=active]:to-amber-200 data-[state=active]:shadow-lg dark:hover:text-foreground",
                  "dark:hover:bg-slate-700/70 dark:data-[state=active]:text-foreground",
                  "dark:data-[state=active]:bg-gradient-to-r dark:data-[state=active]:from-amber-600",
                  "dark:data-[state=active]:to-amber-800",
                ])}
                key={value}
                value={value}
              >
                {label}
              </TabsTrigger>
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
                {characterRecommendations.signatureWeaponNames && characterRecommendations.signatureWeaponNames.map((signatureWeaponName, index) => (
                  <TableRow key={signatureWeaponName}>
                    {index === 0 && (
                      <TableCell
                        className="text-base text-slate-700 dark:text-slate-300"
                        rowSpan={characterRecommendations.signatureWeaponNames?.length}
                      >
                        Сигнатурное оружие
                      </TableCell>
                    )}
                    <TableCell className="text-pretty whitespace-normal">
                      <div className="flex gap-4 justify-start items-center">
                        <WeaponImage className="size-16 rounded-md rounded-br-2xl" name={signatureWeaponName} />
                        <span>{signatureWeaponName}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
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
            <CharacterRoleRecommendations recommendations={characterRecommendations.roleIds} />
          </TabsContent>
          <TabsContent value={RecommendationTabs.TALENTS.value}>
            {characterRecommendations.talents && (
              <CharacterTalentRecommendations name={name} recommendations={characterRecommendations.talents} />
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
                      {characterRecommendations.artifacts.stats.sands.map((recommendation, index) => (
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
                      {characterRecommendations.artifacts.stats.goblet.map((recommendation, index) => (
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
                      {characterRecommendations.artifacts.stats.circlet.map((recommendation, index) => (
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
                      {characterRecommendations.artifacts.stats.additional.map((recommendation, index) => (
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
      <TabsList className="flex flex-wrap gap-2 p-1 w-full h-auto bg-muted/50 rounded-2xl backdrop-blur-sm">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger
            className={cn([
              "px-6 py-3 text-lg font-medium text-muted-foreground rounded-xl border-0 transition-all",
              "hover:text-foreground hover:bg-slate-200/70 data-[state=active]:text-foreground",
              "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400",
              "data-[state=active]:to-amber-200 data-[state=active]:shadow-lg dark:hover:text-foreground",
              "dark:hover:bg-slate-700/70 dark:data-[state=active]:text-foreground",
              "dark:data-[state=active]:bg-gradient-to-r dark:data-[state=active]:from-amber-600",
              "dark:data-[state=active]:to-amber-800",
            ])}
            key={key}
            value={key}
          >
            {key}
          </TabsTrigger>
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
  const hasBest = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.best));
  }, [recommendations]);
  const hasNotes = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.notes));
  }, [recommendations]);
  const hasPercent = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.percent));
  }, [recommendations]);

  return (
    <Table>
      <TableBody>
        {recommendations.map((recommendation) => {
          switch (recommendation.type) {
            case "combined":
              return (
                <TableRow key={`combined-${recommendation.names.join("+")}`}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="w-38">
                    <div className="flex gap-4 justify-center items-center">
                      {recommendation.names.map(name => (
                        <ArtifactSetImage
                          className="shrink-0 size-16 rounded-md rounded-br-2xl"
                          key={name}
                          name={name}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">{recommendation.names.join(" + ")}</TableCell>
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
            case "complete":
              return (
                <TableRow key={`complete-${recommendation.name}`}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="w-20">
                    <div className="flex gap-4 justify-center items-center">
                      <ArtifactSetImage
                        className="shrink-0 size-16 rounded-md rounded-br-2xl"
                        name={recommendation.name}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">{recommendation.name}</TableCell>
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
          }

          return null;
        })}
      </TableBody>
    </Table>
  );
};
const CharacterDetachmentItemRecommendation: FC<{ item: DetachmentItemRecommendation }> = ({ item }) => {
  switch (item.type) {
    case "character":
      return (
        <Card className="flex flex-col gap-1 justify-start items-center p-2">
          <CharacterImage className="shrink-0 size-16 rounded-md rounded-br-2xl" name={item.name} />
          <p className="my-auto text-center">{item.name}</p>
        </Card>
      );
    case "element":
      return (
        <Card className="flex flex-col gap-1 justify-start items-center p-2">
          <ElementImage className="shrink-0 p-2 size-16 rounded-md rounded-br-2xl" name={item.name} />
          <p className="my-auto text-center">
            {item.name}
            {" "}
            персонаж
          </p>
        </Card>
      );
    case "other":
      return (
        <Card className="flex flex-col gap-1 justify-start items-center p-2">
          <p className="my-auto text-center">{item.title}</p>
        </Card>
      );
  }
};
const CharacterDetachmentRecommendations: FC<{
  recommendations: NonNullable<Recommendations["detachments"]>;
}> = ({ recommendations }) => {
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
              <TableCell className="text-pretty whitespace-normal">{recommendation.description}</TableCell>
            )}
            <TableCell className="text-pretty whitespace-normal">
              <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*24.5))] gap-2">
                {recommendation.template.map((item, index) => (
                  <CharacterDetachmentItemRecommendation item={item} key={index} />
                ))}
              </div>
            </TableCell>
            {hasVariants && (
              <TableCell className="space-y-2 text-pretty whitespace-normal">
                {recommendation.variants?.map((variant, index) => (
                  <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*24.5))] gap-2" key={index}>
                    {variant.map((item, index) => (
                      <CharacterDetachmentItemRecommendation item={item} key={index} />
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
const CharacterRoleRecommendations: FC<{ recommendations: Recommendations["roleIds"] }> = ({ recommendations }) => {
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
const CharacterTalentRecommendations: FC<{
  name: CharacterName;
  recommendations: NonNullable<Recommendations["talents"]>;
}> = ({ name, recommendations }) => {
  const { talent } = useTalent(name);

  if (Array.isArray(recommendations)) {
    return talent && <CharacterTalentRecommendationsTable recommendations={recommendations} talent={talent} />;
  }

  const recommendationsEntries = Object.entries(recommendations);

  return talent && (
    <Tabs defaultValue={recommendationsEntries[0][0]}>
      <TabsList className="flex flex-wrap gap-2 p-1 w-full h-auto bg-muted/50 rounded-2xl backdrop-blur-sm">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger
            className={cn([
              "px-6 py-3 text-lg font-medium text-muted-foreground rounded-xl border-0 transition-all",
              "hover:text-foreground hover:bg-slate-200/70 data-[state=active]:text-foreground",
              "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400",
              "data-[state=active]:to-amber-200 data-[state=active]:shadow-lg dark:hover:text-foreground",
              "dark:hover:bg-slate-700/70 dark:data-[state=active]:text-foreground",
              "dark:data-[state=active]:bg-gradient-to-r dark:data-[state=active]:from-amber-600",
              "dark:data-[state=active]:to-amber-800",
            ])}
            key={key}
            value={key}
          >
            {key}
          </TabsTrigger>
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
  const hasReferenceLevel = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.referenceLevel));
  }, [recommendations]);

  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow key={recommendation.type}>
            <TableCell
              className="text-center text-pretty whitespace-normal"
            >
              {talent[recommendation.type].name}
            </TableCell>
            <TableCell className="text-center text-pretty whitespace-normal">{recommendation.priority}</TableCell>
            {hasReferenceLevel && (
              <TableCell
                className="text-center text-pretty whitespace-normal"
              >
                {recommendation.referenceLevel}
              </TableCell>
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
      <TabsList className="flex flex-wrap gap-2 p-1 w-full h-auto bg-muted/50 rounded-2xl backdrop-blur-sm">
        {recommendationsEntries.map(([key]) => (
          <TabsTrigger
            className={cn([
              "px-6 py-3 text-lg font-medium text-muted-foreground rounded-xl border-0 transition-all",
              "hover:text-foreground hover:bg-slate-200/70 data-[state=active]:text-foreground",
              "data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-400",
              "data-[state=active]:to-amber-200 data-[state=active]:shadow-lg dark:hover:text-foreground",
              "dark:hover:bg-slate-700/70 dark:data-[state=active]:text-foreground",
              "dark:data-[state=active]:bg-gradient-to-r dark:data-[state=active]:from-amber-600",
              "dark:data-[state=active]:to-amber-800",
            ])}
            key={key}
            value={key}
          >
            {key}
          </TabsTrigger>
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
        {recommendations.map(recommendation => (
          <TableRow
            key={
              recommendation.name
              + (recommendation.postfix ? `-(${recommendation.postfix})` : "")
              + (recommendation.r ? `-R${recommendation.r}` : "")
            }
          >
            {hasBest && (
              <TableCell className="w-16">
                <BestTooltip className="size-12" value={recommendation.best} />
              </TableCell>
            )}
            <TableCell className="w-20">
              <WeaponImage className="size-16 rounded-md rounded-br-2xl" name={recommendation.name} />
            </TableCell>
            <TableCell className="text-pretty whitespace-normal">
              {recommendation.name}
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
        ))}
      </TableBody>
    </Table>
  );
};

export default CharacterPage;
