export const VideoSourceIds = {
  ALL_ABOUT_ALL_TALENTS: "all_about_all_talents",
  FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON: "first_constellation_or_signature_weapon",
  GUIDE_TO_AINO_IN_6_0: "guide_to_Aino_in_6.0",
  GUIDE_TO_ARLECCHINO_IN_5_3: "guide_to_Arlecchino_in_5.3",
  GUIDE_TO_DURIN_IN_6_2_AnimeCool: "guide_to_Durin_in_6.2_AnimeCool",
  GUIDE_TO_DURIN_IN_6_2_MironMinMax: "guide_to_Durin_in_6.2_MironMinMax",
  GUIDE_TO_FISCHL_IN_6_2: "guide_to_Fischl_in_6.2",
  GUIDE_TO_INEFFA_IN_5_8: "guide_to_Ineffa_in_5.8",
  GUIDE_TO_JAHODA_IN_6_2: "guide_to_Jahoda_in_6.2",
  GUIDE_TO_VARESA_IN_6_2_AnimeCool: "guide_to_Varesa_in_6.2_AnimeCool",
  GUIDE_TO_VARESA_IN_6_2_MironMinMax: "guide_to_Varesa_in_6.2_MironMinMax",
  GUIDE_TO_VENTI_IN_6_2: "guide_to_Venti_in_6.2",
  THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER: "the_best_available_weapons_for_every_character",
  THE_BEST_WEAPONS_FOR_EVERY_CHARACTER: "the_best_weapons_for_every_character",
  WHO_NEEDS_LEVELING_PART_1: "who_needs_leveling_part_1",
  WHO_NEEDS_LEVELING_PART_2: "who_needs_leveling_part_2",
} as const;

export type Rarity = 1 | 2 | 3 | 4 | 5;
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
