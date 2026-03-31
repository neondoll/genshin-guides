import { type FC, useMemo, useState } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Funnel, Home } from "@/components/ui/icons";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { Filter, FilterCheckbox, FilterGroup } from "@/components/v1/filter";
import { Loading, LoadingError } from "@/components/v1/loading";
import { WeaponImage } from "@/components/v1/weapon-image";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useWeaponTypes } from "@/store/features/weapon-types";
import { useWeaponList } from "@/store/features/weapons";
import { type Rarity } from "@/types/rarities.types";
import { type WeaponTypeId } from "@/types/weapon-types.types";
import { type WeaponListItem } from "@/types/weapons.types";

const RARITIES = [1, 2, 3, 4, 5] as readonly Rarity[];

const WeaponsPage: FC = () => {
  const { weaponTypes } = useWeaponTypes();
  const { weapons, error, loading } = useWeaponList();
  // const weaponsList = createRef<HTMLDivElement>();
  const [filterRarities, setFilterRarities] = useState<Rarity[]>([]);
  const [filterWeaponTypeIds, setFilterWeaponTypeIds] = useState<WeaponTypeId[]>([]);

  const filteredWeapons = useMemo(() => {
    let filteredWeapons = weapons;

    if (filterRarities.length) {
      filteredWeapons = filteredWeapons.filter((weapon) => {
        return filterRarities.includes(weapon.rarity);
      });
    }

    if (filterWeaponTypeIds.length) {
      filteredWeapons = filteredWeapons.filter((weapon) => {
        return filterWeaponTypeIds.includes(weapon.typeId);
      });
    }

    return filteredWeapons;
  }, [filterRarities, filterWeaponTypeIds, weapons]);

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
  // useEffect(() => {
  //   if (weapons.length) {
  //     const ids: Record<string, WeaponListItem["id"]> = {};
  //
  //     Object.entries(WeaponNames).forEach(([key, name]) => {
  //       const weapon = weapons.find(item => item.name === name);
  //
  //       if (weapon) {
  //         ids[key] = weapon.id;
  //       }
  //       else {
  //         console.error(`Weapon "${name}" not found`);
  //       }
  //     });
  //
  //     console.log(ids);
  //   }
  // }, [weapons]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <>
      <Collapsible className="mb-8">
        <div className="flex gap-2 items-start mb-8">
          <Breadcrumb className="mr-auto">
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
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <Funnel />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <Filter>
            <FilterGroup label="Тип">
              <div className="flex flex-wrap gap-3">
                {weaponTypes.map(weaponType => (
                  <FilterCheckbox
                    asChild
                    checked={filterWeaponTypeIds.includes(weaponType.id)}
                    className="p-1 size-8.5 rounded-full"
                    key={weaponType.id}
                    name="weapon-types"
                    onChange={(event) => {
                      if (event.target.checked) {
                        if (!filterWeaponTypeIds.includes(weaponType.id)) {
                          setFilterWeaponTypeIds(prev => prev.concat([weaponType.id]));
                        }
                      }
                      else {
                        const index = filterWeaponTypeIds.indexOf(weaponType.id);

                        if (index !== -1) {
                          setFilterWeaponTypeIds(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                        }
                      }
                    }}
                    value={weaponType.id}
                  >
                    <img alt={weaponType.name} draggable={false} src={weaponType.image} />
                  </FilterCheckbox>
                ))}
              </div>
            </FilterGroup>
            <FilterGroup label="Качество">
              <div className="flex flex-wrap gap-3">
                {RARITIES.map(rarity => (
                  <FilterCheckbox
                    checked={filterRarities.includes(rarity)}
                    className="flex justify-center items-center p-1 w-11.5 h-8.5 text-base/4"
                    key={rarity}
                    name="rarities"
                    onChange={(event) => {
                      if (event.target.checked) {
                        if (!filterRarities.includes(rarity)) {
                          setFilterRarities(prev => prev.concat([rarity]));
                        }
                      }
                      else {
                        const index = filterRarities.indexOf(rarity);

                        if (index !== -1) {
                          setFilterRarities(prev => prev.slice(0, index).concat(prev.slice(index + 1)));
                        }
                      }
                    }}
                    value={rarity}
                  >
                    {`${rarity}★`}
                  </FilterCheckbox>
                ))}
              </div>
            </FilterGroup>
          </Filter>
        </CollapsibleContent>
      </Collapsible>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(242px,1fr))] gap-6 justify-center items-stretch">
        {filteredWeapons.map(weapon => (
          <WeaponCard item={weapon} key={weapon.id} />
        ))}
      </div>
    </>
  );
};
const WeaponCard: FC<{ item: WeaponListItem }> = ({ item }) => {
  return (
    <Card
      className={cn([
        "relative transition-all duration-300 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
        "has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group",
      ])}
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="shrink-0 size-24.5">
          <WeaponImage
            className="object-cover size-full rounded-lg rounded-br-3xl"
            weaponId={item.id}
            weaponImage={item.image}
            weaponName={item.name}
            weaponRarity={item.rarity}
          />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="outline-hidden before:absolute before:inset-0" to={Paths.WEAPON(item.id)}>{item.name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default WeaponsPage;
