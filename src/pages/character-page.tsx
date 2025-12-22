import type { Talent } from "genshin-db";
import { type FC, useMemo } from "react";
import { Link, useParams } from "react-router";

import type { CharacterName } from "@/types/base.types";
import type {
  CharacterArtifactSetRecommendations as ArtifactSetRecommendations,
  CharacterRecommendations as Recommendations,
  CharacterTalentRecommendations as TalentRecommendations,
  CharacterWeaponRecommendations as WeaponRecommendations,
} from "@/types/recommendations.types";
import { ArtifactSetImage } from "@/store/features/artifact-sets/components";
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
import { CharacterImage } from "@/store/features/characters/components";
import { cn } from "@/lib/utils";
import { ElementImage } from "@/store/features/elements/components";
import { formatPercent } from "@/utils/format";
import { Home } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCharacter } from "@/store/features/characters/hooks";
import { useTalent } from "@/store/features/talents/hooks";
import { WeaponImage } from "@/store/features/weapons/components";
import BestTooltip from "@/components/best-tooltip";
import characterRoles from "@/data/character-roles";
import charactersRecommendations from "@/data/characters-recommendations";

const CharacterPage: FC = () => {
  const { characterId } = useParams();

  const characterName = useMemo(() => JSON.parse(characterId as string), [characterId]);

  const { character, error, loading } = useCharacter(characterName);
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
            <h1>{character?.name}</h1>
            {character?.elementText && (
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
      <Card className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
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
      <img alt="card" src={character?.images.card} />
      <img alt="portrait" src={character?.images.portrait} />
      <img alt="mihoyo_icon" src={character?.images.mihoyo_icon} />
      <img alt="mihoyo_sideIcon" src={character?.images.mihoyo_sideIcon} />
      <img alt="cover1" src={character?.images.cover1} />
      <img alt="cover2" src={character?.images.cover2} />
      <img alt="hoyolab-avatar" src={character?.images["hoyolab-avatar"]} />
    </>
  );
};

const RecommendationTabs = {
  ARTIFACTS: { label: "Артефакты", value: "artifacts" },
  BASE: { label: "Базовые", value: "base" },
  ROLES: { label: "Роли", value: "roles" },
  TALENTS: { label: "Таланты", value: "talents" },
  WEAPONS: { label: "Оружие", value: "weapons" },
} as const;

const CharacterRecommendations: FC<{ name: CharacterName }> = ({ name }) => {
  const recommendations = useMemo(() => charactersRecommendations[name], [name]);
  const tabs = useMemo(() => {
    const items = [];

    if (
      recommendations?.constellationOrSignatureWeapon || recommendations?.keyConstellations
      || recommendations?.recommendedLevel || recommendations?.signatureWeaponNames
    ) {
      items.push(RecommendationTabs.BASE);
    }

    items.push(RecommendationTabs.ROLES);
    items.push(RecommendationTabs.TALENTS);
    items.push(RecommendationTabs.WEAPONS);

    if (recommendations?.artifacts) {
      items.push(RecommendationTabs.ARTIFACTS);
    }

    return items;
  }, [recommendations]);

  return recommendations && (
    <Card className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
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
                {recommendations.recommendedLevel && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">
                      Рекомендованный уровень
                    </TableCell>
                    <TableCell className="text-pretty whitespace-normal">{recommendations.recommendedLevel}</TableCell>
                  </TableRow>
                )}
                {recommendations.keyConstellations && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">Ключевые созвездия</TableCell>
                    <TableCell className="text-pretty whitespace-normal">
                      {recommendations.keyConstellations.join(", ")}
                    </TableCell>
                  </TableRow>
                )}
                {recommendations.signatureWeaponNames && recommendations.signatureWeaponNames.map((signatureWeaponName, index) => (
                  <TableRow>
                    {index === 0 && (
                      <TableCell
                        className="text-base text-slate-700 dark:text-slate-300"
                        rowSpan={recommendations.signatureWeaponNames?.length}
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
                {recommendations.constellationOrSignatureWeapon && (
                  <TableRow>
                    <TableCell className="text-base text-slate-700 dark:text-slate-300">C1 или Сигна?</TableCell>
                    <TableCell className="text-pretty whitespace-normal">
                      {recommendations.constellationOrSignatureWeapon}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value={RecommendationTabs.ROLES.value}>
            <Table>
              <TableBody>
                {recommendations.roleIds.map((roleId) => {
                  const role = characterRoles[roleId];

                  return (
                    <TableRow key={roleId}>
                      <TableCell className="w-14">
                        <img alt={role.name} className="aspect-square size-10" src={role.image} />
                      </TableCell>
                      <TableCell className="text-pretty whitespace-normal">{role.description}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value={RecommendationTabs.TALENTS.value}>
            <CharacterTalentRecommendations name={name} recommendations={recommendations.talents} />
          </TabsContent>
          <TabsContent value={RecommendationTabs.WEAPONS.value}>
            <CharacterWeaponRecommendations recommendations={recommendations.weapons} />
          </TabsContent>
          <TabsContent value={RecommendationTabs.ARTIFACTS.value}>
            {recommendations.artifacts && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Наборы</p>
                  <CharacterArtifactSetRecommendations recommendations={recommendations.artifacts.sets} />
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Характеристики</p>
                  <Table>
                    <TableBody>
                      {recommendations.artifacts.stats.sands.map((recommendation, index) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={recommendations.artifacts?.stats.sands.length}
                            >
                              Часы
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell>
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
                      {recommendations.artifacts.stats.goblet.map((recommendation, index) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={recommendations.artifacts?.stats.goblet.length}
                            >
                              Кубок
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell>
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
                      {recommendations.artifacts.stats.circlet.map((recommendation, index) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={recommendations.artifacts?.stats.circlet.length}
                            >
                              Корона
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell>
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
                      {recommendations.artifacts.stats.additional.map((recommendation, index) => (
                        <TableRow key={recommendation.name}>
                          {index === 0 && (
                            <TableCell
                              className="text-base text-slate-700 dark:text-slate-300"
                              rowSpan={recommendations.artifacts?.stats.additional.length}
                            >
                              Доп.
                            </TableCell>
                          )}
                          <TableCell className="text-pretty">{recommendation.name}</TableCell>
                          <TableCell>
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
        </Tabs>
        {/* <div className="flex gap-x-6 items-center">
          <p className="text-lg text-slate-700 dark:text-slate-300">Роли</p>
          <div className="space-y-2">
            {recommendations.roleIds.map((roleId) => {
              const role = characterRoles[roleId];

              return (
                <div className="flex gap-x-6 items-center" key={roleId}>
                  <img alt={role.name} className="shrink-0 size-16" src={role.image} />
                  <p className="text-base text-pretty">{role.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <p className="text-lg text-slate-700 dark:text-slate-300">Таланты</p>
          <CharacterTalentRecommendations name={name} recommendations={recommendations.talent} />
        </div>
        <div className="flex gap-x-6 items-center">
          <p className="text-lg text-slate-700 dark:text-slate-300">Оружие</p>
          <div className="space-y-2">
            {recommendations.weapons.map((weapon) => (
              <CharacterWeaponRecommendation key={weapon.name} recommendation={weapon} />
            ))}
          </div>
        </div>
        <div className="flex gap-x-6 items-center">
          <p className="text-lg text-slate-700 dark:text-slate-300">Артефакты</p>
          <div className="space-y-2">
            <div className="flex gap-x-6 items-center">
              <p className="text-lg text-slate-700 dark:text-slate-300">Наборы</p>
              <div className="space-y-2">
                {recommendations.artifacts.sets.map((artifactSet) => {
                  switch (artifactSet.type) {
                    case "complete":
                      return (
                        <CharacterCompleteArtifactSetRecommendation
                          key={`complete-${artifactSet.name}`}
                          recommendation={artifactSet}
                        />
                      );
                  }

                  return null;
                })}
              </div>
            </div>
            <div className="flex gap-x-6 items-center">
              <p className="text-lg text-slate-700 dark:text-slate-300">Характеристики</p>
              <div className="space-y-2">
                <div className="flex gap-x-6 items-center">
                  <p className="text-lg text-slate-700 dark:text-slate-300">Часы</p>
                  <div className="space-y-2">
                    {recommendations.artifacts.stats.sands.map((stat) => (
                      <div className="flex gap-x-6 items-center" key={stat.name}>
                        <p className="text-base text-pretty">{stat.name}</p>
                        {stat.notes && (
                          <ul className="pl-5 list-outside list-disc">
                            {stat.notes.map((note, index) => (
                              <li className="text-base text-pretty" key={index}>{note}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-x-6 items-center">
                  <p className="text-lg text-slate-700 dark:text-slate-300">Кубок</p>
                  <div className="space-y-2">
                    {recommendations.artifacts.stats.goblet.map((stat) => (
                      <div className="flex gap-x-6 items-center" key={stat.name}>
                        <p className="text-base text-pretty">{stat.name}</p>
                        {stat.notes && (
                          <ul className="pl-5 list-outside list-disc">
                            {stat.notes.map((note, index) => (
                              <li className="text-base text-pretty" key={index}>{note}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-x-6 items-center">
                  <p className="text-lg text-slate-700 dark:text-slate-300">Корона</p>
                  <div className="space-y-2">
                    {recommendations.artifacts.stats.circlet.map((stat) => (
                      <div className="flex gap-x-6 items-center" key={stat.name}>
                        <p className="text-base text-pretty">{stat.name}</p>
                        {stat.notes && (
                          <ul className="pl-5 list-outside list-disc">
                            {stat.notes.map((note, index) => (
                              <li className="text-base text-pretty" key={index}>{note}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-x-6 items-center">
                  <p className="text-lg text-slate-700 dark:text-slate-300">Доп.</p>
                  <div className="space-y-2">
                    {recommendations.artifacts.stats.additional.map((stat) => (
                      <div className="flex gap-x-6 items-center" key={stat.name}>
                        <p className="text-base text-pretty">{stat.name}</p>
                        {stat.notes && (
                          <ul className="pl-5 list-outside list-disc">
                            {stat.notes.map((note, index) => (
                              <li className="text-base text-pretty" key={index}>{note}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                </TableRow>
              );
          }

          return null;
        })}
      </TableBody>
    </Table>
  );
};
const CharacterTalentRecommendations: FC<{
  name: CharacterName;
  recommendations: Recommendations["talents"];
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
  return (
    <Table className="table-fixed">
      <TableBody>
        {recommendations.map(recommendation => (
          <TableRow key={recommendation.type}>
            <TableCell className="text-center text-pretty whitespace-normal">{talent[recommendation.type].name}</TableCell>
            <TableCell className="text-center text-pretty whitespace-normal">{recommendation.priority}</TableCell>
            <TableCell className="text-center text-pretty whitespace-normal">{recommendation.referenceLevel}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
const CharacterWeaponRecommendations: FC<{ recommendations: Recommendations["weapons"] }> = ({ recommendations }) => {
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
          <TableRow key={recommendation.name + (recommendation.r ? `-R${recommendation.r}` : "")}>
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CharacterPage;
