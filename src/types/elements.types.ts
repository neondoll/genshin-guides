import type { Element as ElementDB } from "genshin-db";

export const ElementNames = {
  ANEMO: "Анемо",
  CRYO: "Крио",
  DENDRO: "Дендро",
  ELECTRO: "Электро",
  GEO: "Гео",
  HYDRO: "Гидро",
  PYRO: "Пиро",
} as const;

export type ElementName = typeof ElementNames[keyof typeof ElementNames];

export interface Element extends ElementDB {
  name: ElementName;
}
