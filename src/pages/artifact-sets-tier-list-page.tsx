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
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ArtifactSetImageLoading } from "@/components/v1/artifact-set-image";
import { Card, CardContent } from "@/components/v1/card";
import { cn } from "@/lib/utils";
import Paths from "@/paths";
import { useAppSelector } from "@/store/hooks";

const ArtifactSetsTierListPage: FC = () => {
  const artifactSetsTierList = useAppSelector(state => state.artifactSetsTierList);

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
                      {item.ids.map(id => (
                        <li className="shrink-0" key={id}>
                          <ArtifactSetImageLoading artifactSetId={id} className="size-16 rounded-md rounded-br-2xl" />
                        </li>
                      ))}
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
