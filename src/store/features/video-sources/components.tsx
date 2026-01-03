import { type FC, useMemo } from "react";

import { selectVideoSourcesByIds } from "./slice";
import type { VideoSourceId } from "./types";
import { Button } from "@/components/ui/button";
import { SquarePlay } from "@/components/ui/icons";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppSelector } from "@/store";

export const VideoSourcesTable: FC<{ videoSourceIds: VideoSourceId[] }> = ({ videoSourceIds }) => {
  const videoSources = useAppSelector(state => selectVideoSourcesByIds(state, videoSourceIds));

  const hasRutube = useMemo(() => {
    return videoSources.some(videoSource => Boolean(videoSource.rutube));
  }, [videoSources]);
  const hasVkvideo = useMemo(() => {
    return videoSources.some(videoSource => Boolean(videoSource.vkvideo));
  }, [videoSources]);
  const hasYoutube = useMemo(() => {
    return videoSources.some(videoSource => Boolean(videoSource.vkvideo));
  }, [videoSources]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Автор</TableHead>
          <TableHead className="text-center">Название</TableHead>
          <TableHead className="text-center">Дата выхода</TableHead>
          {hasRutube && <TableHead className="text-center">RUYUBE</TableHead>}
          {hasVkvideo && <TableHead className="text-center">VK Видео</TableHead>}
          {hasYoutube && <TableHead className="text-center">YouTube</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {videoSources.map(videoSource => (
          <TableRow key={videoSource.id}>
            <TableCell className="text-center">{videoSource.author}</TableCell>
            <TableCell className="text-pretty whitespace-normal">{videoSource.title}</TableCell>
            <TableCell className="text-center">{videoSource.date}</TableCell>
            {hasRutube && (
              <TableCell className="text-center">
                {videoSource.rutube && (
                  <Button asChild size="icon-sm">
                    <a href={videoSource.rutube} target="_blank">
                      <SquarePlay />
                    </a>
                  </Button>
                )}
              </TableCell>
            )}
            {hasVkvideo && (
              <TableCell className="text-center">
                {videoSource.vkvideo && (
                  <Button asChild size="icon-sm">
                    <a href={videoSource.vkvideo} target="_blank">
                      <SquarePlay />
                    </a>
                  </Button>
                )}
              </TableCell>
            )}
            {hasYoutube && (
              <TableCell className="text-center">
                {videoSource.youtube && (
                  <Button asChild size="icon-sm">
                    <a href={videoSource.youtube} target="_blank">
                      <SquarePlay />
                    </a>
                  </Button>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
