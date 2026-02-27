import type { Rarity } from "./rarities.types";

export const ArtifactSetIds = {
  A_DAY_CARVED_FROM_RISING_WINDS: 15044,
  ARCHAIC_PETRA: 15014,
  AUBADE_OF_MORNINGSTAR_AND_MOON: 15043,
  BLIZZARD_STRAYER: 14001,
  BLOODSTAINED_CHIVALRY: 15008,
  CRIMSON_WITCH_OF_FLAMES: 15006,
  DEEPWOOD_MEMORIES: 15025,
  DESERT_PAVILION_CHRONICLE: 15027,
  ECHOES_OF_AN_OFFERING: 15024,
  EMBLEM_OF_SEVERED_FATE: 15020,
  FINALE_OF_THE_DEEP_GALLERIES: 15040,
  FLOWER_OF_PARADISE_LOST: 15028,
  FRAGMENT_OF_HARMONIC_WHIMSY: 15035,
  GILDED_DREAMS: 15026,
  GLADIATORS_FINALE: 15001,
  GOLDEN_TROUPE: 15032,
  HEART_OF_DEPTH: 15016,
  HUSK_OF_OPULENT_DREAMS: 15021,
  INSTRUCTOR: 10007,
  LAVAWALKER: 14003,
  LONG_NIGHTS_OATH: 15039,
  MAIDEN_BELOVED: 14004,
  MARECHAUSSEE_HUNTER: 15031,
  NIGHT_OF_THE_SKYS_UNVEILING: 15041,
  NIGHTTIME_WHISPERS_IN_THE_ECHOING_WOODS: 15034,
  NOBLESSE_OBLIGE: 15007,
  NYMPHS_DREAM: 15029,
  OBSIDIAN_CODEX: 15038,
  OCEAN_HUED_CLAM: 15022,
  PALE_FLAME: 15018,
  RETRACING_BOLIDE: 15015,
  SCROLL_OF_THE_HERO_OF_CINDER_CITY: 15037,
  SHIMENAWAS_REMINISCENCE: 15019,
  SILKEN_MOONS_SERENADE: 15042,
  SONG_OF_DAYS_PAST: 15033,
  TENACITY_OF_THE_MILLELITH: 15017,
  THE_EXILE: 10009,
  THUNDERING_FURY: 15005,
  THUNDERSOOTHER: 14002,
  UNFINISHED_REVERIE: 15036,
  VERMILLION_HEREAFTER: 15023,
  VIRIDESCENT_VENERER: 15002,
  VOURUKASHAS_GLOW: 15030,
  WANDERERS_TROUPE: 15003,
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
  image: string;
}

export interface ArtifactSet {
  id: ArtifactSetId;
  name: ArtifactSetName;
  rarityList: Rarity[];
  effect1Pc?: string;
  effect2Pc?: string;
  effect4Pc?: string;
  image: string;
  version: string;
  flower?: ArtifactSetDetail;
  plume?: ArtifactSetDetail;
  sands?: ArtifactSetDetail;
  goblet?: ArtifactSetDetail;
  circlet?: ArtifactSetDetail;
}

export type ArtifactSetListItem = Pick<ArtifactSet, "id" | "name" | "rarityList" | "image">;
