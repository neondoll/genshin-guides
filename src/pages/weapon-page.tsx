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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/v1/card";
import { Loading, LoadingError } from "@/components/v1/loading";
import { WeaponImage } from "@/components/v1/weapon-image";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useWeapon } from "@/store/features/weapons";
import type { WeaponId } from "@/types/weapons.types";

function extractValues(str: string): [string, number][] {
  const regex = /<color=#([A-Fa-f0-9]+)>\{(\d+(?:\.\d+)?)}<\/color>/g;
  const result: [string, number][] = [];

  let match: RegExpExecArray | null;
  while ((match = regex.exec(str)) !== null) {
    const color = match[1];
    const value = parseFloat(match[2]);
    result.push([color, value]);
  }

  return result;
}

const WeaponPage: FC = () => {
  const { weaponId } = useParams<{ weaponId: WeaponId }>();
  const { weapon, error, loading } = useWeapon(weaponId!);

  const weaponEffect = useMemo(() => {
    if (!weapon?.effectTemplateRaw) return undefined;

    const variants = extractValues(weapon.effectTemplateRaw);

    let result = weapon.effectTemplateRaw;

    variants.forEach(([color, value]) => {
      const searchValue = `<color=#${color}>{${value}}</color>`;
      const replaceValue = [
        `<span style="color:var(--${color},#${color})">${weapon?.r1?.values[value]}</span>`,
        `<span style="color:var(--${color},#${color})">${weapon?.r2?.values[value]}</span>`,
        `<span style="color:var(--${color},#${color})">${weapon?.r3?.values[value]}</span>`,
        `<span style="color:var(--${color},#${color})">${weapon?.r4?.values[value]}</span>`,
        `<span style="color:var(--${color},#${color})">${weapon?.r5?.values[value]}</span>`,
      ].join("/");

      result = result.replace(searchValue, replaceValue);
    });

    return result;
  }, [weapon]);
  const characteristics = useMemo(() => {
    return [
      { label: "Имя", value: weapon?.name },
      { label: "Тип", value: weapon?.weaponText },
      { label: "Дополнительные характеристики", value: weapon?.mainStatText },
      { label: weapon?.effectName, value: weaponEffect, className: "col-span-full" },
      { label: "Версия выхода", value: weapon?.version },
    ];
  }, [weapon, weaponEffect]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return weapon && (
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
              <Link to={Paths.WEAPONS}>Оружие</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{weapon.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-6 mb-6">
        <WeaponImage
          className="shrink-0 size-27 rounded-2xl rounded-br-4xl"
          weaponId={weapon.id}
          weaponImage={weapon.image}
          weaponName={weapon.name}
          weaponRarity={weapon.rarity}
        />
        <div>
          <h1 className="text-[2rem]/10.5">{weapon.name}</h1>
          {weapon.rarity && (
            <div className="flex">
              {[...Array(weapon.rarity)].map((_, i) => (
                <span className="leading-none text-amber-400" key={i}>★</span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-4">
            {weapon.mainStatText && <Badge children={weapon.mainStatText} variant="secondary" />}
            {weapon.rarity && <Badge children={`${weapon.rarity}★`} variant="secondary" />}
            {weapon.weaponText && <Badge children={weapon.weaponText} variant="secondary" />}
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
    </>
  );
};

export default WeaponPage;
