export const VideoSourceIds = {
  ALL_ABOUT_ALL_ARTIFACT_SETS_2023: "all_about_all_artifact_sets_2023",
  ALL_ABOUT_ALL_ARTIFACT_SETS_2025: "all_about_all_artifact_sets_2025",
  ALL_ABOUT_ALL_TALENTS: "all_about_all_talents",
  FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON: "first_constellation_or_signature_weapon",
  GUIDE_TO_AINO_IN_6_0: "guide_to_Aino_in_6.0",
  GUIDE_TO_ARLECCHINO_IN_5_3: "guide_to_Arlecchino_in_5.3",
  GUIDE_TO_CHASCA_IN_5_8: "guide_to_Chasca_in_5.8",
  GUIDE_TO_CITLALI_IN_5_8: "guide_to_Citlali_in_5.8",
  GUIDE_TO_COLUMBINA_HYPOSELENIA_IN_6_3_AnimeCool: "guide_to_Columbina_Hyposelenia_in_6.3_AnimeCool",
  GUIDE_TO_COLUMBINA_HYPOSELENIA_IN_6_3_MironMinMax: "guide_to_Columbina_Hyposelenia_in_6.3_MironMinMax",
  GUIDE_TO_DURIN_IN_6_2_AnimeCool: "guide_to_Durin_in_6.2_AnimeCool",
  GUIDE_TO_DURIN_IN_6_2_MironMinMax: "guide_to_Durin_in_6.2_MironMinMax",
  GUIDE_TO_FISCHL_IN_6_2: "guide_to_Fischl_in_6.2",
  GUIDE_TO_FURINA_IN_5_4: "guide_to_Furina_in_5.4",
  GUIDE_TO_INEFFA_IN_5_8: "guide_to_Ineffa_in_5.8",
  GUIDE_TO_JAHODA_IN_6_2: "guide_to_Jahoda_in_6.2",
  GUIDE_TO_LAUMA_IN_6_0_AnimeCool: "guide_to_Lauma_in_6.0_AnimeCool",
  GUIDE_TO_LAUMA_IN_6_0_MironMinMax: "guide_to_Lauma_in_6.0_MironMinMax",
  GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_AnimeCool: "guide_to_Kyryll_Chudomirovich_Flins_in_6.0_AnimeCool",
  GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_MironMinMax: "guide_to_Kyryll_Chudomirovich_Flins_in_6.0_MironMinMax",
  GUIDE_TO_KYRYLL_CHUDOMIROVICH_FLINS_IN_6_0_xPandaChannelx: "guide_to_Kyryll_Chudomirovich_Flins_in_6.0_xPandaChannelx",
  GUIDE_TO_MAVUIKA: "guide_to_Mavuika",
  GUIDE_TO_MUALANI_IN_5_8: "guide_to_Mualani_in_5.8",
  GUIDE_TO_NAHIDA_IN_5_1: "guide_to_Nahida_in_5.1",
  GUIDE_TO_NEFER_IN_6_1_AnimeCool: "guide_to_Nefer_in_6.1_AnimeCool",
  GUIDE_TO_NEFER_IN_6_1_MironMinMax: "guide_to_Nefer_in_6.1_MironMinMax",
  GUIDE_TO_NEUVILLETTE_IN_5_2: "guide_to_Neuvillette_in_5.2",
  GUIDE_TO_RAIDEN_SHOGUN_IN_5_0: "guide_to_Raiden_Shogun_in_5.0",
  GUIDE_TO_SKIRK_IN_5_7_AnimeCool: "guide_to_Skirk_in_5.7_AnimeCool",
  GUIDE_TO_SKIRK_IN_5_7_MironMinMax: "guide_to_Skirk_in_5.7_MironMinMax",
  GUIDE_TO_SKIRK_IN_5_7_xPandaChannelx: "guide_to_Skirk_in_5.7_xPandaChannelx",
  GUIDE_TO_VARESA_IN_6_2_AnimeCool: "guide_to_Varesa_in_6.2_AnimeCool",
  GUIDE_TO_VARESA_IN_6_2_MironMinMax: "guide_to_Varesa_in_6.2_MironMinMax",
  GUIDE_TO_VENTI_IN_6_2: "guide_to_Venti_in_6.2",
  GUIDE_TO_XIANGLING_IN_6_0: "guide_to_Xiangling_in_6.0",
  HOW_GOOD_IS_RAIDEN_SHOGUN_CONSTELLATIONS: `how_good_is_Raiden_Shogun_constellations`,
  THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER: "the_best_available_weapons_for_every_character",
  THE_BEST_WEAPONS_FOR_EVERY_CHARACTER: "the_best_weapons_for_every_character",
  WHO_NEEDS_LEVELING_PART_1: "who_needs_leveling_part_1",
  WHO_NEEDS_LEVELING_PART_2: "who_needs_leveling_part_2",
  XIANGLING_ELEMENTAL_BURST_GUIDE: "Xiangling_elemental_burst_guide",
} as const;

export type VideoSourceId = typeof VideoSourceIds[keyof typeof VideoSourceIds];

export interface VideoSource {
  id: VideoSourceId;
  author: string;
  title: string;
  date: string;
  rutube?: string;
  vkvideo?: string;
  youtube?: string;
}
