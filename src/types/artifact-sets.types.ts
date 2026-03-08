import type { Rarity } from "./rarities.types";

export const ArtifactSetIds = {
  A_DAY_CARVED_FROM_RISING_WINDS: "a_day_carved_from_rising_winds",
  ARCHAIC_PETRA: "archaic_petra",
  AUBADE_OF_MORNINGSTAR_AND_MOON: "aubade_of_morningstar_and_moon",
  BLIZZARD_STRAYER: "blizzard_strayer",
  BLOODSTAINED_CHIVALRY: "bloodstained_chivalry",
  CRIMSON_WITCH_OF_FLAMES: "crimson_witch_of_flames",
  DEEPWOOD_MEMORIES: "deepwood_memories",
  DESERT_PAVILION_CHRONICLE: "desert_pavilion_chronicle",
  ECHOES_OF_AN_OFFERING: "echoes_of_an_offering",
  EMBLEM_OF_SEVERED_FATE: "emblem_of_severed_fate",
  FINALE_OF_THE_DEEP_GALLERIES: "finale_of_the_deep_galleries",
  FLOWER_OF_PARADISE_LOST: "flower_of_paradise_lost",
  FRAGMENT_OF_HARMONIC_WHIMSY: "fragment_of_harmonic_whimsy",
  GILDED_DREAMS: "gilded_dreams",
  GLADIATORS_FINALE: "gladiators_finale",
  GOLDEN_TROUPE: "golden_troupe",
  HEART_OF_DEPTH: "heart_of_depth",
  HUSK_OF_OPULENT_DREAMS: "husk_of_opulent_dreams",
  INSTRUCTOR: "instructor",
  LAVAWALKER: "lavawalker",
  LONG_NIGHTS_OATH: "long_nights_oath",
  MAIDEN_BELOVED: "maiden_beloved",
  MARECHAUSSEE_HUNTER: "marechaussee_hunter",
  NIGHT_OF_THE_SKYS_UNVEILING: "night_of_the_skys_unveiling",
  NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS: "nighttime_whispers_in_the_echoing_woods",
  NOBLESSE_OBLIGE: "noblesse_oblige",
  NYMPHS_DREAM: "nymphs_dream",
  OBSIDIAN_CODEX: "obsidian_codex",
  OCEAN_HUED_CLAM: "ocean_hued_clam",
  PALE_FLAME: "pale_flame",
  RETRACING_BOLIDE: "retracing_bolide",
  SCROLL_OF_THE_HERO_OF_CINDER_CITY: "scroll_of_the_hero_of_cinder_city",
  SHIMENAWAS_REMINISCENCE: "shimenawas_reminiscence",
  SILKEN_MOONS_SERENADE: "silken_moons_serenade",
  SONG_OF_DAYS_PAST: "song_of_days_past",
  TENACITY_OF_THE_MILLELITH: "tenacity_of_the_millelith",
  THE_EXILE: "the_exile",
  THUNDERING_FURY: "thundering_fury",
  THUNDERSOOTHER: "thundersoother",
  UNFINISHED_REVERIE: "unfinished_reverie",
  VERMILLION_HEREAFTER: "vermillion_hereafter",
  VIRIDESCENT_VENERER: "viridescent_venerer",
  VOURUKASHAS_GLOW: "vourukashas_glow",
  WANDERERS_TROUPE: "wanderers_troupe",
} as const;
export type ArtifactSetId = typeof ArtifactSetIds[keyof typeof ArtifactSetIds];

export const ArtifactSetNames = {
  A_DAY_CARVED_FROM_RISING_WINDS: "День восходящих ветров",
  ARCHAIC_PETRA: "Архаичный камень",
  AUBADE_OF_MORNINGSTAR_AND_MOON: "Рассветная песнь звезды и луны",
  BLIZZARD_STRAYER: "Заблудший в метели",
  BLOODSTAINED_CHIVALRY: "Рыцарь крови",
  CRIMSON_WITCH_OF_FLAMES: "Горящая алая ведьма",
  DEEPWOOD_MEMORIES: "Воспоминания дремучего леса",
  DESERT_PAVILION_CHRONICLE: "Хроники Чертогов в пустыне",
  ECHOES_OF_AN_OFFERING: "Отголоски подношения",
  EMBLEM_OF_SEVERED_FATE: "Эмблема рассечённой судьбы",
  FINALE_OF_THE_DEEP_GALLERIES: "Финал галерей глубин",
  FLOWER_OF_PARADISE_LOST: "Цветок потерянного рая",
  FRAGMENT_OF_HARMONIC_WHIMSY: "Фрагмент гармонической фантазии",
  GILDED_DREAMS: "Позолоченные сны",
  GLADIATORS_FINALE: "Конец гладиатора",
  GOLDEN_TROUPE: "Золотая труппа",
  HEART_OF_DEPTH: "Сердце глубин",
  HUSK_OF_OPULENT_DREAMS: "Кокон сладких грёз",
  INSTRUCTOR: "Инструктор",
  LAVAWALKER: "Ступающий по лаве",
  LONG_NIGHTS_OATH: "Клятва долгой ночи",
  MAIDEN_BELOVED: "Возлюбленная юная дева",
  MARECHAUSSEE_HUNTER: "Охотник Сумеречного двора",
  NIGHT_OF_THE_SKYS_UNVEILING: "Ночь открытия неба",
  NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS: "Ночной шёпот в Лесу откликающегося эха",
  NOBLESSE_OBLIGE: "Церемония древней знати",
  NYMPHS_DREAM: "Сон нимфы",
  OBSIDIAN_CODEX: "Обсидиановый фолиант",
  OCEAN_HUED_CLAM: "Моллюск морских красок",
  PALE_FLAME: "Бледный огонь",
  RETRACING_BOLIDE: "Встречная комета",
  SCROLL_OF_THE_HERO_OF_CINDER_CITY: "Свиток героя сожжённого города",
  SHIMENAWAS_REMINISCENCE: "Воспоминания Симэнавы",
  SILKEN_MOONS_SERENADE: "Серенада шёлковой луны",
  SONG_OF_DAYS_PAST: "Песнь былых времён",
  TENACITY_OF_THE_MILLELITH: "Стойкость Миллелита",
  THE_EXILE: "Изгнанник",
  THUNDERING_FURY: "Громогласный рёв ярости",
  THUNDERSOOTHER: "Усмиряющий гром",
  UNFINISHED_REVERIE: "Незаконченные грёзы",
  VERMILLION_HEREAFTER: "Киноварное загробье",
  VIRIDESCENT_VENERER: "Изумрудная тень",
  VOURUKASHAS_GLOW: "Сияние Вурукаши",
  WANDERERS_TROUPE: "Странствующий ансамбль",
} as const;
export type ArtifactSetName = typeof ArtifactSetNames[keyof typeof ArtifactSetNames];

export interface ArtifactSetDetail {
  name: string;
  relicText: string;
  image?: string;
}

export interface ArtifactSet {
  id: ArtifactSetId;
  name: ArtifactSetName;
  rarityList: Rarity[];
  effect1Pc?: string;
  effect2Pc?: string;
  effect4Pc?: string;
  image?: string;
  version: string;
  flower?: ArtifactSetDetail;
  plume?: ArtifactSetDetail;
  sands?: ArtifactSetDetail;
  goblet?: ArtifactSetDetail;
  circlet?: ArtifactSetDetail;
}

export type ArtifactSetListItem = Pick<ArtifactSet, "id" | "name" | "rarityList" | "image">;
