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
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store";
import { ArtifactSetImage } from "@/store/features/artifact-sets";

const ArtifactSetsTierListPage: FC = () => {
  const artifactSetsTierList = useAppSelector(state => state.artifactSetsTierList);

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
            <BreadcrumbPage>Тир-лист</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl border-slate-300 shadow-xl dark:from-slate-800 dark:to-slate-900 dark:border-slate-700">
        <CardContent>
          <Table>
            <TableBody>
              {artifactSetsTierList.list.map(item => (
                <TableRow key={item.tier}>
                  <TableCell className={cn(item.tierClassName)}>{item.tier}</TableCell>
                  <TableCell>
                    <ul className="flex flex-wrap gap-2">
                      {item.artifactSetNames.map(artifactSetName => (
                        <li className="shrink-0" key={artifactSetName}>
                          <ArtifactSetImage className="size-16 rounded-md rounded-br-2xl" name={artifactSetName} />
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
