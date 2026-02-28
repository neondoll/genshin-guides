import type { ArtifactSetId } from "./artifact-sets.types";
import type { VideoSourceId } from "./video-sources.types";

export interface ArtifactSetsTierList {
  list: Array<{ tier: string; tierClassName?: string; ids: ArtifactSetId[] }>;
  videoSourceId: VideoSourceId;
}
