import type { Artifact as ArtifactDB } from "genshin-db";

export const ArtifactSetNames = {
  ARCHAIC_PETRA: "Архаичный камень",
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

export interface ArtifactSet extends ArtifactDB {
  name: ArtifactSetName;
}
