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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  ArtifactSetCircletImage,
  ArtifactSetFlowerImage,
  ArtifactSetGobletImage,
  ArtifactSetImage,
  type ArtifactSetName,
  ArtifactSetPlumeImage,
  ArtifactSetSandsImage,
  useArtifactSet,
} from "@/store/features/artifact-sets";
import {
  type ArtifactSetRecommendations as Recommendations,
  useArtifactSetRecommendations,
} from "@/store/features/artifact-sets-recommendations";
import { CharacterImage, CharacterNames } from "@/store/features/characters";
import { VideoSourcesTable } from "@/store/features/video-sources";

const ArtifactSetPage: FC = () => {
  const { artifactSetId } = useParams();

  const artifactSetName = useMemo(() => JSON.parse(artifactSetId as string), [artifactSetId]);

  const { artifactSet, error, loading } = useArtifactSet(artifactSetName);

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
              <Link to="/artifact-sets">Артефакты</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{artifactSetName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 mb-6">
        <ArtifactSetImage className="shrink-0 size-27 rounded-2xl rounded-br-4xl" name={artifactSetName} />
        <div>
          <h1 className="text-[2rem]/10.5">{artifactSet?.name}</h1>
          {artifactSet?.rarityList && artifactSet.rarityList.map(rarity => (
            <div className="flex" key={rarity}>
              {[...Array(rarity)].map((_, i) => (
                <span className="leading-none text-amber-400" key={i}>★</span>
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-4">
            {artifactSet?.rarityList && artifactSet.rarityList.map(rarity => (
              <Badge children={`${rarity}★`} key={rarity} variant="secondary" />
            ))}
          </div>
        </div>
      </div>
      <Card className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Характеристики</CardTitle>
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
      <Card className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Комплект</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 grid-flow-row-dense gap-x-6 gap-y-2 md:grid-cols-2">
          {artifactSet?.flower && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetFlowerImage className="size-12 rounded-md rounded-br-2xl" name={artifactSet.name} />
              <div>
                <p className="text-base">{artifactSet.flower.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.flower.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.plume && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetPlumeImage className="size-12 rounded-md rounded-br-2xl" name={artifactSet.name} />
              <div>
                <p className="text-base">{artifactSet.plume.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.plume.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.sands && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetSandsImage className="size-12 rounded-md rounded-br-2xl" name={artifactSet.name} />
              <div>
                <p className="text-base">{artifactSet.sands.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.sands.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.goblet && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetGobletImage className="size-12 rounded-md rounded-br-2xl" name={artifactSet.name} />
              <div>
                <p className="text-base">{artifactSet.goblet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.goblet.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.circlet && (
            <div className="flex gap-x-2.25 items-center">
              <ArtifactSetCircletImage className="size-12 rounded-md rounded-br-2xl" name={artifactSet.name} />
              <div>
                <p className="text-base">{artifactSet.circlet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.circlet.relicText}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <ArtifactSetRecommendations name={artifactSetName} />
    </>
  );
};

const RecommendationTabs = {
  CARRIERS: { label: "Носители", value: "carriers" },
  PREFERRED_STATS: { label: "Предпочитаемые характеристики", value: "preferred-stats" },
  VIDEO_SOURCES: { label: "Видео-источники", value: "video-sources" },
} as const;

const ArtifactSetRecommendations: FC<{ name: ArtifactSetName }> = ({ name }) => {
  const { artifactSetRecommendations } = useArtifactSetRecommendations(name);

  const tabs = useMemo(() => {
    const items = [];

    items.push(RecommendationTabs.CARRIERS);
    items.push(RecommendationTabs.PREFERRED_STATS);
    items.push(RecommendationTabs.VIDEO_SOURCES);

    return items;
  }, []);

  return artifactSetRecommendations && (
    <Card className="mb-6 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Рекомендации по носителям и характеристикам</CardTitle>
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
          <TabsContent value={RecommendationTabs.CARRIERS.value}>
            <ArtifactSetCarrierRecommendations recommendations={artifactSetRecommendations.carriers} />
          </TabsContent>
          <TabsContent value={RecommendationTabs.PREFERRED_STATS.value}>
            <ArtifactSetPreferredStatRecommendations recommendations={artifactSetRecommendations.preferredStats} />
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
                <TableRow key={"character-" + recommendation.name}>
                  {hasBest && (
                    <TableCell className="w-16">
                      <BestTooltip className="size-12" value={recommendation.best} />
                    </TableCell>
                  )}
                  <TableCell className="w-20">
                    <CharacterImage className="size-16 rounded-md rounded-br-2xl" name={recommendation.name} />
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">{recommendation.name}</TableCell>
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
                    <CharacterImage className="size-16 rounded-md rounded-br-2xl" name={CharacterNames.LUMINE} />
                  </TableCell>
                  <TableCell className="text-pretty whitespace-normal">
                    Путешественник (
                    {recommendation.elementName}
                    )
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
  recommendations: Recommendations["preferredStats"];
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
