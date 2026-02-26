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
import { Button } from "@/components/ui/button";
import { Home } from "@/components/ui/icons";
import { ArtifactSetImage } from "@/components/v1/artifact-set-image";
import { Card, CardContent, CardTitle } from "@/components/v1/card";
import { Loading, LoadingError } from "@/components/v1/loading";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSetsNames } from "@/store/features/artifact-sets";
import { type ArtifactSetName } from "@/types/artifact-sets.types";

const ArtifactSetsPage: FC = () => {
  const { artifactSetsNames, error, loading } = useArtifactSetsNames();
  // const artifactSetsList = createRef<HTMLDivElement>();

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

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError error={error} />;
  }

  return (
    <>
      <div className="flex justify-between items-start mb-8">
        <Breadcrumb>
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
        <Button asChild>
          <Link to={Paths.ARTIFACT_SETS_TIER_LIST}>Тир-лист</Link>
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(232px,1fr))] gap-6 justify-center items-stretch">
        {artifactSetsNames.map(artifactSetName => (
          <ArtifactSetCard key={artifactSetName} name={artifactSetName} />
        ))}
      </div>
    </>
  );
};
const ArtifactSetCard: FC<{ name: ArtifactSetName }> = ({ name }) => {
  return (
    <Card
      className="relative transition-all duration-300 has-[a:hover]:border-amber-500/30 has-[a:hover]:shadow-2xl group"
    >
      <CardContent className="flex flex-col gap-6 items-center">
        <div className="shrink-0 size-24.5">
          <ArtifactSetImage className="object-cover size-full rounded-lg rounded-br-3xl" name={name} />
        </div>
        <CardTitle
          className={cn([
            "text-center transition-colors group-has-[a:hover]:text-amber-700 dark:group-has-[a:hover]:text-amber-300",
          ])}
        >
          <Link className="before:absolute before:inset-0" to={Paths.ARTIFACT_SET(JSON.stringify(name))}>{name}</Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default ArtifactSetsPage;
