import type { ArtifactSetId } from "./artifact-sets";
import type { VideoSourceId } from "./video-sources";

export interface ArtifactSetsTierList {
  list: Array<{ tier: string; tierClassName?: string; ids: ArtifactSetId[] }>;
  videoSourceId: VideoSourceId;
}
