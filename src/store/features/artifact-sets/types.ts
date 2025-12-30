import type { Artifact as GenshinDbArtifact } from "genshin-db";

export const ArtifactSetNames = {
  CRIMSON_WITCH_OF_FLAMES: "Горящая алая ведьма",
  DEEPWOOD_MEMORIES: "Воспоминания дремучего леса",
  DESERT_PAVILION_CHRONICLE: "Хроники Чертогов в пустыне",
  ECHOES_OF_AN_OFFERING: "Отголоски подношения",
  EMBLEM_OF_SEVERED_FATE: "Эмблема рассечённой судьбы",
  FRAGMENT_OF_HARMONIC_WHIMSY: "Фрагмент гармонической фантазии",
  GILDED_DREAMS: "Позолоченные сны",
  GLADIATORS_FINALE: "Конец гладиатора",
  GOLDEN_TROUPE: "Золотая труппа",
  INSTRUCTOR: "Инструктор",
  LONG_NIGHTS_OATH: "Клятва долгой ночи",
  MARECHAUSSEE_HUNTER: "Охотник Сумеречного двора",
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

export interface ArtifactSet extends Omit<GenshinDbArtifact, "stats"> {
  name: ArtifactSetName;
}
