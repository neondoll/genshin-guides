import { createSlice } from "@reduxjs/toolkit";

import type { ArtifactSetsTierList } from "./types";
import { ArtifactSetNames } from "../artifact-sets";
import { VideoSourceIds } from "../video-sources";

const initialState: ArtifactSetsTierList = {
  list: [
    {
      tier: "Нужен почти всегда",
      tierClassName: "text-green-500",
      artifactSetNames: [
        ArtifactSetNames.DEEPWOOD_MEMORIES, ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, ArtifactSetNames.GOLDEN_TROUPE,
        ArtifactSetNames.MARECHAUSSEE_HUNTER, ArtifactSetNames.NIGHT_OF_THE_SKYS_UNVEILING,
        ArtifactSetNames.NOBLESSE_OBLIGE, ArtifactSetNames.OBSIDIAN_CODEX,
        ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY, ArtifactSetNames.SILKEN_MOONS_SERENADE,
        ArtifactSetNames.VIRIDESCENT_VENERER,
      ],
    },
    {
      tier: "Нужен ситуативно",
      tierClassName: "text-lime-500",
      artifactSetNames: [
        ArtifactSetNames.ARCHAIC_PETRA, ArtifactSetNames.CRIMSON_WITCH_OF_FLAMES,
        ArtifactSetNames.FINALE_OF_THE_DEEP_GALLERIES, ArtifactSetNames.FLOWER_OF_PARADISE_LOST,
        ArtifactSetNames.FRAGMENT_OF_HARMONIC_WHIMSY, ArtifactSetNames.GILDED_DREAMS, ArtifactSetNames.INSTRUCTOR,
        ArtifactSetNames.LONG_NIGHTS_OATH, ArtifactSetNames.TENACITY_OF_THE_MILLELITH,
      ],
    },
    {
      tier: "Нет смысла фармить",
      tierClassName: "text-yellow-500",
      artifactSetNames: [
        ArtifactSetNames.BLIZZARD_STRAYER, ArtifactSetNames.DESERT_PAVILION_CHRONICLE,
        ArtifactSetNames.ECHOES_OF_AN_OFFERING, ArtifactSetNames.GLADIATORS_FINALE, ArtifactSetNames.HEART_OF_DEPTH,
        ArtifactSetNames.HUSK_OF_OPULENT_DREAMS, ArtifactSetNames.LAVAWALKER,
        ArtifactSetNames.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS, ArtifactSetNames.NYMPHS_DREAM,
        ArtifactSetNames.OCEAN_HUED_CLAM, ArtifactSetNames.PALE_FLAME, ArtifactSetNames.RETRACING_BOLIDE,
        ArtifactSetNames.SHIMENAWAS_REMINISCENCE, ArtifactSetNames.SONG_OF_DAYS_PAST, ArtifactSetNames.THE_EXILE,
        ArtifactSetNames.THUNDERING_FURY, ArtifactSetNames.UNFINISHED_REVERIE, ArtifactSetNames.VERMILLION_HEREAFTER,
        ArtifactSetNames.WANDERERS_TROUPE,
      ],
    },
    {
      tier: "Хуже Изгнанника",
      tierClassName: "text-red-500",
      artifactSetNames: [
        ArtifactSetNames.BLOODSTAINED_CHIVALRY, ArtifactSetNames.MAIDEN_BELOVED, ArtifactSetNames.THUNDERSOOTHER,
        ArtifactSetNames.VOURUKASHAS_GLOW,
      ],
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
