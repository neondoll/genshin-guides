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
import { useWeaponsNames, WeaponImage, type WeaponName } from "@/store/features/weapons";

const WeaponsPage: FC = () => {
  const { weaponsNames, error, loading } = useWeaponsNames();

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
            <BreadcrumbPage>Оружие</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 justify-center items-stretch">
        {weaponsNames.map(weaponName => (
          <WeaponCard key={weaponName} name={weaponName} />
        ))}
      </div>
    </>
  );
};
const WeaponCard: FC<{ name: WeaponName }> = ({ name }) => {
  return (
    <Card
      className={cn([
        "relative bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl",
        "transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group",
        "dark:from-slate-800 dark:to-slate-900 dark:border-slate-700",
      ])}
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="shrink-0 size-24.5">
          <WeaponImage className="object-cover size-full rounded-lg rounded-br-3xl" name={name} />
        </div>
        <CardTitle
          className={cn([
            "text-xl font-bold text-center transition-colors group-has-[a:hover]:text-amber-700",
            "dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="before:absolute before:inset-0" to={`/weapons/${JSON.stringify(name)}`}>{name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default WeaponsPage;
