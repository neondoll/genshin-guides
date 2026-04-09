import { type FC, useMemo } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Funnel, Home } from "@/components/ui/icons";
import { ArtifactSetImage } from "@/components/v1/artifact-set-image";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { Filter, FilterCheckbox, FilterGroup } from "@/components/v1/filter";
import { Loading, LoadingError } from "@/components/v1/loading";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSetList } from "@/store/features/artifact-sets";
import { useArtifactSetsPageFilter } from "@/store/features/artifact-sets-page-filter";
import { type ArtifactSetListItem } from "@/types/artifact-sets.types";
import { type Rarity } from "@/types/rarities.types";

const RARITIES = [1, 2, 3, 4, 5] as readonly Rarity[];

const ArtifactSetsPage: FC = () => {
  const { artifactSets, error, loading } = useArtifactSetList();
  const { filterRarities, setFilterRarities } = useArtifactSetsPageFilter();
  // const artifactSetsList = createRef<HTMLDivElement>();

  const filteredArtifactSets = useMemo(() => {
    let filteredArtifactSets = artifactSets;

    if (filterRarities.length) {
      filteredArtifactSets = filteredArtifactSets.filter((artifactSet) => {
        return artifactSet.rarityList.some(rarity => filterRarities.includes(rarity));
      });
    }

    return filteredArtifactSets;
  }, [artifactSets, filterRarities]);

  // useEffect(() => {
  //   if (artifactSetsList.current) {
  //     let maxWidth = 0;
  //
  //     for (let i = 0; i < artifactSetsList.current.children.length; i++) {
  //       const item = artifactSetsList.current.children.item(i);
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
  // }, [artifactSetsList]);
  // useEffect(() => {
  //   if (artifactSets.length) {
  //     const ids: Record<string, ArtifactSetListItem["id"]> = {};
  //
  //     Object.entries(ArtifactSetNames).forEach(([key, name]) => {
  //       const artifactSet = artifactSets.find(item => item.name === name);
  //
  //       if (artifactSet) {
  //         ids[key] = artifactSet.id;
  //       }
  //       else {
  //         console.error(`Artifact set "${name}" not found`);
  //       }
  //     });
  //
  //     console.log(ids);
  //   }
  // }, [artifactSets]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <>
      <Collapsible className="mb-8" defaultOpen={filterRarities.length > 0}>
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
                <BreadcrumbPage>Артефакты</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <CollapsibleTrigger asChild>
            <Button size="icon">
              <Funnel />
            </Button>
          </CollapsibleTrigger>
          <Button asChild>
            <Link to={Paths.ARTIFACT_SETS_TIER_LIST}>Тир-лист</Link>
          </Button>
        </div>
        <CollapsibleContent>
          <Filter>
            <FilterGroup label="Качество">
              <div className="flex flex-wrap gap-3">
                {RARITIES.map(rarity => (
                  <FilterCheckbox
                    checked={filterRarities.includes(rarity)}
                    className="flex justify-center items-center p-1 w-11.5 h-8.5 text-base/4"
                    key={rarity}
                    name="rarities"
                    onChange={event => setFilterRarities((prev) => {
                      if (event.target.checked) {
                        if (!prev.includes(rarity)) {
                          return prev.concat([rarity]);
                        }
                      }
                      else {
                        const index = prev.indexOf(rarity);

                        if (index !== -1) {
                          return prev.slice(0, index).concat(prev.slice(index + 1));
                        }
                      }

                      return prev;
                    })}
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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-6 justify-center items-stretch">
        {filteredArtifactSets.map(artifactSet => (
          <ArtifactSetCard item={artifactSet} key={artifactSet.id} />
        ))}
      </div>
    </>
  );
};
const ArtifactSetCard: FC<{ item: ArtifactSetListItem }> = ({ item }) => {
  return (
    <Card
      className={cn([
        "relative transition-all duration-300 has-focus-visible:ring-3 has-focus-visible:ring-ring/50",
        "has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group",
      ])}
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="shrink-0 size-24.5">
          <ArtifactSetImage
            artifactSetId={item.id}
            artifactSetImage={item.image}
            artifactSetName={item.name}
            artifactSetRarityList={item.rarityList}
            className="object-cover size-full rounded-lg rounded-br-3xl"
          />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="outline-hidden before:absolute before:inset-0" to={Paths.ARTIFACT_SET(item.id)}>
            {item.name}
          </Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default ArtifactSetsPage;
