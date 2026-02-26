import { type FC } from "react";
import { Link } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "@/components/ui/icons";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { Loading, LoadingError } from "@/components/v1/loading";
import { WeaponImage } from "@/components/v1/weapon-image";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useWeaponsNames } from "@/store/features/weapons";
import { type WeaponName } from "@/types/weapons.types";

const WeaponsPage: FC = () => {
  const { weaponsNames, error, loading } = useWeaponsNames();
  // const weaponsList = createRef<HTMLDivElement>();

  // useEffect(() => {
  //   if (weaponsList.current) {
  //     let maxWidth = 0;
  //
  //     for (let i = 0; i < weaponsList.current.children.length; i++) {
  //       const item = weaponsList.current.children.item(i);
  //
  //       if (item) {
  //         const width = Number(getComputedStyle(item).width.replace("px", ""));
  //
  //         console.log(width);
  //
  //         if (width > maxWidth) {
  //           maxWidth = width;
  //         }
  //       }
  //     }
  //
  //     console.log("Max width:", maxWidth);
  //   }
  // }, [weaponsList]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
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
            <BreadcrumbPage>Оружие</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(242px,1fr))] gap-6 justify-center items-stretch">
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
      className="relative transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group"
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="shrink-0 size-24.5">
          <WeaponImage className="object-cover size-full rounded-lg rounded-br-3xl" name={name} />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="before:absolute before:inset-0" to={Paths.WEAPON(JSON.stringify(name))}>{name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default WeaponsPage;
