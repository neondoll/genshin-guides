import type { Artifact as ArtifactDB } from "genshin-db";

export const ArtifactSetNames = {
  ARCHAIC_PETRA: "Архаичный камень",
  BLIZZARD_STRAYER: "Заблудший в метели",
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
  INSTRUCTOR: "Инструктор",
  LONG_NIGHTS_OATH: "Клятва долгой ночи",
  MAIDEN_BELOVED: "Возлюбленная юная дева",
  MARECHAUSSEE_HUNTER: "Охотник Сумеречного двора",
  NIGHT_OF_THE_SKYS_UNVEILING: "Ночь открытия неба",
  NOBLESSE_OBLIGE: "Церемония древней знати",
  OBSIDIAN_CODEX: "Обсидиановый фолиант",
  SCROLL_OF_THE_HERO_OF_CINDER_CITY: "Свиток героя сожжённого города",
  SHIMENAWAS_REMINISCENCE: "Воспоминания Симэнавы",
  SILKEN_MOONS_SERENADE: "Серенада шёлковой луны",
  TENACITY_OF_THE_MILLELITH: "Стойкость Миллелита",
  THUNDERING_FURY: "Громогласный рёв ярости",
  VIRIDESCENT_VENERER: "Изумрудная тень",
  WANDERERS_TROUPE: "Странствующий ансамбль",
} as const;

export type ArtifactSetName = typeof ArtifactSetNames[keyof typeof ArtifactSetNames];

export interface ArtifactSet extends ArtifactDB {
  name: ArtifactSetName;
}
