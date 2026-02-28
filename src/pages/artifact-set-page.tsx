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
import { Home } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  ArtifactSetCircletImage,
  ArtifactSetFlowerImage,
  ArtifactSetGobletImage,
  ArtifactSetImage,
  ArtifactSetPlumeImage,
  ArtifactSetSandsImage,
} from "@/components/v1/artifact-set-image";
import { BestTooltip } from "@/components/v1/best-tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v1/card";
import { CharacterImageLoading } from "@/components/v1/character-image";
import { Loading, LoadingError } from "@/components/v1/loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/v1/tabs";
import { VideoSourcesTable } from "@/components/v1/video-sources-table";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSet } from "@/store/features/artifact-sets";
import { useArtifactSetRecommendations } from "@/store/features/artifact-sets-recommendations";
import { type ArtifactSetId } from "@/types/artifact-sets.types";
import { type ArtifactSetRecommendations as Recommendations } from "@/types/artifact-sets-recommendations.types";
import { CharacterIds } from "@/types/characters.types";

const ArtifactSetPage: FC = () => {
  const { artifactSetId } = useParams<{ artifactSetId: ArtifactSetId }>();
  const { artifactSet, error, loading } = useArtifactSet(artifactSetId!);

  const characteristics = useMemo(() => {
    return [
      { label: "Имя", value: artifactSet?.name },
      { label: "1 предмет(а)", value: artifactSet?.effect1Pc, className: "col-span-full" },
      { label: "2 предмет(а)", value: artifactSet?.effect2Pc, className: "col-span-full" },
      { label: "4 предмет(а)", value: artifactSet?.effect4Pc, className: "col-span-full" },
      { label: "Версия выхода", value: artifactSet?.version },
    ];
  }, [artifactSet]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return artifactSet && (
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
              <Link to={Paths.ARTIFACT_SETS}>Артефакты</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{artifactSet.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 mb-6">
        <ArtifactSetImage
          artifactSetId={artifactSet.id}
          artifactSetImage={artifactSet.image}
          artifactSetName={artifactSet.name}
          artifactSetRarityList={artifactSet.rarityList}
          className="shrink-0 size-27 rounded-2xl rounded-br-4xl"
        />
        <div>
          <h1 className="text-[2rem]/10.5">{artifactSet.name}</h1>
          {artifactSet.rarityList && artifactSet.rarityList.map(rarity => (
            <div className="flex" key={rarity}>
              {[...Array(rarity)].map((_, i) => (
                <span className="leading-none text-amber-400" key={i}>★</span>
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-4">
            {artifactSet.rarityList && artifactSet.rarityList.map(rarity => (
              <Badge children={`${rarity}★`} key={rarity} variant="secondary" />
            ))}
          </div>
        </div>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Характеристики</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-flow-row-dense gap-x-6 gap-y-2 md:grid-cols-2">
          {characteristics.map(({ label, value, className }) => {
            return value && (
              <p className={cn("text-base", className)} key={value}>
                <span className="text-slate-700 dark:text-slate-300">{`${label}: `}</span>
                <span dangerouslySetInnerHTML={{ __html: value }} />
              </p>
            );
          })}
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Комплект</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-flow-row-dense gap-x-6 gap-y-2 md:grid-cols-2">
          {artifactSet.flower && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetFlowerImage
                artifactSetId={artifactSet.id}
                artifactSetDetail={artifactSet.flower}
                artifactSetRarityList={artifactSet.rarityList}
                className="size-12 rounded-md rounded-br-2xl"
              />
              <div>
                <p className="text-base">{artifactSet.flower.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.flower.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet.plume && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetPlumeImage
                artifactSetId={artifactSet.id}
                artifactSetDetail={artifactSet.plume}
                artifactSetRarityList={artifactSet.rarityList}
                className="size-12 rounded-md rounded-br-2xl"
              />
              <div>
                <p className="text-base">{artifactSet.plume.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.plume.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet.sands && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetSandsImage
                artifactSetId={artifactSet.id}
                artifactSetDetail={artifactSet.sands}
                artifactSetRarityList={artifactSet.rarityList}
                className="size-12 rounded-md rounded-br-2xl"
              />
              <div>
                <p className="text-base">{artifactSet.sands.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.sands.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet.goblet && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetGobletImage
                artifactSetId={artifactSet.id}
                artifactSetDetail={artifactSet.goblet}
                artifactSetRarityList={artifactSet.rarityList}
                className="size-12 rounded-md rounded-br-2xl"
              />
              <div>
                <p className="text-base">{artifactSet.goblet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.goblet.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet.circlet && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetCircletImage
                artifactSetId={artifactSet.id}
                artifactSetDetail={artifactSet.circlet}
                artifactSetRarityList={artifactSet.rarityList}
                className="size-12 rounded-md rounded-br-2xl"
              />
              <div>
                <p className="text-base">{artifactSet.circlet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.circlet.relicText}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <ArtifactSetRecommendations artifactSetId={artifactSet.id} />
    </>
  );
};

const RecommendationTabs = {
  CARRIERS: { label: "Носители", value: "carriers" },
  PREFERRED_STATS: { label: "Предпочитаемые характеристики", value: "preferred-stats" },
  VIDEO_SOURCES: { label: "Видео-источники", value: "video-sources" },
} as const;

const ArtifactSetRecommendations: FC<{ artifactSetId: ArtifactSetId }> = ({ artifactSetId }) => {
  const { artifactSetRecommendations } = useArtifactSetRecommendations(artifactSetId);

  const tabs = useMemo(() => {
    const items = [];

    items.push(RecommendationTabs.CARRIERS);

    if (artifactSetRecommendations?.preferredStats) {
      items.push(RecommendationTabs.PREFERRED_STATS);
    }

    items.push(RecommendationTabs.VIDEO_SOURCES);

    return items;
  }, [artifactSetRecommendations]);

  return artifactSetRecommendations && (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Рекомендации по носителям и характеристикам</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs className="gap-4" defaultValue={tabs[0].value}>
          <TabsList className="flex flex-wrap w-full">
            {tabs.map(({ label, value }) => (
              <TabsTrigger className="font-semibold" key={value} value={value}>{label}</TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value={RecommendationTabs.CARRIERS.value}>
            <ArtifactSetCarrierRecommendations recommendations={artifactSetRecommendations.carriers} />
          </TabsContent>
          <TabsContent value={RecommendationTabs.PREFERRED_STATS.value}>
            {artifactSetRecommendations.preferredStats && (
              <ArtifactSetPreferredStatRecommendations recommendations={artifactSetRecommendations.preferredStats} />
            )}
          </TabsContent>
          <TabsContent value={RecommendationTabs.VIDEO_SOURCES.value}>
            <VideoSourcesTable videoSourceIds={artifactSetRecommendations.videoSourceIds} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
const ArtifactSetCarrierRecommendations: FC<{
  recommendations: Recommendations["carriers"];
}> = ({ recommendations }) => {
  const hasBest = useMemo(() => {
    return recommendations.some(recommendation => Boolean(recommendation.best));
  }, [recommendations]);

  return (
    <Table>
      <TableBody>
        {recommendations.map((recommendation) => {
          switch (recommendation.type) {
            case "character":
              return (
                <TableRow key={"character-" + recommendation.id}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="w-20">
                    <CharacterImageLoading
                      characterId={recommendation.id}
                      className="size-16 rounded-md rounded-br-2xl"
                    />
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">{recommendation.id}</TableCell>
                </TableRow>
              );
            case "other":
              return (
                <TableRow key={"other-" + recommendation.title}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="text-pretty whitespace-normal" colSpan={2}>{recommendation.title}</TableCell>
                </TableRow>
              );
            case "traveler":
              return (
                <TableRow key={"traveler-" + recommendation.elementName}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="w-20">
                    <CharacterImageLoading
                      characterId={CharacterIds.LUMINE}
                      className="size-16 rounded-md rounded-br-2xl"
                    />
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">
                    {`Путешественник (${recommendation.elementName})`}
                  </TableCell>
                </TableRow>
              );
          }
        })}
      </TableBody>
    </Table>
  );
};
const ArtifactSetPreferredStatRecommendations: FC<{
  recommendations: NonNullable<Recommendations["preferredStats"]>;
}> = ({ recommendations }) => {
  const recommendationsKeys = useMemo(() => {
    return Object.keys(recommendations) as Array<keyof typeof recommendations>;
  }, [recommendations]);
  const rowsCount = useMemo(() => {
    return Math.max(...recommendationsKeys.map(key => recommendations[key].length));
  }, [recommendations, recommendationsKeys]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {recommendationsKeys.map(key => (
            <TableHead className="text-base text-center text-slate-700 dark:text-slate-300" key={key}>
              {key === "sands" && "Часы"}
              {key === "goblet" && "Кубок"}
              {key === "circlet" && "Корона"}
              {key === "additional" && "Доп."}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rowsCount }).map((_, index) => (
          <TableRow className="text-center" key={index}>
            {recommendationsKeys.map(key => (
              <TableCell key={index + "-" + key}>{recommendations[key][index]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ArtifactSetPage;
