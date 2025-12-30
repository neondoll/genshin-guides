import type { Character as GenshinDbCharacter } from "genshin-db";

export const CharacterNames = {
  AINO: "Айно",
  ALBEDO: "Альбедо",
  ALHAITHAM: "Аль-Хайтам",
  ARATAKI_ITTO: "Итто",
  ARLECCHINO: "Арлекино",
  BAIZHU: "Бай Чжу",
  BARBARA: "Барбара",
  BEIDOU: "Бэй Доу",
  BENNETT: "Беннет",
  CANDACE: "Кандакия",
  CHEVREUSE: "Шеврёз",
  DAHLIA: "Далия",
  DEHYA: "Дэхья",
  DILUC: "Дилюк",
  DIONA: "Диона",
  DORI: "Дори",
  DURIN: "Дурин",
  FISCHL: "Фишль",
  FURINA: "Фурина",
  GAMING: "Ка Мин",
  GANYU: "Гань Юй",
  GOROU: "Горо",
  IANSAN: "Иансан",
  IFA: "Ифа",
  INEFFA: "Инеффа",
  JAHODA: "Ягода",
  JEAN: "Джинн",
  KACHINA: "Качина",
  KAEDEHARA_KAZUHA: "Кадзуха",
  KAMISATO_AYAKA: "Аяка",
  KAMISATO_AYATO: "Аято",
  KAVEH: "Кавех",
  KINICH: "Кинич",
  MAVUIKA: "Мавуика",
  MONA: "Мона",
  VARESA: "Вареса",
  VENTI: "Венти",
  XIANYUN: "Сянь Юнь",
  XINGQIU: "Син Цю",
  YELAN: "Е Лань",
  YOIMIYA: "Ёимия",
} as const;

export type CharacterName = typeof CharacterNames[keyof typeof CharacterNames];

export interface Character extends Omit<GenshinDbCharacter, "stats"> {
  name: CharacterName;
}
