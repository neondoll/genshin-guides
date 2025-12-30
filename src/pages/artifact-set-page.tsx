import { type FC, useMemo } from "react";
import { Link, useParams } from "react-router";

import ImageWithFallback from "@/components/image-with-fallback";
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
import { RARITY_GRADIENTS } from "@/lib/rarity";
import { cn } from "@/lib/utils";
import { ArtifactSetIcons, ArtifactSetImage, useArtifactSet } from "@/store/features/artifact-sets";
import type { Rarity } from "@/types/base.types";

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
  const rarityGradient = useMemo(() => {
    if (!artifactSet) {
      return "";
    }

    return RARITY_GRADIENTS[Math.max(...artifactSet.rarityList) as Rarity || 0];
  }, [artifactSet]);

  useMemo(() => {
    console.log(artifactSet);
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
              <ImageWithFallback
                alt={artifactSet.flower.name}
                className={cn("size-12 rounded-md rounded-br-2xl", rarityGradient)}
                draggable={false}
                fallbackSrc={ArtifactSetIcons[artifactSet.name]?.flower}
                src={artifactSet.images.mihoyo_flower}
              />
              <div>
                <p className="text-base">{artifactSet.flower.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.flower.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.plume && (
            <div className="flex gap-x-2.25 items-center">
              <ImageWithFallback
                alt={artifactSet.plume.name}
                className={cn("size-12 rounded-md rounded-br-2xl", rarityGradient)}
                draggable={false}
                fallbackSrc={ArtifactSetIcons[artifactSet.name]?.plume}
                src={artifactSet.images.mihoyo_plume}
              />
              <div>
                <p className="text-base">{artifactSet.plume.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.plume.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.sands && (
            <div className="flex gap-x-2.25 items-center">
              <ImageWithFallback
                alt={artifactSet.sands.name}
                className={cn("size-12 rounded-md rounded-br-2xl", rarityGradient)}
                draggable={false}
                fallbackSrc={ArtifactSetIcons[artifactSet.name]?.sands}
                src={artifactSet.images.mihoyo_sands}
              />
              <div>
                <p className="text-base">{artifactSet.sands.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.sands.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.goblet && (
            <div className="flex gap-x-2.25 items-center">
              <ImageWithFallback
                alt={artifactSet.goblet.name}
                className={cn("size-12 rounded-md rounded-br-2xl", rarityGradient)}
                draggable={false}
                fallbackSrc={ArtifactSetIcons[artifactSet.name]?.goblet}
                src={artifactSet.images.mihoyo_goblet}
              />
              <div>
                <p className="text-base">{artifactSet.goblet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.goblet.relicText}</p>
              </div>
            </div>
          )}
          {artifactSet?.circlet && (
            <div className="flex gap-x-2.25 items-center">
              <ImageWithFallback
                alt={artifactSet.circlet.name}
                className={cn("size-12 rounded-md rounded-br-2xl", rarityGradient)}
                draggable={false}
                fallbackSrc={ArtifactSetIcons[artifactSet.name]?.circlet}
                src={artifactSet.images.mihoyo_circlet}
              />
              <div>
                <p className="text-base">{artifactSet.circlet.name}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">{artifactSet.circlet.relicText}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <img alt="mihoyo_flower" src={artifactSet?.images.mihoyo_flower} />
      <img alt="mihoyo_plume" src={artifactSet?.images.mihoyo_plume} />
      <img alt="mihoyo_sands" src={artifactSet?.images.mihoyo_sands} />
      <img alt="mihoyo_goblet" src={artifactSet?.images.mihoyo_goblet} />
      <img alt="mihoyo_circlet" src={artifactSet?.images.mihoyo_circlet} />
    </>
  );
};

export default ArtifactSetPage;
