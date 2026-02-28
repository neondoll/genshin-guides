import { createSlice, type SliceCaseReducers, type SliceSelectors } from "@reduxjs/toolkit";

import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { type ArtifactSetsTierList } from "@/types/artifact-sets-tier-list.types";
import { VideoSourceIds } from "@/types/video-sources.types";

export type ArtifactSetsTierListState = ArtifactSetsTierList;

const initialState: ArtifactSetsTierListState = {
  list: [
    {
      tier: "Нужен почти всегда",
      tierClassName: "text-green-500",
      ids: [
        ArtifactSetIds.DEEPWOOD_MEMORIES, ArtifactSetIds.EMBLEM_OF_SEVERED_FATE, ArtifactSetIds.GOLDEN_TROUPE,
        ArtifactSetIds.MARECHAUSSEE_HUNTER, ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING, ArtifactSetIds.NOBLESSE_OBLIGE,
        ArtifactSetIds.OBSIDIAN_CODEX, ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY,
        ArtifactSetIds.SILKEN_MOONS_SERENADE, ArtifactSetIds.VIRIDESCENT_VENERER,
      ],
    },
    {
      tier: "Нужен ситуативно",
      tierClassName: "text-lime-500",
      ids: [
        ArtifactSetIds.ARCHAIC_PETRA, ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES,
        ArtifactSetIds.FINALE_OF_THE_DEEP_GALLERIES, ArtifactSetIds.FLOWER_OF_PARADISE_LOST,
        ArtifactSetIds.FRAGMENT_OF_HARMONIC_WHIMSY, ArtifactSetIds.GILDED_DREAMS, ArtifactSetIds.INSTRUCTOR,
        ArtifactSetIds.LONG_NIGHTS_OATH, ArtifactSetIds.TENACITY_OF_THE_MILLELITH,
      ],
    },
    {
      tier: "Нет смысла фармить",
      tierClassName: "text-yellow-500",
      ids: [
        ArtifactSetIds.BLIZZARD_STRAYER, ArtifactSetIds.DESERT_PAVILION_CHRONICLE, ArtifactSetIds.ECHOES_OF_AN_OFFERING,
        ArtifactSetIds.GLADIATORS_FINALE, ArtifactSetIds.HEART_OF_DEPTH, ArtifactSetIds.HUSK_OF_OPULENT_DREAMS,
        ArtifactSetIds.LAVAWALKER, ArtifactSetIds.NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS, ArtifactSetIds.NYMPHS_DREAM,
        ArtifactSetIds.OCEAN_HUED_CLAM, ArtifactSetIds.PALE_FLAME, ArtifactSetIds.RETRACING_BOLIDE,
        ArtifactSetIds.SHIMENAWAS_REMINISCENCE, ArtifactSetIds.SONG_OF_DAYS_PAST, ArtifactSetIds.THE_EXILE,
        ArtifactSetIds.THUNDERING_FURY, ArtifactSetIds.UNFINISHED_REVERIE, ArtifactSetIds.VERMILLION_HEREAFTER,
        ArtifactSetIds.WANDERERS_TROUPE,
      ],
    },
    {
      tier: "Хуже Изгнанника",
      tierClassName: "text-red-500",
      ids: [
        ArtifactSetIds.BLOODSTAINED_CHIVALRY, ArtifactSetIds.MAIDEN_BELOVED, ArtifactSetIds.THUNDERSOOTHER,
        ArtifactSetIds.VOURUKASHAS_GLOW,
      ],
    },
  ],
  videoSourceId: VideoSourceIds.ALL_ABOUT_ALL_ARTIFACT_SETS_2025,
};

export const artifactSetsTierListSlice = createSlice<ArtifactSetsTierListState, SliceCaseReducers<ArtifactSetsTierListState>, string, SliceSelectors<ArtifactSetsTierListState>, string>({
  name: "artifactSetsTierList",
  initialState,
  reducers: {},
});

export default artifactSetsTierListSlice.reducer;
