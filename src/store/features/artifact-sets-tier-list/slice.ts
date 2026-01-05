import { createSlice } from "@reduxjs/toolkit";

import type { ArtifactSetsTierList } from "./types";
import { ArtifactSetNames } from "../artifact-sets";
import { VideoSourceIds } from "../video-sources";

const initialState: ArtifactSetsTierList = {
  list: [
    {
      tier: "Нужен почти всегда",
      tierClassName: "text-green-500",
      artifactSetNames: [ArtifactSetNames.VIRIDESCENT_VENERER],
    },
    {
      tier: "Нужен ситуативно",
      tierClassName: "text-lime-500",
      artifactSetNames: [ArtifactSetNames.INSTRUCTOR, ArtifactSetNames.TENACITY_OF_THE_MILLELITH],
    },
    {
      tier: "Нет смысла фармить",
      tierClassName: "text-yellow-500",
      artifactSetNames: [
        ArtifactSetNames.BLIZZARD_STRAYER, ArtifactSetNames.GLADIATORS_FINALE, ArtifactSetNames.HEART_OF_DEPTH,
        ArtifactSetNames.PALE_FLAME, ArtifactSetNames.RETRACING_BOLIDE, ArtifactSetNames.THE_EXILE,
        ArtifactSetNames.THUNDERING_FURY, ArtifactSetNames.WANDERERS_TROUPE,
      ],
    },
    {
      tier: "Хуже Изгнанника",
      tierClassName: "text-red-500",
      artifactSetNames: [ArtifactSetNames.MAIDEN_BELOVED, ArtifactSetNames.THUNDERSOOTHER],
    },
  ],
  videoSourceId: VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025,
};

export const artifactSetsTierListSlice = createSlice({
  name: "artifactSetsTierList",
  initialState,
  reducers: {},
});

export default artifactSetsTierListSlice.reducer;
