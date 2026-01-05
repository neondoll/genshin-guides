import type { ArtifactSetName } from "../artifact-sets";
import type { VideoSourceId } from "../video-sources";

export interface ArtifactSetsTierList {
  list: Array<{ tier: string; tierClassName?: string; artifactSetNames: ArtifactSetName[] }>;
  videoSourceId: VideoSourceId;
}
