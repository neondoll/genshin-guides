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
import { ArtifactSetImage, ArtifactSetImageLoading } from "@/components/v1/artifact-set-image";
import { BestTooltip } from "@/components/v1/best-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v1/card";
import { CharacterImage, CharacterImageLoading } from "@/components/v1/character-image";
import { ElementImage } from "@/components/v1/element-image";
import { Loading, LoadingError } from "@/components/v1/loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/v1/tabs";
import { VideoSourcesTable } from "@/components/v1/video-sources-table";
import { WeaponImage } from "@/components/v1/weapon-image";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSet } from "@/store/features/artifact-sets";
import { selectCharacterRolesByIds } from "@/store/features/character-roles";
import { useCharacter } from "@/store/features/characters";
import { useCharacterRecommendations } from "@/store/features/characters-recommendations";
import { useElementsNames } from "@/store/features/elements";
import { useTalent } from "@/store/features/talents";
import { useAppSelector } from "@/store/hooks";
import { type ArtifactSet } from "@/types/artifact-sets.types";
import { type CharacterId, type CharacterName, type TravelerName, TravelerNameArray } from "@/types/characters.types";
import {
  type CharacterArtifactSetRecommendations as ArtifactSetRecommendations,
  type CharacterArtifactStatRecommendation as ArtifactStatRecommendation,
  type CharacterCombinedArtifactSetRecommendation as CombinedArtifactSetRecommendation,
  type CharacterCompleteArtifactSetRecommendation as CompleteArtifactSetRecommendation,
  type CharacterDetachmentItemRecommendation as DetachmentItemRecommendation,
  type CharacterRecommendations as Recommendations,
  type CharacterRecommendationsName as RecommendationsName,
  type CharacterTalentRecommendations as TalentRecommendations,
  type CharacterWeaponRecommendations as WeaponRecommendations,
} from "@/types/characters-recommendations.types";
import { RarityGradients } from "@/types/rarities.types";
import { type Talent, type TalentName } from "@/types/talents.types";
import { type WeaponName } from "@/types/weapons.types";
import { formatPercent } from "@/utils/format";

const CharacterPage: FC = () => {
  const { characterId } = useParams();
  const { character, error, loading } = useCharacter(Number(characterId) as CharacterId);

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
            {character.elementText && character.elementText !== "Нет" && (
              <ElementImage className="shrink-0 size-7" name={character.elementText} />
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
      {TravelerNameArray.includes(character.name as TravelerName)
        ? <TravelerRecommendations name={character.name as TravelerName} />
        : <CharacterRecommendations name={character.name as RecommendationsName} />}
    </>
  );
};

const TravelerRecommendations: FC<{ name: TravelerName }> = ({ name }) => {
  const { elementsNames, loading } = useElementsNames();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-11">
        <div className="text-xl text-amber-300">Загрузка элементов...</div>
      </div>
    );
  }

  return (
    <Tabs className="gap-6" defaultValue={elementsNames[0]}>
      <TabsList className="flex w-full">
        {elementsNames.map(elementName => (
          <TabsTrigger className="font-bold" key={elementName} value={elementName}>
            <ElementImage className="shrink-0 size-7" name={elementName} />
            {elementName}
          </TabsTrigger>
        ))}
      </TabsList>
      {elementsNames.map(elementName => (
        <TabsContent key={elementName} value={elementName}>
          <CharacterRecommendations name={`Путешественница (${elementName})`} characterName={name} />
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

const CharacterRecommendations: FC<{ characterName?: CharacterName; name: RecommendationsName }> = ({ name }) => {
  const { characterRecommendations } = useCharacterRecommendations(name);

  const tabs = useMemo(() => {
    const items = [];

    if (
      characterRecommendations?.constellationOrSignatureWeapon || characterRecommendations?.keyConstellations
      || characterRecommendations?.recommendedLevel || characterRecommendations?.signatureWeaponNames
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
                {characterRecommendations.signatureWeaponNames && characterRecommendations.signatureWeaponNames.map((signatureWeaponName: WeaponName, index: number) => (
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
            {characterRecommendations.roleIds && (
              <CharacterRoleRecommendations recommendations={characterRecommendations.roleIds} />
            )}
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
                <CharacterCombinedArtifactSetRecommendationTableRow
                  hasBest={hasBest}
                  hasNotes={hasNotes}
                  hasPercent={hasPercent}
                  key={`combined-${recommendation.ids.join("+")}`}
                  recommendation={recommendation}
                />
              );
            case "complete":
              return (
                <CharacterCompleteArtifactSetRecommendationTableRow
                  hasBest={hasBest}
                  hasNotes={hasNotes}
                  hasPercent={hasPercent}
                  key={`complete-${recommendation.id}`}
                  recommendation={recommendation}
                />
              );
          }
        })}
      </TableBody>
    </Table>
  );
};
const CharacterCombinedArtifactSetRecommendationTableRow: FC<{
  hasBest: boolean;
  hasNotes: boolean;
  hasPercent: boolean;
  recommendation: CombinedArtifactSetRecommendation;
}> = ({ hasBest, hasNotes, hasPercent, recommendation }) => {
  const { artifactSet: artifactSet1, loading: loading1 } = useArtifactSet(recommendation.ids[0]);
  const { artifactSet: artifactSet2, loading: loading2 } = useArtifactSet(recommendation.ids[1]);

  return (
    <TableRow>
      {hasBest && (
        <TableCell className="w-16">
          <BestTooltip className="size-12" value={recommendation.best} />
        </TableCell>
      )}
      <TableCell className="w-20">
        <div className="grid grid-cols-2 size-16">
          <CharacterArtifactSetRecommendationImage
            artifactSet={artifactSet1}
            className="aspect-square col-start-1 col-end-2 row-start-1 row-end-2 rounded-sm rounded-br-lg"
            loading={loading1}
          />
          <CharacterArtifactSetRecommendationImage
            artifactSet={artifactSet2}
            className="aspect-square col-start-2 col-end-3 row-start-2 row-end-3 rounded-sm rounded-br-lg"
            loading={loading2}
          />
        </div>
      </TableCell>
      {/* <TableCell className="w-38">
        <div className="flex gap-4 justify-center items-center">
          <CharacterArtifactSetRecommendationImage
            artifactSet={artifactSet1}
            className="shrink-0 size-16 rounded-md rounded-br-2xl"
            loading={loading1}
          />
          <CharacterArtifactSetRecommendationImage
            artifactSet={artifactSet2}
            className="shrink-0 size-16 rounded-md rounded-br-2xl"
            loading={loading2}
          />
        </div>
      </TableCell> */}
      <TableCell className="text-pretty whitespace-normal">{`${artifactSet1?.name} + ${artifactSet2?.name}`}</TableCell>
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
};
const CharacterCompleteArtifactSetRecommendationTableRow: FC<{
  hasBest: boolean;
  hasNotes: boolean;
  hasPercent: boolean;
  recommendation: CompleteArtifactSetRecommendation;
}> = ({ hasBest, hasNotes, hasPercent, recommendation }) => {
  const { artifactSet, loading } = useArtifactSet(recommendation.id);

  return (
    <TableRow>
      {hasBest && (
        <TableCell className="w-16">
          <BestTooltip className="size-12" value={recommendation.best} />
        </TableCell>
      )}
      <TableCell className="w-20">
        <div className="flex gap-4 justify-center items-center">
          <CharacterArtifactSetRecommendationImage
            artifactSet={artifactSet}
            className="shrink-0 size-16 rounded-md rounded-br-2xl"
            loading={loading}
          />
        </div>
      </TableCell>
      <TableCell className="text-pretty whitespace-normal">{artifactSet?.name}</TableCell>
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
};
const CharacterArtifactSetRecommendationImage: FC<{
  artifactSet?: ArtifactSet;
  className?: string;
  loading: boolean;
}> = ({ artifactSet, className, loading }) => {
  if (loading) {
    return <Skeleton className={cn(RarityGradients[0], className)} />;
  }

  return artifactSet && (
    <ArtifactSetImage
      artifactSetId={artifactSet.id}
      artifactSetImage={artifactSet.image}
      artifactSetName={artifactSet.name}
      artifactSetRarityList={artifactSet.rarityList}
      className={className}
    />
  );
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
              <TableCell className="text-center text-pretty whitespace-normal">{recommendation.description}</TableCell>
            )}
            <TableCell className="text-pretty whitespace-normal">
              <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*26))] gap-2">
                {recommendation.template.map((item, index) => (
                  <CharacterDetachmentItemRecommendation item={item} key={index} />
                ))}
              </div>
            </TableCell>
            {hasVariants && (
              <TableCell className="space-y-2 text-pretty whitespace-normal">
                {recommendation.variants?.map((variant, index) => (
                  <div className="grid grid-cols-[repeat(4,calc(var(--spacing)*26))] gap-2" key={index}>
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
const CharacterDetachmentItemRecommendation: FC<{ item: DetachmentItemRecommendation }> = ({ item }) => {
  switch (item.type) {
    case "character":
      return (
        <UiCard className="flex relative flex-col gap-1 justify-start items-center p-2">
          <CharacterImageLoading characterId={item.id} className="shrink-0 size-21.5 rounded-md rounded-br-2xl" />
          <p className="my-auto text-center">{item.id}</p>
          {item.c !== undefined && (
            <span className="absolute top-2 left-2 p-1 text-sm/none text-center bg-card/60 rounded-tl-md rounded-br-md">
              {`С${item.c}`}
            </span>
          )}
          {(item.weapon || item.artifacts) && (
            <div className="grid grid-cols-2 gap-1 items-center my-auto">
              {item.weapon
                ? (
                    <div className="aspect-square relative">
                      <WeaponImage className="rounded-sm" name={item.weapon} />
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
              {item.artifacts
                ? (
                    <div
                      className="grid"
                      style={{ gridTemplateColumns: `repeat(${item.artifacts.length},minmax(0,1fr))` }}
                    >
                      {item.artifacts.map((artifact, index) => (
                        <ArtifactSetImageLoading
                          artifactSetId={artifact}
                          className="aspect-square rounded-sm"
                          key={artifact}
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
    case "element":
      return (
        <UiCard className="flex flex-col gap-1 justify-start items-center p-2">
          <ElementImage className="shrink-0 p-2 size-21.5 rounded-md rounded-br-2xl" name={item.name} />
          <p className="my-auto text-center">
            {item.name}
            {" персонаж"}
          </p>
        </UiCard>
      );
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
const CharacterTalentRecommendations: FC<{
  name: TalentName;
  recommendations: NonNullable<Recommendations["talents"]>;
}> = ({ name, recommendations }) => {
  const { talent } = useTalent(name);

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
              {talent[recommendation.type].name}
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
