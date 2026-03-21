import { type FC } from "react";
import { Link } from "react-router";

import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ArtifactSetImage } from "@/components/v1/artifact-set-image";
import { Card, CardContent } from "@/components/v1/card";
import { Loading, LoadingError } from "@/components/v1/loading";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useArtifactSetList } from "@/store/features/artifact-sets";
import { useAppSelector } from "@/store/hooks";

const ArtifactSetsTierListPage: FC = () => {
  const { artifactSets, error, loading } = useArtifactSetList();
  const artifactSetsTierList = useAppSelector(state => state.artifactSetsTierList);

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
            <BreadcrumbLink asChild>
              <Link to={Paths.ARTIFACT_SETS}>Артефакты</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Тир-лист</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardContent>
          <Table>
            <TableBody>
              {artifactSetsTierList.list.map(item => (
                <TableRow key={item.tier}>
                  <TableCell className={cn(item.tierClassName)}>{item.tier}</TableCell>
                  <TableCell>
                    <ul className="flex flex-wrap gap-2">
                      {item.ids.map((id) => {
                        const artifactSet = artifactSets.find(artifactSet => artifactSet.id === id)!;

                        return (
                          <li className="shrink-0" key={id}>
                            <Link to={Paths.ARTIFACT_SET(id)}>
                              <ArtifactSetImage
                                artifactSetId={artifactSet.id}
                                artifactSetImage={artifactSet.image}
                                artifactSetName={artifactSet.name}
                                artifactSetRarityList={artifactSet.rarityList}
                                className="size-16 rounded-md rounded-br-2xl"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ArtifactSetsTierListPage;
