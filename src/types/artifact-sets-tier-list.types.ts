import type { ArtifactSetName } from "./artifact-sets.types";
import type { VideoSourceId } from "./video-sources.types";

export interface ArtifactSetsTierList {
  list: Array<{ tier: string; tierClassName?: string; artifactSetNames: ArtifactSetName[] }>;
  videoSourceId: VideoSourceId;
}
